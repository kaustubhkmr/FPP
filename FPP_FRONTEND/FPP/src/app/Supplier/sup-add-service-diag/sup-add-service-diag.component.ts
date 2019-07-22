import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ServiceModelData } from 'src/app/service-model';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-sup-add-service-diag',
  templateUrl: './sup-add-service-diag.component.html',
  styleUrls: ['./sup-add-service-diag.component.css']
})
export class SupAddServiceDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<SupAddServiceDiagComponent>,
                private _snackBar: MatSnackBar, public serviceModel:ServiceModelData,private addSerice:DashboardService) { }

  ngOnInit() {
  }

  serviceSelected(id){
    let serviceObj = {
      "sup_id" : localStorage["sup_id"],
      "service_name":""+id
    }
    console.log(serviceObj);

    this.addSerice.addServiceData(serviceObj).subscribe(p=>{
      if(p!=0)
      {
        this._snackBar.open("Service Added", "", {
          duration: 2000,
        });
        this.dialogRef.close();
        

      }
      else{
        this._snackBar.open("Error Updating the values", "", {
          duration: 2000,
        });
      }
    },e=>{
      this._snackBar.open("Error Updating the values", "", {
      duration: 2000,
    });
    console.log(e)
  })


  }

}
