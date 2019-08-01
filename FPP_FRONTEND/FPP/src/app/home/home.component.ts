import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../client/login/login.component';
import { SupLoginComponent } from '../Supplier/sup-login/sup-login.component';
import { Router } from '@angular/router';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'House Help';
  showView=0;
  constructor(public dialog: MatDialog,public dialog1:MatDialog,private rt:Router,public dialog2:MatDialog) { 

    if (localStorage.getItem("sup_id") != null) {
      //route to Home
      console.log(localStorage.getItem("sup_id"))
      this.rt.navigate(['/sup-dashboard']);

    }
    else if(localStorage.getItem("cust_id") != null){
      console.log(localStorage.getItem("cust_id"))
      this.rt.navigate(['/cust-dashboard']);
    }
    else if(localStorage.getItem("a_email") != null){
      console.log(localStorage.getItem("cust_id"))
      this.rt.navigate(['/admin']);
    }
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {

   
  }
  openSupDialog():void{
    const dialogRef1=this.dialog1.open(SupLoginComponent,{});

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The sup dialog was closed');
    });
  }
  goBottom(){
    this.showView=1;
    document.getElementById('scrollId').scrollIntoView();
  }

  openAdminDialog(){
    const dialogRef2=this.dialog2.open(AdminLoginComponent,{});

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The sup dialog was closed');
    });
  }

}
