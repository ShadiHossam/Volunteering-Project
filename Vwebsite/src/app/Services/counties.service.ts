import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../Countries';

@Injectable({
  providedIn: 'root',
})
export class CountiesService {
  CountriesUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.CountriesUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.CountriesUrl + '/Countries');
  }
}
