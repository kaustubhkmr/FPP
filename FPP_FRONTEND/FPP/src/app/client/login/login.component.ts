import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Md5 } from 'ts-md5/dist/md5';
import { SupinsertService } from 'src/app/Services/supinsert.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SuploginService } from 'src/app/Services/suplogin.service';
import { CustinsertService } from 'src/app/Services/custinsert.service';
import { CustloginService } from 'src/app/Services/custlogin.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSignUp: boolean = true
  loginLogin: boolean = true;
  tryingReg: boolean = false;
  tryingLog:boolean=false;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private cust_ins: CustinsertService, private _snackBar: MatSnackBar, private rt: Router, private log_sup: CustloginService) { }

  ngOnInit() {
  }
  states: object[] = [
    { value: 'bihar', viewValue: 'Bihar' },
    { value: 'jharkhand', viewValue: 'Jharkhand' },
    { value: 'uttarpradesh', viewValue: 'Uttar Pradesh' },
    { value: 'haryana', viewValue: 'Haryana' },
    { value: 'punjab', viewValue: 'Punjab' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'madhyapradesh', viewValue: 'Madhya Pradesh' },
  ];

  clientSignUp() {
    this.loginSignUp = !this.loginSignUp;
  }
  clientLogin() {
    this.loginLogin = !this.loginLogin;
  }

  onSubmit(data, f: NgForm) {
    const md5 = new Md5();

    data.cust_password = md5.appendStr(data.cust_password).end()
    //console.log(data.sup_pwd);

    delete data['cust_cpwd']
    console.log(data);
    //show a snackbar here when data is successfully inserted
    this.tryingReg = true;
    this.cust_ins.insCust(data).subscribe(p => {
      this.tryingReg = false;
      console.log(p);
      localStorage.setItem("cust_id", p["cust_id"]);


    }, e => {
      console.log(e.message);
      f.reset();
      this.tryingReg = false;

      this._snackBar.open("Error Inserting the values", "", {
        duration: 2000,
      });

    }, () => {
      console.log("Completed");

      this._snackBar.open("Record Inserted", "", {
        duration: 2000,
      });

      this.dialogRef.close();
      this.rt.navigate(['/cust-dashboard']);

    });
  }

  onLogin(data, f: NgForm) {
    this.tryingLog=true;

    const md5 = new Md5();

    data.log_password = md5.appendStr(data.log_password).end();
    this.log_sup.login(data).subscribe(p => {

      console.log(p);
      if (p != null) {
this.tryingLog=false;
        localStorage.setItem("cust_id", p["cust_id"]);
        console.log("Completed");

        this._snackBar.open("Logged  In", "", {
          duration: 2000,
        });

        this.dialogRef.close();
        this.rt.navigate(['/cust-dashboard']);
      }



      else {
        this.tryingLog=false;
        f.reset();


        this._snackBar.open("Error Logging In. Please check your email or password", "", {
          duration: 2000,
        });
      }


    }, e => {
      this.tryingLog=false;
      console.log(e.message);
      f.reset();


      this._snackBar.open("Error Logging In. Please check your email or password", "", {
        duration: 2000,
      });

    }, () => {
    });

  }
}
