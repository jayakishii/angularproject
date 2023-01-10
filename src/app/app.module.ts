import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CustomerServiceService } from './customer-service.service';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CustomerService } from './customer.service';


const routes:Routes=[
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'onboarding', component: OnboardingComponent
  },
  {
    path:'**', component: HomeComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OnboardingComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerServiceService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
