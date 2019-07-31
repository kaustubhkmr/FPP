import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { SeeSupService } from 'src/app/Services/see-sup.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-see-sup-details',
  templateUrl: './see-sup-details.component.html',
  styleUrls: ['./see-sup-details.component.css']
})
export class SeeSupDetailsComponent implements OnInit {

  supData;
  imageUrl;
  constructor(public dialogRef: MatDialogRef<SeeSupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private get_names: SeeSupService, private afStorage: AngularFireStorage) {

    this.get_names.seeSup(data["b_id"]).subscribe(p => {
      this.supData = p
      try {
        this.afStorage.ref('sup' + this.supData['sup_id']).getDownloadURL().subscribe(u => {
          console.log("url got:" + u)
          this.imageUrl = u;
          console.log("url assigned" + this.imageUrl)
        }, e => console.log(e));
      }

      catch (e) {
        console.log(e)
      }


    }, e => console.log(e))

  }

  ngOnInit() {
  }

}
