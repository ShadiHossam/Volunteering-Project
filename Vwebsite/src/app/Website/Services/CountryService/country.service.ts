import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../Model/Country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  CountryUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.CountryUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.CountryUrl + '/Country');
  }

  DeleteCountry(id: number) {
    return this.http.delete(this.CountryUrl + id);
  }
  GetCountry(id: number): Observable<Country> {
    return this.http.get<Country>(this.CountryUrl + id);
  }

  PostCountry(emp: Country) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Country[]>(this.CountryUrl, body, httpOptions);
  }

  PutCountry(id: number, emp: Country) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Country[]>(this.CountryUrl + id, body, httpOptions);
  }
}
