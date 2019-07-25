import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.component.html',
  styleUrls: ['./job-request.component.css']
})
export class JobRequestComponent implements OnInit {
  displayedColumns: string[] = ['b_address', 'b_city', 'b_state', 'payment_status', 'b_date', 's_type', 'b_price','acceptBooking'];
  dataSource: MatTableDataSource<any>;
  supId;
  bookingData: object[] = [];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private serivedashBoard: DashboardService) {
  }

  ngOnInit() {
    this.supId = localStorage.getItem("sup_id");
    this.getData();
  }

  getData(){
    this.serivedashBoard.getBookingData(this.supId).subscribe((bookingObj: object[]) => {
      bookingObj.forEach((e)=>{
        e["b_time"] = e["b_time"].substring(0,5);
      })
      bookingObj=bookingObj.filter((e)=>{
        if(e['b_accepted']=='F'){
          return true;
        }
        else{
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

  jobAccepted(b_id){
    let obj = {
      'b_id': b_id,
      'b_accepted':'A'
    }
    this.serivedashBoard.updateBookingConfirmation(b_id,obj).subscribe((p)=>{
      this.getData();
    });
  }

  jobDeclined(b_id){
    let obj = {
      'b_id': b_id,
      'b_accepted':'D'
    }
    this.serivedashBoard.updateBookingConfirmation(b_id,obj).subscribe((p)=>{
      this.getData();
    });
  }
}
