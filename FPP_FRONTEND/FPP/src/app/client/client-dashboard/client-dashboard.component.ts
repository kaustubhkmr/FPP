import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ServiceModelData } from 'src/app/service-model';
import { ConcatSource } from 'webpack-sources';
import { GetBookingSupplierService } from 'src/app/Services/get-booking-supplier.service';
import { MatStepper, MatDialog } from '@angular/material';
import { AddBookingService } from 'src/app/Services/add-booking.service';
import { NgForm } from '@angular/forms';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { ClientDashboardService } from 'src/app/Services/client-dashboard.service';
import { UploadImageService } from 'src/app/Services/upload-image.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize, filter, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Url } from 'url';



@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  showView = 0;
  selectedService;
  isServiceSelected: boolean = false;
  isBookingFormFilled: boolean = false;
  step1Editable: boolean = true;
  step2Editable: boolean = true;
  bookingSuppliers;
  clientObj: Object;
  showCompleteProfile = true;
  clientData: Object;
  fileToUpload: File = null;
  imageUrl;
  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;
  downloadURL: Observable<string | null>;

  private state$: Observable<object>;
private b_id;


  constructor(private router: Router, public serviceModel: ServiceModelData, public getBookingSup: GetBookingSupplierService, public makeBooking: AddBookingService, private dialog: MatDialog, private service: ClientDashboardService, private imgService: UploadImageService, private afStorage: AngularFireStorage) {
    // this.imageUrl="";
  }

  ngOnInit() {
    this.getDataClient();
    // let storage=firebase.storage();
    // let ref = firebase.storage().ref() ;
    // //let imageUrl=this.imageUrl;

    // ref.child('gs://firstprotivitiproject.appspot.com/cust'+localStorage.getItem("cust_id")).getDownloadURL().then(function(url) {
    //   // Insert url into an <img> tag to "download"


    //   console.log("Success")
    //   console.log(url)
    //   this.setImageValue(url)
    //  // console.log(this.imageUrl)
    // }).catch(function(error) {

    //   // A full list of error codes is available at
    //   // https://firebase.google.com/docs/storage/web/handle-errors
    //   console.log("Error")
    //   console.log(error)
    //   console.log(error.code);
    // });
    
    try{
   //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
  this.afStorage.ref('cust' + localStorage.getItem("cust_id")).getDownloadURL().subscribe(u=>{console.log("url got:"+u)
this.imageUrl=u;
console.log("url assigned"+ this.imageUrl)
},e=>console.log(e));
   // console.log(this.imageUrl);
    }

    catch(e){
      console.log(e)
    }

    this.state$ =  this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    )
    this.state$.subscribe(d=>console.log(d),e=>console.log(e))

  }

  states: object[] = [
    { value: 'bihar', viewValue: 'Bihar' },
    { value: 'jharkhand', viewValue: 'Jharkhand' },
    { value: 'uttarpradesh', viewValue: 'Uttar Pradesh' },
    { value: 'haryana', viewValue: 'Haryana' },
    { value: 'punjab', viewValue: 'Punjab' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'madhyapradesh', viewValue: 'Madhya Pradesh' },
  ];
  logout() {
    localStorage.removeItem("cust_id")
    this.router.navigate(['/home'])
  }

  ngOnChanges() {
    this.getDataClient();

    try{
      //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
     this.afStorage.ref('cust' + localStorage.getItem("cust_id")).getDownloadURL().subscribe(u=>{console.log("url got:"+u)
   this.imageUrl=u;
   console.log("url assigned"+ this.imageUrl)
   },e=>console.log(e));
      // console.log(this.imageUrl);
       }
   
       catch(e){
         console.log(e)
       }
  }

  getDataClient() {

    if (localStorage.getItem("cust_id") != null) {
      this.service.getClientData(localStorage.getItem("cust_id")).subscribe((clientData) => {
        this.clientObj = clientData;
        console.log(clientData)
        console.log(this.clientObj)
      })
    }
    else {
      this.router.navigate(['/home'])

    }
  }
  clickNewBooking() {
    this.showView = 1;
    this.isServiceSelected=false;
  }
  clickDashBoard() {
    this.showView = 0;
    this.isServiceSelected = false;
  }
  clickJob(){
    this.showView = 2;
  }

  clickJobActive(){
    this.showView = 3;
  }

  clickJobCompleted(){
    this.showView = 4;
  }

  clickJobMyProfile(){
    this.showView=5;
    this.isServiceSelected=false;
  }
  serviceSelected(id,bform:NgForm){
    if(bform!=undefined)
    bform.reset();
    this.selectedService = this.serviceModel.value[id];
    this.getBookingSup.getBookingSupplier(id).subscribe(p=>{this.bookingSuppliers=p;
      this.isServiceSelected=true;
    }, e=>console.log(e));

  }
  nextStep(bookingData,supData,stepper:MatStepper){
   bookingData["cust_id"]=localStorage.getItem("cust_id");
   bookingData["sup_id"]=supData["sup_id"];
   bookingData["s_type"]=this.selectedService.name;
   this.makeBooking.addBooking(bookingData).subscribe(p=>{
     if(p==1){
       if(this.b_id!=undefined){
        let obj = {
          'b_id': this.b_id,
          'b_accepted': 'C'
        }
       this.service.updateBookingConfirmation(this.b_id,obj).subscribe(p=>console.log(p))
       }
      this.isBookingFormFilled=true;
      this.step1Editable=false;
      this.step2Editable=false;
      stepper.next();

     }
     else
     console.log("error")
  },e=>console.log(e))
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditClientComponent, {
      data: { 'clientData': this.clientObj }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDataClient()
    });

  }

   handleFileInput(event) {

    console.log(event)
    console.log(event.target.files[0])
    // this.fileToUpload = file.item(0);

    // //Show image preview
    // var reader = new FileReader();
    // reader.onload = (event:any) => {
    //   this.imageUrl = event.target.result;
    // }
    // reader.readAsDataURL(this.fileToUpload);

    // this.imgService.postFile("cust_"+localStorage.getItem("cust_id"),this.fileToUpload).subscribe(
    //   p =>{
    //     console.log('done');
    //     console.log(p)
    //   //  Image.value = null;
    //   //  this.imageUrl = "/assets/img/default-image.png";
    //   }
    // );
    //   const randomId = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(randomId);
    // this.task = this.ref.put(event.target.files[0]);
    // this.imageUrl= this.task.
    // let ref=this.afStorage.ref('gs://firstprotivitiproject.appspot.com/'+event.target.files[0].name); 
//-----------------------working code---------------------//
    // let ref = firebase.storage().ref();
    // let uploadTask = ref.child('cust' + localStorage.getItem("cust_id")).put(event.target.files[0]);
//-------------------------------------------------------//
    //let task =  ref.put(event.target.files[0]);
    // console.log(event.target.files[0].name)

    //   downloadUrl=task.downloadURL().subscribe(url=>{this.imageUrl=url
    // console.log(url);
    // console.log(this.imageUrl);
    // });

    // this.task.snapshotChanges().pipe(
    //   finalize(() => {
    //     this.downloadURL = this.ref.getDownloadURL()
    //     this.downloadURL.subscribe(url => {this.imageUrl = url
    //     console.log(url);
    //     console.log(this.imageUrl)
    //     },e=>console.log(e.message));
    //   })
    // )
    // .subscribe();

    // ref.put(event.target.files[0]).then(function(snapshot) {
    //   console.log('Uploaded a Image');
    // });

    //----------------------Working Code---------------------------//
    // uploadTask.on('state_changed', function (snapshot) {
    //   // Observe state change events such as progress, pause, and resume
    //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');
    //   switch (snapshot.state) {
    //     case firebase.storage.TaskState.PAUSED: // or 'paused'
    //       console.log('Upload is paused');
    //       break;
    //     case firebase.storage.TaskState.RUNNING: // or 'running'
    //       console.log('Upload is running');
    //       break;
    //   }
    // }, function (error) {
    //   // Handle unsuccessful uploads
    //   console.log(error)
    // }, function () {
    //   // Handle successful uploads on complete
    //   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //   uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    //     console.log('File available at', downloadURL);
    //     //this.imageUrl = downloadURL;
    //     console.log(downloadURL)
    //   });
    // });

  //------------------------------------------------------//  

  try{
  this.ref = this.afStorage.ref('cust' + localStorage.getItem("cust_id"));
  this.task = this.ref.put(event.target.files[0]);
   this.task.snapshotChanges().pipe(
    finalize(() => {
     this.ref.getDownloadURL().subscribe(url => {
       console.log(url); // <-- do what ever you want with the url..
       this.imageUrl=url;
       console.log(this.imageUrl);
     });
   }))
   .subscribe();  
  }

  catch(e){
    console.log(e);
  }

  }
  bookAgain(value){
    console.log(value)
   // this.showView=value as number;
   this.showView=value.toggle;
   this.b_id=value.b_id;
   
  }


 
}
