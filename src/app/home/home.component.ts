import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerService } from '../customer.service';
import { OnboardingComponent } from '../onboarding/onboarding.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


customers=this.css.customers

@ViewChild(OnboardingComponent) oc;

//  customers=this.oc.customers

  constructor(private css:CustomerServiceService,  ){
    
  }
  ngOnInit(): void {
    this.getCustomers();

  
  }

  getCustomers(){


    this.css.fetchCustomers().subscribe(
      (data)=>{
        this.oc.customers=data
      },
      

      (error)=>{
        console.log("error")
      }
    )
  }


  deleteCustomer(id ){
    this.css.deleteCustomer(id).subscribe(
      (res)=>{
        this.getCustomers();
        
      },
    )
  }

  removeCustomer(index){
    this.css.deleteCustomerThroughIndex(index);
  }

  

}
