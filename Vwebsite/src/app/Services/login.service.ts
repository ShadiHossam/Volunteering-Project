import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../register";  
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {         
  Url :string;  
  token : string;  
  header : any;  
  // UserData:string [];
  constructor(private http : HttpClient) {   

    this.Url = 'http://localhost:49826/api/Login/';  

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
   return this.http.post<any>(this.Url+'userLogin',model,{ headers: this.header});  
  }  
   CreateUser(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, httpOptions)  
   }  
//    getUsers(): Observable < Register[] > {  
//     return this.http.get < Register[] > (`${this.Url}GetUserDetails`);  
// }  
     
}  