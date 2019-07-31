import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  showView=1;
  constructor() { }

  ngOnInit() {
  }
  clientButton(){
    this.showView=1;
  }
  supplierButton(){
    this.showView=2;
  }
}
