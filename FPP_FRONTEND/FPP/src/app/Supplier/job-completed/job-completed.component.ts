import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-job-completed',
  templateUrl: './job-completed.component.html',
  styleUrls: ['./job-completed.component.css']
})
export class JobCompletedComponent implements OnInit {
    displayedColumns: string[] = ['id', 'b_address', 'b_city', 'b_state','payment_status',
                                        'completion_status','req_time','req_date','s_type','completion_time','b_price'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    let users;
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
