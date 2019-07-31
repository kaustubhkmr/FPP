import { Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-supplier',
  templateUrl: './admin-supplier.component.html',
  styleUrls: ['./admin-supplier.component.css']
})
export class AdminSupplierComponent implements OnInit {
  showView=0;
  allSupplierData;
  displayedColumnsSupplier: string[] = ['sup_id', 'sup_name', 'sup_phone','sup_email', 'sup_address','job_request','job_active','job_completed'];
  dataSourceSupplier: MatTableDataSource<any>;
  
  constructor(private adminService:AdminServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.adminService.getAllSupplier().subscribe((allSupplierObj)=>{
      this.allSupplierData = allSupplierObj;
      this.dataSourceSupplier = new MatTableDataSource(this.allSupplierData);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSourceSupplier.filter = filterValue.trim().toLowerCase();
  }
  homeButton(){
    this.showView=0;
    this.dataSourceSupplier.filter=' ';
  }

  jobRequest(sup_id){
    localStorage.setItem("sup_id",sup_id);
    this.showView=1;
  }

  jobActive(sup_id){
    localStorage.setItem("sup_id",sup_id);
    this.showView=2;
  }

  jobCompleted(sup_id){
    localStorage.setItem("sup_id",sup_id);
    this.showView=3;
  }
}
