import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corporates } from '../../Corporates';

@Injectable({
  providedIn: 'root',
})
export class CorporatesService {
  token: string;
  header: any;
  CorporatesUrl: string;
  constructor(private http: HttpClient) {
    this.CorporatesUrl = 'http://localhost:49826/Api/Corporates/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetCorporatesList(): Observable<Corporates[]> {
    return this.http.get<Corporates[]>(this.CorporatesUrl);
  }
  DeleteCorporates(id: number) {
    return this.http.delete(this.CorporatesUrl + id);
  }
  GetCorporates(id: number): Observable<Corporates> {
    return this.http.get<Corporates>(this.CorporatesUrl + id);
  }

  PostCorporates(emp: Corporates) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Corporates[]>(this.CorporatesUrl, body, httpOptions);
  }

  PutCorporates(id: number, emp: Corporates) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Corporates[]>(
      this.CorporatesUrl + id,
      body,
      httpOptions
    );
  }
}
