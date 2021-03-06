import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms';
import { SupEditService } from 'src/app/Services/sup-edit.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ClientEditComponent>,private _snackBar: MatSnackBar, private edit_sup:SupEditService ) { }

  ngOnInit() {
    console.log(this.data["supData"])
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

  onSubmit(datum,f:NgForm){
    console.log(datum)
    this.edit_sup.editSup(this.data["supData"]["sup_id"],datum).subscribe(p=>{

      if(p!=0){
        //this.data["supData"]=p;

        this._snackBar.open("Values Updated", "", {
          duration: 2000,
        });
        this.dialogRef.close();
      }
      else{
       // f.reset();
        this._snackBar.open("Error Updating the values", "", {
          duration: 2000,
        });
      }
    },
    e=>{
      console.log(e);
      //f.reset();
        this._snackBar.open("Error Updating the values", "", {
          duration: 2000,
        });
    }
    );
  }

}
