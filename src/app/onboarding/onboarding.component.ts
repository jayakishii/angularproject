import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerService } from '../customer.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  @ViewChild(HomeComponent) hc;

  
  customer:CustomerService =new CustomerService();

   


  constructor(private cs: CustomerServiceService) {

   }
  ngOnInit(): void {
    
  }

  resetform(){
    this.customer.firstName=null;
    this.customer.lastName=null;
    this.customer.sex=null;
    this.customer.skill=null;
    this.customer.userName=null;
    this.customer.email=null;
    this.customer.address=null;
    this.customer.address2=null;
    this.customer.city=null;
    this.customer.state=null;
    this.customer.pincode=null;
    
  }
  
  addCustomer(r) {

    console.log(this.customer);
    this.cs.postCustomer(this.customer).subscribe(data=>{
      alert("Successfully Customer is added");
      this.hc.getCustomers();
      data1=>this.cs.addtocustomer(this.customer)
    },
       data1=>this.cs.addtocustomer(this.customer)
    // error=>alert("Error: Customer not registered")
    )

  //   let body = {
  //     id: this.id++,
  //     firstName: this.fname,
  //     lastName: this.lname,
  //     sex: this.sex,
  //     skill: this.skill,
  //     userName: this.username,
  //     email:this.email,
  //     address: this.address,
  //     address2: this.address2,
  //     city: this.city,
  //     state:this.state,
  //     pincode: this.pincode,
  //   }

  //   if (this.id) {
  //     body['id'] = this.id;
  //     this.cs.putCustomer(body).subscribe(
  //       (res) => {

         
  //         this.hc.getCustomers();
  //       }
  //     )
  //   }
  //   else {
  //     this.cs.postCustomer(body).subscribe(
  //       (res) => {
  //         this.hc.getCustomers();
  //       })
  //   }
  }

}
