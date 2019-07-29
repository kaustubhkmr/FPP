import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SeeCustService } from 'src/app/Services/see-cust.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-see-cust-details',
  templateUrl: './see-cust-details.component.html',
  styleUrls: ['./see-cust-details.component.css']
})
export class SeeCustDetailsComponent implements OnInit {
  imageUrl;
  custData
  constructor(public dialogRef: MatDialogRef<SeeCustDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private get_names: SeeCustService, private afStorage: AngularFireStorage) {

    this.get_names.seeCust(data["b_id"]).subscribe(p => {
      this.custData = p;
      try {
        //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
        this.afStorage.ref('cust' + this.custData['cust_id']).getDownloadURL().subscribe(u => {
          console.log("url got:" + u)
          this.imageUrl = u;
          console.log("aagya")
          console.log("url assigned" + this.imageUrl)
        }, e => console.log(e));
        // console.log(this.imageUrl);
      }

      catch (e) {
        console.log(e)
      }

    }, e => console.log(e))


  }

  ngOnInit() {
  }

}
