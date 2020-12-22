import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../Cities';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  CitiesUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.CitiesUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetCities(): Observable<Cities[]> {
    return this.http.get<Cities[]>(this.CitiesUrl + '/Cities');
  }
}
