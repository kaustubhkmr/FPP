import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  showView=0;
  constructor(private router:Router) { }

  ngOnInit() {
  }
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
}
