import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule,MatFormFieldModule, MatDialogModule,
  MatInputModule,MatRadioModule,MatSelectModule, MatSnackBarModule, MatSnackBarRef, MatSnackBar, MatDialogRef, MatDialog,MatToolbarModule, MatGridListModule, MatBadgeModule, MatDividerModule, MatStepperModule, MatChipsModule, MatSortModule, MatTableModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    SupLoginComponent,
    PwdcheckDirective,
    SupDashboardComponent,
    CpwdcheckDirective,
    ClientDashboardComponent,
    ClientEditComponent,
    SupAddServiceDiagComponent,
    JobRequestComponent,
    JobCompletedComponent
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
    MatTableModule
  ],
  providers: [SupinsertService,MatSnackBar,MatDialog,SuploginService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent,SupLoginComponent,ClientEditComponent,SupAddServiceDiagComponent]
})
export class AppModule { }
