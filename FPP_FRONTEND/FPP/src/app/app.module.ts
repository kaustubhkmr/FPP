import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule,MatFormFieldModule, MatDialogModule,
  MatInputModule,MatRadioModule,MatSelectModule, MatSnackBarModule, MatSnackBarRef, MatSnackBar, MatDialogRef, MatDialog,MatToolbarModule, MatGridListModule, MatBadgeModule, MatDividerModule, MatStepperModule, MatChipsModule, MatSortModule, MatTableModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './client/login/login.component';
import { FormsModule } from '@angular/forms';
import { SupLoginComponent } from './Supplier/sup-login/sup-login.component';
import { PwdcheckDirective } from './Supplier/sup-login/pwdcheck.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SupinsertService } from './Services/supinsert.service';
import { SupDashboardComponent } from './Supplier/sup-dashboard/sup-dashboard.component';
import { SuploginService } from './Services/suplogin.service';
import { CpwdcheckDirective } from './client/login/cpwdcheck.directive';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { ClientEditComponent } from './Supplier/client-edit/client-edit.component';
import { SupAddServiceDiagComponent } from './Supplier/sup-add-service-diag/sup-add-service-diag.component';
import { JobRequestComponent } from './Supplier/job-request/job-request.component';
import { JobCompletedComponent } from './Supplier/job-completed/job-completed.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { JobActiveComponent } from './Supplier/job-active/job-active.component';
import { EnterBookingIdComponent } from './Supplier/enter-booking-id/enter-booking-id.component';
import { SeeCustDetailsComponent } from './Supplier/see-cust-details/see-cust-details.component';
// import{AngularFireModule} from 'angularfire2';
// import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import{AngularFireModule} from 'angularfire2';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';

import { JobPendingComponent } from './client/job-pending/job-pending.component';
import { JobOngoingComponent } from './client/job-ongoing/job-ongoing.component';
import { JobDoneComponent } from './client/job-done/job-done.component';
import { SeeSupDetailsComponent } from './client/see-sup-details/see-sup-details.component';
import { CreateServiceComponent } from './Supplier/create-service/create-service.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminClientComponent } from './admin/admin-client/admin-client.component';
import { AdminSupplierComponent } from './admin/admin-supplier/admin-supplier.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SupLoginComponent,
    PwdcheckDirective,
    SupDashboardComponent,
    CpwdcheckDirective,
    ClientDashboardComponent,
    ClientEditComponent,
    SupAddServiceDiagComponent,
    JobRequestComponent,
    JobCompletedComponent,
    EditClientComponent,
    JobActiveComponent,
    EnterBookingIdComponent,
    SeeCustDetailsComponent,
    JobPendingComponent,
    JobOngoingComponent,
    JobDoneComponent,
    SeeSupDetailsComponent,
    CreateServiceComponent,
    AdminhomeComponent,
    AdminClientComponent,
    AdminSupplierComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatBadgeModule,
    MatStepperModule,
    MatDividerModule,
    MatChipsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCTNZUNKV0g7uDbCzVXACGxNrFBRZ728xA",
      authDomain: "firstprotivitiproject.firebaseapp.com",
      storageBucket: "firstprotivitiproject.appspot.com",
      projectId: "firstprotivitiproject",
    }),
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [SupinsertService,MatSnackBar,MatDialog,SuploginService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent,SupLoginComponent,ClientEditComponent,SupAddServiceDiagComponent,EditClientComponent,EnterBookingIdComponent,SeeCustDetailsComponent,SeeSupDetailsComponent,CreateServiceComponent,AdminLoginComponent]
})
export class AppModule { }
