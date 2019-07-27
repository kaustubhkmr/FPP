import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { SeeCustDetailsComponent } from '../see-cust-details/see-cust-details.component';

@Component({
  selector: 'app-job-completed',
  templateUrl: './job-completed.component.html',
  styleUrls: ['./job-completed.component.css']
})
export class JobCompletedComponent implements OnInit {
  displayedColumns: string[] = ['b_address', 'b_city', 'b_state','payment_status', 'completion_status','b_date','s_type','completion_time','b_price','customer_details'];
  dataSource: MatTableDataSource<any>;
  supId;
  bookingData:object[]=[];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private serivedashBoard:DashboardService,private dialog:MatDialog) {
  }

  ngOnInit() {
    this.supId = localStorage.getItem("sup_id");
    this.serivedashBoard.getBookingData(this.supId).subscribe((bookingObj:object[])=>{
      bookingObj.forEach((e)=>{
        e["b_time"] = e["b_time"].substring(0,5);
      })
      bookingObj=bookingObj.filter((e)=>{
        if(e['completion_status']=='T' && e['b_accepted']=='A' ){
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
