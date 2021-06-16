import { Jobs } from '../../../Website/Model/Jobs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Register } from '../../../Website/Model/register';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  Url: string;
  token: string;
  header: any;
  x = localStorage.getItem('Admin');

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:49826/Api/AdminController/AdminLogin';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    return this.http.post<any>(this.Url + 'userLogin', model, {
      headers: this.header,
    });
  }
  LogOut() {
    sessionStorage.removeItem('Admin');
    localStorage.removeItem('Admin');
    sessionStorage.clear();
    localStorage.clear();
  }
}
