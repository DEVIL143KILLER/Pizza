import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { CustomerheaderComponent } from './customerheader/customerheader.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddpizzaComponent } from './addpizza/addpizza.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AdminheaderComponent,
    CustomerheaderComponent,
    CustomerhomeComponent,
    AdminhomeComponent,
    ApphomeComponent,
    AddcategoryComponent,
    AddpizzaComponent,
    ViewpizzaComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
