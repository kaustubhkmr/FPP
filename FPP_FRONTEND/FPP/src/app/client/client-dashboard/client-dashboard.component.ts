import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { SeeSupService } from 'src/app/Services/see-sup.service';
import { GetCustomBookingSupplierService } from 'src/app/Services/get-custom-booking-supplier.service';
import { GetCustomBookingPricesService } from 'src/app/Services/get-custom-booking-prices.service';

import * as moment from 'moment'
import { DashboardService } from 'src/app/Services/dashboard.service';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
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
  bookingData;
  bookingActive;
  activeBadge
  bookingPending;
  pendingBadge;
  bookingCompleted;
  completedBadge;
  pageOne = 0;
  pageOneData;
  pageOneDataSup;
  pageOneDataImageUrl;
  pageTwoData;
  pageTwoDataSup;
  pageTwoDataImageUrl;
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
  mindate;
  minDate;
  custId;
  intervalFlag;


  constructor(private router: Router, public serviceModel: ServiceModelData,
    public getBookingSup: GetBookingSupplierService, public makeBooking: AddBookingService,
    private dialog: MatDialog, private service: ClientDashboardService, private imgService: UploadImageService,
    private afStorage: AngularFireStorage, private get_sup: SeeSupService, private getcustomBooking: GetCustomBookingSupplierService,
    private customPrices: GetCustomBookingPricesService, private serviceSupDashboard: DashboardService) { }

  ngOnInit() {
    this.getDataClient();
    this.custId = localStorage.getItem("cust_id");
    this.getDataBooking();
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
    this.intervalFlag = setInterval(() => {
      this.service.getBookingData(this.custId).subscribe((bookingObj: object[]) => {
        bookingObj.forEach((e) => {
          e["b_time"] = e["b_time"].substring(0, 5);
        });
        this.bookingData = bookingObj;
        this.bookingPending = bookingObj.filter((e) => {
          if (e['b_accepted'] == 'F' || e['b_accepted'] == 'D') {
            return true;
          }
          else {
            return false;
          }
        });
        this.pendingBadge = this.bookingPending.length;
        this.pageOneData = this.bookingPending[this.bookingPending.length - 1];

        this.get_sup.seeSup(this.pageOneData.b_id).subscribe(p => {
          this.pageOneDataSup = p;
          try {
            this.afStorage.ref('sup' + this.pageOneDataSup['sup_id']).getDownloadURL().subscribe(u => {

              this.pageOneDataImageUrl = u;

            });
          }
          catch (e) {
            console.log(e)
          }
        })

        this.bookingActive = bookingObj.filter((e) => {
          if (e['b_accepted'] == 'A' && e['completion_status'] == 'F') {
            return true;
          }
          else {
            return false;
          }
        });
        this.activeBadge = this.bookingActive.length;
        this.pageTwoData = this.bookingActive[this.bookingActive.length - 1];

        this.get_sup.seeSup(this.pageTwoData.b_id).subscribe(p => {
          this.pageTwoDataSup = p;
          try {
            this.afStorage.ref('sup' + this.pageTwoDataSup['sup_id']).getDownloadURL().subscribe(u => {

              this.pageTwoDataImageUrl = u;

            });
          }
          catch (e) {
            console.log(e)
          }
        })

        this.bookingCompleted = bookingObj.filter((e) => {
          if (e['b_accepted'] == 'A' && e['completion_status'] == 'T') {
            return true;
          }
          else {
            return false;
          }
        });
        this.completedBadge = this.bookingCompleted.length;
      });


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

    }, 50000);

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

    console.log(this.mindate);
  }

  ngOnDestroy() {
    clearInterval(this.intervalFlag);
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
    clearInterval(this.intervalFlag);
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
          this.service.updateBookingConfirmation(this.b_id, obj).subscribe(p => { })
        }
        this.isBookingFormFilled = true;
        this.step1Editable = false;
        this.step2Editable = false;
        //this.sendSMS("Your booking is completed. Hold on while supplier accepts your booking. Your Booking Id is " + this.bookingData[this.bookingData.length-1].b_id);
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
          this.service.updateBookingConfirmation(this.b_id, obj).subscribe(p => { });
        }
        this.isBookingFormFilled = true;
        this.step1Editable = false;
        this.step2Editable = false;
        //this.sendSMS("Your booking is completed. Hold on while supplier accepts your booking. Your Booking Id is " + this.bookingData[this.bookingData.length-1].b_id);
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

  getDataBooking() {
    this.service.getBookingData(this.custId).subscribe((bookingObj: object[]) => {
      bookingObj.forEach((e) => {
        e["b_time"] = e["b_time"].substring(0, 5);
      });
      this.bookingData = bookingObj;
      this.bookingPending = bookingObj.filter((e) => {
        if (e['b_accepted'] == 'F' || e['b_accepted'] == 'D') {
          return true;
        }
        else {
          return false;
        }
      });
      this.pendingBadge = this.bookingPending.length;
      this.pageOneData = this.bookingPending[this.bookingPending.length - 1];

      this.get_sup.seeSup(this.pageOneData.b_id).subscribe(p => {
        this.pageOneDataSup = p;
        try {
          this.afStorage.ref('sup' + this.pageOneDataSup['sup_id']).getDownloadURL().subscribe(u => {

            this.pageOneDataImageUrl = u;

          });
        }
        catch (e) {
          console.log(e)
        }
      })

      this.bookingActive = bookingObj.filter((e) => {
        if (e['b_accepted'] == 'A' && e['completion_status'] == 'F') {
          return true;
        }
        else {
          return false;
        }
      });
      this.activeBadge = this.bookingActive.length;
      this.pageTwoData = this.bookingActive[this.bookingActive.length - 1];

      this.get_sup.seeSup(this.pageTwoData.b_id).subscribe(p => {
        this.pageTwoDataSup = p;
        try {
          this.afStorage.ref('sup' + this.pageTwoDataSup['sup_id']).getDownloadURL().subscribe(u => {

            this.pageTwoDataImageUrl = u;

          });
        }
        catch (e) {
          console.log(e)
        }
      })

      this.bookingCompleted = bookingObj.filter((e) => {
        if (e['b_accepted'] == 'A' && e['completion_status'] == 'T') {
          return true;
        }
        else {
          return false;
        }
      });
      this.completedBadge = this.bookingCompleted.length;
    })
  }

  sendSMS(messageData: string) {
    let apiKey = encodeURIComponent('+6YhbPl3eug-67NmtyikpMCod5I30iJo0J6wTWkjWJ');
    let numbers = encodeURIComponent('7503626005');
    let sender = encodeURIComponent('TXTLCL');
    let message = encodeURIComponent(messageData);
    let apiparams = `apikey=${apiKey}&numbers=${numbers}&sender=${sender}&message=${message}`;
    console.log("sms service -- " + apiparams);
    this.serviceSupDashboard.sendSMS(`https://api.textlocal.in/send/?${apiparams}`).subscribe(s => console.log(s));
  }


}
