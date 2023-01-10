import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

      
    
id=1;
  customers=[
    { id:1,
      "firstName":"kishore",
      "lastName": "talari",
      "sex": "Male",
      "skill":"Java FSD",
      "userName": "talarik@gmail.com",
      "email":"talarivenkatjayakishore@gmail.com",
      "address":"dr no: 4-133/3 ",
      "address2": "talarivanipalem",
      "city":"Visakhapatnam",
      "state":"Andhrapradesh",
      "pincode":530046

    }
   
  ]

  url = "http://localhost:8081/customers"

  constructor(private http:HttpClient) { }

  fetchCustomers(){
    
   return this.http.get(this.url)
  }

  deleteCustomer(id){
   return this.http.delete(this.url +"/"+ id)
  }

  postCustomer(customer:CustomerService):Observable<Object>{
  return  this.http.post(this.url,customer);
  console.log(customer);

  }

  putCustomer(customer:CustomerService):Observable<Object>{
   return this.http.put(this.url,customer)
  }

  addtocustomer(customer:CustomerService){
    this.customers.push({id:this.id++, 
      'firstName':customer.firstName,
      'lastName':customer.lastName,
      'sex': customer.sex,
      'skill':customer.skill,
      'userName': customer.userName,
      'email':customer.email,
      'address':customer.address,
      'address2': customer.address2,
      'city':customer.city,
      'state':customer.state,
      'pincode':customer.pincode,
    });
  }

  deleteCustomerThroughIndex(index){
  
      this.customers.splice(index,1); 
    
  }

  
}
