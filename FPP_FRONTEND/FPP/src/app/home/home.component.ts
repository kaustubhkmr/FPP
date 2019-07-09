import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../client/login/login.component';
import { SupLoginComponent } from '../Supplier/sup-login/sup-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialog1:MatDialog) { }
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

}
