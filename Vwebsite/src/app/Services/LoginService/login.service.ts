import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Register } from '../../Register';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  Url: string;
  token: string;
  header: any;
  x = localStorage.getItem('UserName');

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
  CorporateLogin(model: any) {
    return this.http.post<any>(this.Url + 'CorporateLogin', model, {
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

  IsUserLoggedIn() {
    //JWT
    // let user = localStorage.getItem('token');
    // return !(user === null);
    return !!localStorage.getItem('UserName');
  }
  IsCorporateLoggedIn() {
    //JWT
    // let user = localStorage.getItem('token');
    // return !(user === null);
    return !!localStorage.getItem('Corporate');
  }
  LogOut() {
    //JWT
    // sessionStorage.removeItem('token');
    // localStorage.removeItem('token');
    sessionStorage.removeItem('UserName' + 'Corporate');
    localStorage.removeItem('UserName' + 'Corporate');
    sessionStorage.clear();
    localStorage.clear();
  }
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

  GetJobListByUserName() {
    return this.http.get<Register>(
      this.Url + 'GetJobListByUserName?UserName=' + this.x
    );
  }
  GetEventListByUserName() {
    return this.http.get<Register>(
      this.Url + 'GetEventListByUserName?UserName=' + this.x
    );
  }

  GetUserByUserName(x): Observable<Register> {
    return this.http.get<Register>(
      this.Url + 'GetUserByUserName?UserName=' + x
    );
  }
  ValidateUser(UserName) {
    return this.http.get(this.Url + 'Validuser?UserName=' + UserName, {
      headers: this.header,
    });
  }
  ValidCorporateByUserName(UserName) {
    return this.http.get(
      this.Url + 'ValidCorporateByUserName?UserName=' + UserName,
      {
        headers: this.header,
      }
    );
  }
  ValidCorporateByCorporateName(CorporateName) {
    return this.http.get(
      this.Url + 'ValidCorporateByCorporateName?CorporateName=' + CorporateName,
      {
        headers: this.header,
      }
    );
  }

  DeleteUsers(): Observable<Register> {
    return this.http.delete<Register>(
      this.Url + 'Deleteuserss?UserName=' + this.x
    );
  }
  UpdateUser(register: Register) {
    return this.http.put<Register>(
      this.Url + 'UpdateUser?UserName=' + this.x,
      register
    );
  }
}
