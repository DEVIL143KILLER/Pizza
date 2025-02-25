import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApphomeComponent } from './apphome/apphome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { adminguardGuard } from './guard/adminguard.guard';
import { customerguardGuard } from './guard/customerguard.guard';
import { AddpizzaComponent } from './addpizza/addpizza.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';

const routes: Routes = [
  { path: '', component: ApphomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'addproduct', component:AddpizzaComponent, canActivate: [adminguardGuard]},
  { path: 'adminDashboard', component: AdminhomeComponent, canActivate: [adminguardGuard] },  
  { path: 'add-category', component: AddcategoryComponent , canActivate: [adminguardGuard]},
  {path:'listproduct', component: ViewpizzaComponent, canActivate: [adminguardGuard]},
//  { path: 'profile', component: UserProfileComponent, canActivate: [customerguardGuard] },
  { path: 'clienthome', component: CustomerhomeComponent, canActivate: [customerguardGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }