import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ClientDashboardService } from 'src/app/Services/client-dashboard.service';

@Component({
  selector: 'app-job-ongoing',
  templateUrl: './job-ongoing.component.html',
  styleUrls: ['./job-ongoing.component.css']
})
export class JobOngoingComponent implements OnInit {
  displayedColumns: string[] = ['b_id','b_address', 'b_city', 'b_state', 'payment_status', 'b_date', 's_type', 'b_price','acceptBooking'];
  dataSource: MatTableDataSource<any>;
  custId;
  bookingData: object[] = [];
  
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private serivedashBoard: ClientDashboardService) {
  }
  
  ngOnInit() {
    this.custId = localStorage.getItem("cust_id");
    this.getData();
  }
  
  getData(){
    this.serivedashBoard.getBookingData(this.custId).subscribe((bookingObj: object[]) => {
      bookingObj.forEach((e)=>{
        e["b_time"] = e["b_time"].substring(0,5);
      })
      bookingObj=bookingObj.filter((e)=>{
        if(e['b_accepted']=='A' && e['completion_status']=='F'){
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
}
  