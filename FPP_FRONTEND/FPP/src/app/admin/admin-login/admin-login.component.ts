import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GetAdminService } from 'src/app/Services/get-admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminLoginComponent>, private _snackBar: MatSnackBar, private rt: Router,private service:GetAdminService) { }

  ngOnInit() {
  }
  onLogin(data, f: NgForm) {
    console.log(data);
    this.service.getAdmin().subscribe(p=>{
      if(data["log_email"]==p[0]["a_email"]&&data["log_password"]==p[0]["a_password"])
      {
        this._snackBar.open("Logged  In", "", {
          duration: 2000,
        });
        this.dialogRef.close();
        localStorage.setItem("a_email",data["log_email"])
        this.rt.navigate(['/admin'])
        
      }
      else{
        f.reset();
        this._snackBar.open("Error", "", {
          duration: 2000,
        });
      }
    },e=>{f.reset();
      this._snackBar.open("Error", "", {
        duration: 2000,
      });
    
    })

  }

}
