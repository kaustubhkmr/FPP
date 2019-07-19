import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-sup-dashboard',
  templateUrl: './sup-dashboard.component.html',
  styleUrls: ['./sup-dashboard.component.css']
})
export class SupDashboardComponent implements OnInit {

  constructor(private rt:Router, private service: DashboardService) { }
  supplierObj;
  showView=0;
  showCompleteProfile=true;
  ngOnInit() {
    if(localStorage.getItem("sup_id") != null) {
    this.service.getSupplierData(localStorage.getItem("sup_id")).subscribe((supplierData)=>{
      this.supplierObj = supplierData;
      console.log(this.supplierObj);
    })

    
  }
  else{
    this.rt.navigate(['/home'])

  }
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
}
