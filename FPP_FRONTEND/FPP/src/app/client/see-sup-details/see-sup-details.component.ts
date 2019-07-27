import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { SeeSupService } from 'src/app/Services/see-sup.service';

@Component({
  selector: 'app-see-sup-details',
  templateUrl: './see-sup-details.component.html',
  styleUrls: ['./see-sup-details.component.css']
})
export class SeeSupDetailsComponent implements OnInit {

  supData;
  constructor(public dialogRef: MatDialogRef<SeeSupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar,private get_names:SeeSupService) { 

      this.get_names.seeSup(data["b_id"]).subscribe(p=>this.supData=p,e=>console.log(e))

    }

  ngOnInit() {
  }

}
