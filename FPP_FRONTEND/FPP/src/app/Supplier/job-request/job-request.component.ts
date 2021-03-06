import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SeeCustDetailsComponent } from '../see-cust-details/see-cust-details.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.component.html',
  styleUrls: ['./job-request.component.css']
})
export class JobRequestComponent implements OnInit {
  displayedColumns: string[] = ['b_address', 'b_city', 'b_state', 'payment_status', 'b_date', 's_type', 'b_price','acceptBooking','customer_details'];
  dataSource: MatTableDataSource<any>;
  supId;
  bookingData: object[] = [];
  bookingDataLen:number;
  intervalFlag;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private serivedashBoard: DashboardService,private dialog:MatDialog) {
  }

  ngOnInit() {
    this.supId = localStorage.getItem("sup_id");
    this.getData();
    this.intervalFlag=setInterval(()=>{
      this.serivedashBoard.getBookingDataRealtime(this.supId,this.bookingDataLen).subscribe((bookingObj: object[]) => {
        if(!isNullOrUndefined(bookingObj)) {
          this.bookingDataLen = bookingObj.length;
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
        }
      })
    }, 10000);
    
  }

  ngOnDestroy(){
    clearInterval(this.intervalFlag);
  }

  getData():number{
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
      this.bookingDataLen = this.bookingData.length;
      this.dataSource = new MatTableDataSource(this.bookingData);
      this.dataSource.sort = this.sort;
    })
    return 0;
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

  seeCustDetails(b_id){

    const dialogRef = this.dialog.open(SeeCustDetailsComponent, {
      width: '400px',
      data: {"b_id": b_id}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(localStorage.getItem("comp_status")=="T"){
    //     let obj ={
    //       "b_id":b_id,
    //       "completion_status":'T'
    //     }
    //     this.serivedashBoard.updateBookingCompletion(b_id,obj).subscribe((p)=>{
    //       this.getData();
    //     })
    //   }
    // });
    
  }
}
