import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;
  downloadURL: Observable<string | null>;
  constructor(public dialogRef: MatDialogRef<CreateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar,private service: DashboardService,private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onSubmit(datum,f:NgForm,files){
    console.log(datum)
    datum["sup_id"]=localStorage.getItem("sup_id")
    console.log(datum)
    this.service.createService(datum).subscribe(c=>{if(c==1){

      if(files[0]!=undefined)
  {
    try {
      this.ref = this.afStorage.ref('custom_service'+datum["c_name"].replace(/\s/g, "") + localStorage.getItem("sup_id"));
      this.task = this.ref.put(files[0]);
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe(url => {
            console.log(url); // <-- do what ever you want with the url..
           //localStorage.setItem('custom_service '+datum["c_name"].replace(/\s/g, "") + localStorage.getItem("sup_id"),url);
          });
        }))
        .subscribe();
    }

    catch (e) {
      console.log(e);
    }
  }
      this._snackBar.open("Service Created", "", {
        duration: 2000,
      });
      this.dialogRef.close();
     
    }
    else{
      f.reset();
      this._snackBar.open("Error Creating Service", "", {
        duration: 2000,
      });
      

    }
  },e=>{
    f.reset();
    this._snackBar.open("Error Creating Service", "", {
      duration: 2000,
    });
   

  })

  
  }

}
