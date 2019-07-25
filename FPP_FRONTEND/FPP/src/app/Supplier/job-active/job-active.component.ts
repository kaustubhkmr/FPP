import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { EnterBookingIdComponent } from '../enter-booking-id/enter-booking-id.component';

@Component({
  selector: 'app-job-active',
  templateUrl: './job-active.component.html',
  styleUrls: ['./job-active.component.css']
})
export class JobActiveComponent implements OnInit {
  displayedColumns: string[] = ['b_address', 'b_city', 'b_state', 'b_date', 's_type', 'b_price','payment_status',
  'completion_status'];
  dataSource: MatTableDataSource<any>;
  supId;
  bookingData: object[] = [];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
;
  constructor(private serivedashBoard: DashboardService,private dialog:MatDialog) {
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
        if(e['completion_status']=='F' && e['b_accepted']=='A' ){
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

  jobComplete(b_id){
    console.log(b_id);
    const dialogRef = this.dialog.open(EnterBookingIdComponent, {
      width: '250px',
      data: {"b_id": b_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(localStorage.getItem("comp_status")=="T"){
        localStorage.setItem("comp_status","F");
        let obj ={
          "b_id":b_id,
          "completion_status":'T'
        }
        this.serivedashBoard.updateBookingCompletion(b_id,obj).subscribe((p)=>{
          this.getData();
        })
      }
    });
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
