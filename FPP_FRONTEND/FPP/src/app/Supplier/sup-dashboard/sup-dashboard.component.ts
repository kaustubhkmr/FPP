import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { MatDialog } from '@angular/material';
import { ClientEditComponent } from 'src/app/Supplier/client-edit/client-edit.component';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { SupAddServiceDiagComponent } from '../sup-add-service-diag/sup-add-service-diag.component';
import { ServiceModelData } from 'src/app/service-model';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { CreateServiceComponent } from '../create-service/create-service.component';


@Component({
  selector: 'app-sup-dashboard',
  templateUrl: './sup-dashboard.component.html',
  styleUrls: ['./sup-dashboard.component.css']
})
export class SupDashboardComponent implements OnInit, OnChanges {

  constructor(private rt: Router, private service: DashboardService, private dialog: MatDialog, public serviceModel: ServiceModelData, private afStorage: AngularFireStorage) { }
  supplierObj: Object;
  showView = 0;
  showCompleteProfile = true;
  supData: Object;
  serviceDataTable: object[] = [];
  serviceData: object[] = [];
  customServiceData: object[] = [];


  fileToUpload: File = null;
  imageUrl;
  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;
  downloadURL: Observable<string | null>;


  private b_id;

  ngOnInit() {
    this.getDataSup();
    this.getProfileData();
    try {
      //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
      this.afStorage.ref('sup' + localStorage.getItem("sup_id")).getDownloadURL().subscribe(u => {
        console.log("url got:" + u)
        this.imageUrl = u;
        console.log("url assigned" + this.imageUrl)
      }, e => console.log("Supplier Image not found"));
      // console.log(this.imageUrl);
    }

    catch (e) {
      console.log(e)
    }
    this.getCustomProfileData();
  }

  ngOnChanges() {
    this.getDataSup();
    this.getProfileData();
    try {
      //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
      this.afStorage.ref('sup' + localStorage.getItem("sup_id")).getDownloadURL().subscribe(u => {
        console.log("url got:" + u)
        this.imageUrl = u;
        console.log("url assigned" + this.imageUrl)
      }, e => console.log(e));
      // console.log(this.imageUrl);
    }

    catch (e) {
      console.log(e)
    }
    this.getCustomProfileData();
  }
  getDataSup() {

    if (localStorage.getItem("sup_id") != null) {
      this.service.getSupplierData(localStorage.getItem("sup_id")).subscribe((supplierData) => {
        this.supplierObj = supplierData;
      })
    }
    else {
      this.rt.navigate(['/home'])

    }
  }

  getProfileData() {
    this.serviceData = [];
    this.service.getServiceData(localStorage.getItem("sup_id")).subscribe((serviceObj: object[]) => {
      this.serviceDataTable = serviceObj;
      this.serviceDataTable.forEach((e) => {
        this.serviceData.push(this.serviceModel.value[e['service_name']]);
      });
      if (this.serviceData.length > 0) {
        this.showCompleteProfile = false;
      }
    })
  }

  logout() {
    localStorage.removeItem("sup_id")
    this.rt.navigate(['/home'])
  }

  clickJob() {
    this.showView = 1;
  }

  clickJobActive() {
    this.showView = 2;
  }

  clickJobCompleted() {
    this.showView = 3;
  }
  clickJobMyProfile() {
    this.showView = 4;
  }
  clickDashBoard() {
    this.showView = 0;
  }
  openEditDialog() {
    const dialogRef = this.dialog.open(ClientEditComponent, {
      data: { 'supData': this.supplierObj }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDataSup()
    });

  }

  openAddServiceDialog() {
    const dialogRef = this.dialog.open(SupAddServiceDiagComponent, {
      data: { 'supData': this.supplierObj }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfileData();
    })
  }

  handleFileInput(event) {

    console.log(event);
    console.log(event.target.files[0]);
    try {
      this.ref = this.afStorage.ref('sup' + localStorage.getItem("sup_id"));
      this.task = this.ref.put(event.target.files[0]);
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe(url => {
            console.log(url); // <-- do what ever you want with the url..
            this.imageUrl = url;
            console.log(this.imageUrl);
          });
        }))
        .subscribe();
    }

    catch (e) {
      console.log(e);
    }
  }

  goBottom(){
    window.scrollTo(0,document.body.scrollHeight);

  }

  createService(){
  
    const dialogRef = this.dialog.open(CreateServiceComponent, {
      data: { 'supData': this.supplierObj }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomProfileData()
    });
  }

  getCustomProfileData(){

    this.customServiceData = [];
    this.service.getCustomService(localStorage.getItem("sup_id")).subscribe((serviceObj: object[]) => {
      this.customServiceData = serviceObj;
      for(let o of this.customServiceData){
        try {
          this.afStorage.ref('custom_service'+o["c_name"].replace(/\s/g, "") + localStorage.getItem("sup_id")).getDownloadURL().subscribe(u => {
           o["custom_url"]=u;
           console.log(o["custom_url"])
          }, e => console.log(e));
         
        }
    
        catch (e) {
          console.log(e)
        }
      }
      if (this.customServiceData.length > 0) {
        this.showCompleteProfile = false;
      }
    })
  }
}
