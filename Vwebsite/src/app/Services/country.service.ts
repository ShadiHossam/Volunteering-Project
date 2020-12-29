import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Country';

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

  GetCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.CountryUrl + '/Country');
  }
}
