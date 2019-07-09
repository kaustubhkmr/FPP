import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path:'',redirectTo: '/welcome', pathMatch: 'full'},
  { path : 'welcome', component: WelcomeComponent },
  { path: 'home' , component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
