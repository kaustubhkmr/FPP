import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  showView = 1;
  constructor(private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem("a_email") == null) {
      this.router.navigate(['/home'])
    }
  }
  clientButton() {
    this.showView = 1;
  }
  supplierButton() {
    this.showView = 2;
  }
  logoutButton(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
