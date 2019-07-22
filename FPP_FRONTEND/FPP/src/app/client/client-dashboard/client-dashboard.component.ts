import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModelData } from 'src/app/service-model';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  showView=0;
  selectedService;
  constructor(private router:Router,public serviceModel:ServiceModelData) { }

  ngOnInit() {
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
  }
  clickDashBoard(){
    this.showView = 0;
  }
  serviceSelected(id){
    
    console.log(this.serviceModel.value[id])
    this.selectedService = this.serviceModel.value[id];
  }
}
