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
  serviceType;
  servicePerson=true;
  totalPrice=0;
  calcPrice=0;
  constructor(public dialogRef: MatDialogRef<EnterBookingIdComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar,
    private service:DashboardService) { }

  ngOnInit() {
    this.serviceType = this.data["b_pricetag"][this.data["b_pricetag"].length-1];
    if(this.serviceType =='r'){
      this.servicePerson = false;
    }
    this.extract();
    console.log("service type"+this.servicePerson)
  }
  extract() { 
    this.totalPrice = this.data["b_pricetag"].split('/')[0];
    console.log(this.totalPrice);
  }
   
  onSubmit(datum,f:NgForm){
    console.log(datum)
    if(datum["b_id"]==this.data["b_id"]){

      let finalPrice=(datum['b_price']as number)*this.totalPrice;
      console.log(finalPrice)
      localStorage.setItem("comp_status","T");
      localStorage.setItem("b_price",finalPrice.toString());
      this.dialogRef.close();
    }
    else{
      localStorage.setItem("comp_status","F");
      this.dialogRef.close();
    }
  }
  
  
  someChange(data){
   this.calcPrice=data*this.totalPrice;
  }
}
