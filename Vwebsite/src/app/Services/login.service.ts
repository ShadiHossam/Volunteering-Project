import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Register } from '../register';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  Url: string;
  token: string;
  header: any;
  username: string;

  // UserData:string [];
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:49826/api/Login/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    return this.http.post<any>(this.Url + 'userLogin', model, {
      headers: this.header,
    });
  }
  //   SelectedUser: Register;
  //   UserList: Register[];

  //   postEmployee(emp: Register) {
  //     var body = JSON.stringify(emp);
  //     const httpOptions = {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     };
  //     return this.http.post(this.Url + 'createcontact/', body, httpOptions);
  //   }

  //   putEmployee(id, emp) {
  //     var body = JSON.stringify(emp);
  //     const httpOptions = {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     };
  //     return this.http.put(this.Url + 'Updateusers' + id, body, httpOptions);
  //   }
  //   GetUserList(): Observable<Register[]> {
  //     return this.http.get<Register[]>(this.Url + 'Employee');
  //   }

  //   deleteEmployee(id: number) {
  //     return this.http.delete(this.Url + 'Deleteusers?UserName=' + id);
  //   }
  // }
  CreateUser(register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Register>(
      this.Url + '/createcontact/',
      register,
      httpOptions
    );
  }

  x = localStorage.getItem('UserName');

  getUsers(): Observable<Register> {
    return this.http.get<Register>(
      this.Url + 'GetUserByUserName?UserName=' + this.x
    );
  }
  ValidateUser(username) {
    return this.http.get(this.Url + 'Validuser?UserName=' + this.username);
  }

  DeleteUsers(): Observable<Register> {
    return this.http.delete<Register>(
      this.Url + 'Deleteuserss?UserName=' + this.x
    );
  }
}
