import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupDashboardComponent } from './Supplier/sup-dashboard/sup-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AuthGuard } from './auth/auth.guard';
import { SupAuthGuard } from './auth/sup-auth.guard';
import { AdminAuthGuard } from './auth/admin-auth.guard';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  {path:'sup-dashboard',component:SupDashboardComponent,canActivate:[SupAuthGuard]},
  {path:'cust-dashboard',component:ClientDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminhomeComponent,canActivate:[AdminAuthGuard]},
  { path:'',redirectTo: '/home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
