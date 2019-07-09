import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sup-login',
  templateUrl: './sup-login.component.html',
  styleUrls: ['./sup-login.component.css']
})
export class SupLoginComponent implements OnInit {

  loginSignUp:boolean = true
  loginLogin:boolean = true;
  constructor(public dialogRef: MatDialogRef<SupLoginComponent>) { }

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

  supSignUp(){
    this.loginSignUp = !this.loginSignUp;
  }
  supLogin(){
    this.loginLogin = !this.loginLogin;
  }

}
