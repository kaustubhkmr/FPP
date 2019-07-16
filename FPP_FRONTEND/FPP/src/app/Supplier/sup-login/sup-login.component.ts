import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {Md5} from 'ts-md5/dist/md5';
import { SupinsertService } from 'src/app/Services/supinsert.service';


@Component({
  selector: 'app-sup-login',
  templateUrl: './sup-login.component.html',
  styleUrls: ['./sup-login.component.css']
})
export class SupLoginComponent implements OnInit {

  loginSignUp:boolean = true
  loginLogin:boolean = true;
  
  constructor(public dialogRef: MatDialogRef<SupLoginComponent>,private sup_ins:SupinsertService) { }

  ngOnInit() {
  }
  states: object = [
    {value: 'bihar', viewValue: 'Bihar'},
    {value: 'jharkhand', viewValue: 'Jharkhand'},
    {value: 'uttarpradesh', viewValue: 'Uttar Pradesh'},
    {value: 'haryana', viewValue: 'Haryana'},
    {value: 'punjab', viewValue: 'Punjab'},
    {value: 'delhi', viewValue: 'Delhi'},
    {value: 'madhyapradesh', viewValue: 'Madhya Pradesh'}
  ];

  supSignUp(){
    this.loginSignUp = !this.loginSignUp;
    
    
  }
  supLogin(){
    this.loginLogin = !this.loginLogin;
  }
 onSubmit(data){
  const md5 = new Md5();
 
  data.sup_password=md5.appendStr(data.sup_password).end()
  //console.log(data.sup_pwd);

  delete data['sup_cpwd']
   console.log(data);
   //show a snackbar here when data is successfully inserted
   this.sup_ins.insSup(data).subscribe(p=>console.log(p),e=>console.log(e.message),()=>{console.log("Completed")});
   this.dialogRef.close();
 }
}
