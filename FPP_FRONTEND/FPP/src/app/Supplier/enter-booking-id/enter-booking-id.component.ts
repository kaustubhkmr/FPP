import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-enter-booking-id',
  templateUrl: './enter-booking-id.component.html',
  styleUrls: ['./enter-booking-id.component.css']
})
export class EnterBookingIdComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EnterBookingIdComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSubmit(datum,f:NgForm){
    console.log(datum)
    if(datum["b_id"]==this.data["b_id"]){
      localStorage.setItem("comp_status","T");
      this.dialogRef.close();
    }
    else{
      localStorage.setItem("comp_status","F");
      this.dialogRef.close();
    }
  }
}
