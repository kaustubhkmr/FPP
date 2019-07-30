import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ClientDashboardService } from 'src/app/Services/client-dashboard.service';
import { SeeSupDetailsComponent } from '../see-sup-details/see-sup-details.component';

@Component({
  selector: 'app-job-ongoing',
  templateUrl: './job-ongoing.component.html',
  styleUrls: ['./job-ongoing.component.css']
})
export class JobOngoingComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['b_id','b_address', 'b_city', 'b_state', 'payment_status', 'b_date', 's_type', 'b_price','acceptBooking','supplier_details'];
  dataSource: MatTableDataSource<any>;
  custId;
  bookingData: object[] = [];
  intervalFlag;
  
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private serivedashBoard: ClientDashboardService,private dialog:MatDialog) {
  }
  
  ngOnInit() {
    this.custId = localStorage.getItem("cust_id");
    this.getData();
    this.intervalFlag = setInterval(()=>{
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
    },5000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalFlag);
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
      console.log(this.bookingData["b_pricetag"])
      this.dataSource = new MatTableDataSource(this.bookingData);
      this.dataSource.sort = this.sort;
    })
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  seeSupDetails(b_id) {

    const dialogRef = this.dialog.open(SeeSupDetailsComponent, {
      width: '400px',
      data: { "b_id": b_id }
    });
  }
}
  