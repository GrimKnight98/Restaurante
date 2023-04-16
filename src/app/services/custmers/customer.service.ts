import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  storeCustomer(body:any, options:any){
    return this.http.post('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/clientes',body,options).subscribe(
      data=>{
        console.log('_body');
        
      }, error=>{
        console.log(error);
        
      }
    )
  }
}
