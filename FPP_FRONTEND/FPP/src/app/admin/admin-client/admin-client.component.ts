import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {
  showView=0;
  allClientData;
  displayedColumnsClient: string[] = ['cust_id', 'cust_name', 'cust_phone','cust_email', 'cust_address','job_pending','job_ongoing','job_done'];
  dataSourceClient: MatTableDataSource<any>;
  
  constructor(private adminService:AdminServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.adminService.getAllClient().subscribe((allClientObj)=>{
      this.allClientData = allClientObj;
      this.dataSourceClient = new MatTableDataSource(this.allClientData);

    })
  }
  applyFilter(filterValue: string) {
    this.dataSourceClient.filter = filterValue.trim().toLowerCase();
  }
  homeButton(){
    this.showView=0;
  }

  jobPending(cust_id){
    localStorage.setItem("cust_id",cust_id);
    this.showView=1;
  }

  jobOngoing(cust_id){
    localStorage.setItem("cust_id",cust_id);
    this.showView=2;
  }

  jobDone(cust_id){
    localStorage.setItem("cust_id",cust_id);
    this.showView=3;
  }
}
