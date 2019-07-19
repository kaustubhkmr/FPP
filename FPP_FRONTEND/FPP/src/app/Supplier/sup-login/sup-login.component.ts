import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Md5 } from 'ts-md5/dist/md5';
import { SupinsertService } from 'src/app/Services/supinsert.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SuploginService } from 'src/app/Services/suplogin.service';


@Component({
  selector: 'app-sup-login',
  templateUrl: './sup-login.component.html',
  styleUrls: ['./sup-login.component.css'],


})
export class SupLoginComponent implements OnInit {

  loginSignUp: boolean = true
  loginLogin: boolean = true;

  constructor(public dialogRef: MatDialogRef<SupLoginComponent>, private sup_ins: SupinsertService, private _snackBar: MatSnackBar, private rt: Router, private log_sup: SuploginService) { }

  ngOnInit() {


  }
  states: object = [
    { value: 'bihar', viewValue: 'Bihar' },
    { value: 'jharkhand', viewValue: 'Jharkhand' },
    { value: 'uttarpradesh', viewValue: 'Uttar Pradesh' },
    { value: 'haryana', viewValue: 'Haryana' },
    { value: 'punjab', viewValue: 'Punjab' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'madhyapradesh', viewValue: 'Madhya Pradesh' }
  ];



  supSignUp() {
    this.loginSignUp = !this.loginSignUp;


  }
  supLogin() {
    this.loginLogin = !this.loginLogin;
  }
  onSubmit(data, f: NgForm) {
    const md5 = new Md5();

    data.sup_password = md5.appendStr(data.sup_password).end()
    //console.log(data.sup_pwd);

    delete data['sup_cpwd']
    console.log(data);
    //show a snackbar here when data is successfully inserted
    this.sup_ins.insSup(data).subscribe(p => {

      console.log(p);
      localStorage.setItem("sup_id", p["sup_id"]);


    }, e => {
      console.log(e.message);
      f.reset();


      this._snackBar.open("Error Inserting the values. Account already exists", "", {
        duration: 2000,
      });

    }, () => {
      console.log("Completed");

      this._snackBar.open("Record Inserted", "", {
        duration: 2000,
      });

      this.dialogRef.close();
      this.rt.navigate(['/sup-dashboard']);

    });
  }

  onLogin(data, f: NgForm) {

    const md5 = new Md5();

    data.log_password = md5.appendStr(data.log_password).end();
    this.log_sup.login(data).subscribe(p => {

      console.log(p);
      if (p != null) {
        localStorage.setItem("sup_id", p["sup_id"]);
        this._snackBar.open("Logged  In", "", {
             duration: 2000,
           });
        this.dialogRef.close();
        this.rt.navigate(['/sup-dashboard']);

      }

      else {
        f.reset();


        this._snackBar.open("Error Logging In. Please check your email or password", "", {
          duration: 1000,
        });
      }


    }, e => {
      console.log(e.message);
      f.reset();


      this._snackBar.open("Error Logging In. Please check your email or password", "", {
        duration: 2000,
      });

    });

  }
}
