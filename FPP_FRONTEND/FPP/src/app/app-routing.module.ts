import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SupDashboardComponent } from './Supplier/sup-dashboard/sup-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';


const routes: Routes = [

  { path : 'welcome', component: WelcomeComponent },
  { path: 'home' , component: HomeComponent },
  {path:'sup-dashboard',component:SupDashboardComponent},
  {path:'cust-dashboard',component:ClientDashboardComponent},
  { path:'',redirectTo: '/welcome', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
