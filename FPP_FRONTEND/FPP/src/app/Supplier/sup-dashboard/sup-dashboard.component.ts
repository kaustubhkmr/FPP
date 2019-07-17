import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sup-dashboard',
  templateUrl: './sup-dashboard.component.html',
  styleUrls: ['./sup-dashboard.component.css']
})
export class SupDashboardComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("sup_id")
    this.rt.navigate(['/home'])


  }

}
