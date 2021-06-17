import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  Url: string;
  token: string;
  header: any;
  x = localStorage.getItem('Admin');

  constructor(private http: HttpClient) {
    this.Url =
      'http://localhost:49826/Api/Areas/Administration/Controller/AdminController/';

    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    return this.http.post<any>(this.Url + 'AdminLogin', model, {
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
