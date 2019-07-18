import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("cust_id")
    this.rt.navigate(['/home'])


  }

}
