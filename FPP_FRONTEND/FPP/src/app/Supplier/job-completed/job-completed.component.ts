import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-job-completed',
  templateUrl: './job-completed.component.html',
  styleUrls: ['./job-completed.component.css']
})
export class JobCompletedComponent implements OnInit {
  displayedColumns: string[] = ['b_address', 'b_city', 'b_state','payment_status',
                                        'completion_status','b_date','s_type','completion_time','b_price'];
  dataSource: MatTableDataSource<any>;
  supId;
  bookingData:object[]=[];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private serivedashBoard:DashboardService) {
  }

  ngOnInit() {
    this.supId = localStorage.getItem("sup_id");
    this.serivedashBoard.getBookingData(this.supId).subscribe((bookingObj:object[])=>{
      this.bookingData = bookingObj; 
      this.bookingData.forEach((e)=>{
        e["b_time"] = e["b_time"].substring(0,5);
      })
      this.dataSource = new MatTableDataSource(this.bookingData);
      this.dataSource.sort = this.sort;
    })
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
