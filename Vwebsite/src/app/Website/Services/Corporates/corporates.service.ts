import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corporates } from '../../Model/Corporates';

@Injectable({
  providedIn: 'root',
})
export class CorporatesService {
  token: string;
  header: any;
  CorporatesUrl: string;
  x = localStorage.getItem('Corporate');

  constructor(private http: HttpClient) {
    this.CorporatesUrl = 'http://localhost:49826/Api/Corporates/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  GetCorporateByUserName(x): Observable<Corporates> {
    return this.http.get<Corporates>(
      'http://localhost:49826/Api/GetCorporateByUserName?UserName=' + x
    );
  }

  GetCorporatesList(): Observable<Corporates[]> {
    return this.http.get<Corporates[]>(this.CorporatesUrl);
  }
  DeleteCorporates() {
    return this.http.delete(this.CorporatesUrl + this.x);
  }
  GetCorporates(x): Observable<Corporates> {
    return this.http.get<Corporates>(this.CorporatesUrl + x);
  }
  PostCorporates(emp) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Corporates>(this.CorporatesUrl, body, httpOptions);
  }
  Filter(emp): Observable<Corporates[]> {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Corporates[]>(
      this.CorporatesUrl + 'FilterCorporates',
      body,
      httpOptions
    );
  }

  PutCorporates(emp: Corporates) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Corporates>(this.CorporatesUrl, body, httpOptions);
  }
}
