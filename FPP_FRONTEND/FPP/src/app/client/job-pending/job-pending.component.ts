import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { ClientDashboardService } from 'src/app/Services/client-dashboard.service';

@Component({
  selector: 'app-job-pending',
  templateUrl: './job-pending.component.html',
  styleUrls: ['./job-pending.component.css']
})
export class JobPendingComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['b_id', 'b_address', 'b_city', 'b_state', 'payment_status', 'b_date', 's_type', 'b_price', 'acceptBooking'];
  dataSource: MatTableDataSource<any>;
  custId;
  bookingData: object[] = [];
  intervalFlag;


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private serivedashBoard: ClientDashboardService) {
  }

  ngOnInit() {
    this.custId = localStorage.getItem("cust_id");
    this.getData();
    this.intervalFlag = setInterval(()=>{
      this.serivedashBoard.getBookingData(this.custId).subscribe((bookingObj: object[]) => {
        bookingObj.forEach((e) => {
          e["b_time"] = e["b_time"].substring(0, 5);
        })
        bookingObj = bookingObj.filter((e) => {
          if (e['b_accepted'] == 'F' || e['b_accepted'] == 'D') {
            return true;
          }
          else {
            return false;
          }
        });
        this.bookingData = bookingObj;
        this.dataSource = new MatTableDataSource(this.bookingData);
        this.dataSource.sort = this.sort;
      })
    },5000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalFlag);
  }

  getData() {
    this.serivedashBoard.getBookingData(this.custId).subscribe((bookingObj: object[]) => {
      bookingObj.forEach((e) => {
        e["b_time"] = e["b_time"].substring(0, 5);
      })
      bookingObj = bookingObj.filter((e) => {
        if (e['b_accepted'] == 'F' || e['b_accepted'] == 'D') {
          return true;
        }
        else {
          return false;
        }
      });
      this.bookingData = bookingObj;
      this.dataSource = new MatTableDataSource(this.bookingData);
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  jobDeclined(b_id) {
    let obj = {
      'b_id': b_id,
      'b_accepted': 'C'
    }
    this.serivedashBoard.updateBookingConfirmation(b_id, obj).subscribe((p) => {
      this.getData();
    });
  }
}
