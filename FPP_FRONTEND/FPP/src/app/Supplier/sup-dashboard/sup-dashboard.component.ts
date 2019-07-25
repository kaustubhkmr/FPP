import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { MatDialog } from '@angular/material';
import { ClientEditComponent } from 'src/app/Supplier/client-edit/client-edit.component';
import { ObjectUnsubscribedError } from 'rxjs';
import { SupAddServiceDiagComponent } from '../sup-add-service-diag/sup-add-service-diag.component';
import { ServiceModelData } from 'src/app/service-model';

@Component({
  selector: 'app-sup-dashboard',
  templateUrl: './sup-dashboard.component.html',
  styleUrls: ['./sup-dashboard.component.css']
})
export class SupDashboardComponent implements OnInit, OnChanges{

  constructor(private rt:Router, private service: DashboardService,private dialog:MatDialog,public serviceModel:ServiceModelData) { }
  supplierObj:Object;
  showView=0;
  showCompleteProfile=true;
  supData:Object;
  serviceDataTable:object[]=[];
  serviceData:object[]=[];
  ngOnInit() {
    this.getDataSup();
    this.getProfileData();
  }

  ngOnChanges(){
    this.getDataSup();
    this.getProfileData();
  }
  getDataSup(){
    
    if(localStorage.getItem("sup_id") != null) {
      this.service.getSupplierData(localStorage.getItem("sup_id")).subscribe((supplierData)=>{
        this.supplierObj = supplierData;
      })   
    }
    else{
      this.rt.navigate(['/home'])
  
    }
  }

  getProfileData(){
    this.serviceData = [];
    this.service.getServiceData(localStorage.getItem("sup_id")).subscribe((serviceObj:object[])=>{
        this.serviceDataTable = serviceObj;
        this.serviceDataTable.forEach((e)=>{
          this.serviceData.push(this.serviceModel.value[e['service_name']]);
        });
        if( this.serviceData.length > 0){
          this.showCompleteProfile = false;
        }
    })
  }

  logout(){
    localStorage.removeItem("sup_id")
    this.rt.navigate(['/home'])
  }

  clickJob(){
    this.showView=1;
  }

  clickJobActive(){
    this.showView=2;
  }

  clickJobCompleted(){
    this.showView=3;
  }
  clickJobMyProfile(){
    this.showView=4;
  }
  clickDashBoard(){
    this.showView=0;
  }
  openEditDialog(){
    const dialogRef = this.dialog.open(ClientEditComponent, {
      data:{'supData':this.supplierObj}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDataSup()
    });

  }

  openAddServiceDialog(){
    const dialogRef = this.dialog.open(SupAddServiceDiagComponent,{      
      data:{'supData':this.supplierObj}
  });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfileData();
    })
  }
}
