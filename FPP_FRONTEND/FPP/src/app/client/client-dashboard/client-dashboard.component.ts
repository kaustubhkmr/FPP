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
import { GetCustomBookingSupplierService } from 'src/app/Services/get-custom-booking-supplier.service';
import { GetCustomBookingPricesService } from 'src/app/Services/get-custom-booking-prices.service';

import * as moment from 'moment'


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
  supplierGettingSelected: boolean = false;

  private state$: Observable<object>;
  private b_id;
  customServices: object[] = []
  isCustomService: boolean = false;
  customServiceObject: object;
  customSupplierId;
  fetchedPrice;
  minDate;
  constructor(private router: Router, public serviceModel: ServiceModelData, public getBookingSup: GetBookingSupplierService, public makeBooking: AddBookingService, private dialog: MatDialog, private service: ClientDashboardService, private imgService: UploadImageService, private afStorage: AngularFireStorage, private getcustomBooking: GetCustomBookingSupplierService, private customPrices: GetCustomBookingPricesService) {
    // this.imageUrl="";
  }

  ngOnInit() {
    this.getDataClient();
    this.service.getAllCustomServices().subscribe((data: Object[]) => {

      this.customServices = data;
      for (let o of this.customServices) {
        try {
          this.afStorage.ref('custom_service' + o["c_name"].replace(/\s/g, "") + o["sup_id"]).getDownloadURL().subscribe(u => {
            o["custom_url"] = u;
            console.log(o["custom_url"])
          }, e => console.log(e));

        }

        catch (e) {
          console.log(e)
        }
      }
    });

    try {
      //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
      this.afStorage.ref('cust' + localStorage.getItem("cust_id")).getDownloadURL().subscribe(u => {
        console.log("url got:" + u)
        this.imageUrl = u;
        console.log("url assigned" + this.imageUrl)
      }, e => console.log(e));
      // console.log(this.imageUrl);
    }

    catch (e) {
      console.log(e)
    }

    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    )
    this.state$.subscribe(d => console.log(d), e => console.log(e))

    this.minDate = moment(new Date()).format('YYYY-MM-DD')

    // let dd = this.mindate.getDate();
    // let mm = this.mindate.getMonth() + 1; //January is 0!
    // let yyyy = this.mindate.getFullYear();
    // if (dd < 10) {
    //   dd = '0' + dd
    // }
    // if (mm < 10) {
    //   mm = '0' + mm
    // }

    // this.mindate = yyyy + '-' + mm + '-' + dd;
    console.log(this.minDate);

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

    try {
      //this.imageUrl= this.ref.child('gs://firstprotivitiproject.appspot.com/cust' + localStorage.getItem("cust_id")).getDownloadURL();
      this.afStorage.ref('cust' + localStorage.getItem("cust_id")).getDownloadURL().subscribe(u => {
        console.log("url got:" + u)
        this.imageUrl = u;
        console.log("url assigned" + this.imageUrl)
      }, e => console.log(e));
      // console.log(this.imageUrl);
    }

    catch (e) {
      console.log(e)
    }

    this.service.getAllCustomServices().subscribe((data: Object[]) => {

      this.customServices = data;
      for (let o of this.customServices) {
        try {
          this.afStorage.ref('custom_service' + o["c_name"].replace(/\s/g, "") + o["sup_id"]).getDownloadURL().subscribe(u => {
            o["custom_url"] = u;
            console.log(o["custom_url"])
          }, e => console.log(e));

        }

        catch (e) {
          console.log(e)
        }
      }
    });

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
    this.isServiceSelected = false;
  }
  clickDashBoard() {
    this.showView = 0;
    this.isServiceSelected = false;
  }
  clickJob() {
    this.showView = 2;
  }

  clickJobActive() {
    this.showView = 3;
  }

  clickJobCompleted() {
    this.showView = 4;
  }

  clickJobMyProfile() {
    this.showView = 5;
    this.isServiceSelected = false;
  }
  serviceSelected(id, bform: NgForm) {
    this.isCustomService = false;
    if (bform != undefined)
      bform.reset();
    this.selectedService = this.serviceModel.value[id];
    this.getBookingSup.getBookingSupplier(id).subscribe(p => {
      this.bookingSuppliers = p;
      this.isServiceSelected = true;
    }, e => console.log(e));

  }
  nextStep(bookingData, supData, stepper: MatStepper) {
    bookingData["cust_id"] = localStorage.getItem("cust_id");
    bookingData["sup_id"] = supData["sup_id"];
    bookingData["s_type"] = this.selectedService.name;
    bookingData["b_pricetag"] = this.selectedService.pricetag;
    this.makeBooking.addBooking(bookingData).subscribe(p => {
      if (p == 1) {
        if (this.b_id != undefined) {
          let obj = {
            'b_id': this.b_id,
            'b_accepted': 'C'
          }
          this.service.updateBookingConfirmation(this.b_id, obj).subscribe(p => {
            console.log(p)
           
          })
        }
        this.isBookingFormFilled = true;
        this.step1Editable = false;
        this.step2Editable = false;
        stepper.next();

      }
      else
        console.log("error")
    }, e => console.log(e))
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

    try {
      this.ref = this.afStorage.ref('cust' + localStorage.getItem("cust_id"));
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
  bookAgain(value) {
    console.log(value)
    // this.showView=value as number;
    this.showView = value.toggle;
    this.b_id = value.b_id;

  }

  customServiceSelected(service, cform: NgForm) {

    this.isCustomService = true;

    if (cform != undefined)
      cform.reset();


    this.selectedService = service;
    this.getcustomBooking.getCustomBookingSupplier(this.selectedService["c_name"]).subscribe(p => {
      this.bookingSuppliers = p;
      this.isServiceSelected = true;
    }, e => console.log(e));
    console.log("selected_sup is:" + this.customSupplierId)

    //call api to fetch custom price here
    // if (this.customSupplierId != undefined) {

    //   console.log(this.customSupplierId)

    //   this.customPrices.getCustomPrices(this.customSupplierId, {'c_name':this.selectedService["c_name"]}).subscribe(p => {
    //     this.fetchedPrice = p;
    //     console.log("price is"+this.fetchedPrice)
    //   })
    // }
  }

  nextCustomStep(bookingData, priceData, stepper: MatStepper) {

    bookingData["cust_id"] = localStorage.getItem("cust_id");
    bookingData["sup_id"] = this.customSupplierId;
    bookingData["s_type"] = this.selectedService.c_name;
    bookingData["b_pricetag"] = priceData["b_price"];
    bookingData["b_date"]=moment(bookingData["b_date"]).format('YYYY-MM-DD')

    this.makeBooking.addBooking(bookingData).subscribe(p => {
      if (p == 1) {
        if (this.b_id != undefined) {
          let obj = {
            'b_id': this.b_id,
            'b_accepted': 'C'
          }
          this.service.updateBookingConfirmation(this.b_id, obj).subscribe(p => console.log(p))
        }
        this.isBookingFormFilled = true;
        this.step1Editable = false;
        this.step2Editable = false;
        stepper.next();

      }
      else
        console.log("error")
    }, e => console.log(e))

    console.log(bookingData)

  }

  someChange(data) {
    this.supplierGettingSelected = true;
    console.log("Event Change data: " + data)
    if (data != undefined && this.selectedService != undefined) {

      console.log(this.customSupplierId)

      this.customPrices.getCustomPrices(data, { 'c_name': this.selectedService["c_name"] }).subscribe(p => {
        this.supplierGettingSelected = false;

        this.fetchedPrice = p;
        console.log("price is" + this.fetchedPrice)
      })
    }
  }



}
