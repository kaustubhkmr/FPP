import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModelData } from 'src/app/service-model';
import { ConcatSource } from 'webpack-sources';
import { GetBookingSupplierService } from 'src/app/Services/get-booking-supplier.service';
import { MatStepper } from '@angular/material';
import { AddBookingService } from 'src/app/Services/add-booking.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  showView=0;
  selectedService;
  isServiceSelected:boolean=false;
  isBookingFormFilled:boolean=false;
  step1Editable:boolean=true;
  step2Editable:boolean=true;
 bookingSuppliers;

  constructor(private router:Router,public serviceModel:ServiceModelData,public getBookingSup:GetBookingSupplierService, public makeBooking:AddBookingService) { }

  ngOnInit() {
    console.log(this.isServiceSelected);
  }

  states: object[] = [
    {value: 'bihar', viewValue: 'Bihar'},
    {value: 'jharkhand', viewValue: 'Jharkhand'},
    {value: 'uttarpradesh', viewValue: 'Uttar Pradesh'},
    {value: 'haryana', viewValue: 'Haryana'},
    {value: 'punjab', viewValue: 'Punjab'},
    {value: 'delhi', viewValue: 'Delhi'},
    {value: 'madhyapradesh', viewValue: 'Madhya Pradesh'},
  ];
  logout(){
    localStorage.removeItem("cust_id")
    this.router.navigate(['/home'])
  }
  clickNewBooking(){
    this.showView = 1;
    this.isServiceSelected=false;


  }
  clickDashBoard(){
    this.showView = 0;
    this.isServiceSelected=false;
  }
  serviceSelected(id){
    console.log(this.serviceModel.value[id])
    
    this.selectedService = this.serviceModel.value[id];
    this.getBookingSup.getBookingSupplier(id).subscribe(p=>{this.bookingSuppliers=p;
      this.isServiceSelected=true;


    }, e=>console.log(e));

  }
  nextStep(bookingData,supData,stepper:MatStepper){
    
    console.log(bookingData);
    console.log(supData);
   bookingData["cust_id"]=localStorage.getItem("cust_id");
   bookingData["sup_id"]=supData["sup_id"];
   bookingData["s_type"]=this.selectedService.name;
   console.log(bookingData);
   this.makeBooking.addBooking(bookingData).subscribe(p=>{
     if(p==1){
      this.isBookingFormFilled=true;
      this.step1Editable=false;
      this.step2Editable=false;
      stepper.next();

     }
     else
     console.log("error")
  },e=>console.log(e))
  }
}
