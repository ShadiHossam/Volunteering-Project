import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../City';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  CityUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.CityUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  Getcity(): Observable<City[]> {
    return this.http.get<City[]>(this.CityUrl + '/City');
  }
}
