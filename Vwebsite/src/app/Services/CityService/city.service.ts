import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../Model/City';

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

  GetCityList(): Observable<City[]> {
    return this.http.get<City[]>(this.CityUrl + '/City');
  }

  DeleteCity(id: number) {
    return this.http.delete(this.CityUrl + id);
  }
  GetCity(id: number): Observable<City> {
    return this.http.get<City>(this.CityUrl + id);
  }

  PostCity(emp: City) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<City[]>(this.CityUrl, body, httpOptions);
  }

  PutCity(id: number, emp: City) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<City[]>(this.CityUrl + id, body, httpOptions);
  }
}
