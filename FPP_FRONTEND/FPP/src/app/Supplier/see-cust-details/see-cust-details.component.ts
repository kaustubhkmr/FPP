import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SeeCustService } from 'src/app/Services/see-cust.service';

@Component({
  selector: 'app-see-cust-details',
  templateUrl: './see-cust-details.component.html',
  styleUrls: ['./see-cust-details.component.css']
})
export class SeeCustDetailsComponent implements OnInit {

  custData
  constructor(public dialogRef: MatDialogRef<SeeCustDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar,private get_names:SeeCustService) {

      this.get_names.seeCust(data["b_id"]).subscribe(p=>this.custData=p,e=>console.log(e))

      
     }

  ngOnInit() {
  }

}
