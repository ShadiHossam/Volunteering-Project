import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaOfExpertise } from '../../Model/AreaOfExpertise';

@Injectable({
  providedIn: 'root',
})
export class AreaOfExpertiseService {
  AreaOfExpertiseUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.AreaOfExpertiseUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetAreaOfExpertiseList(): Observable<AreaOfExpertise[]> {
    return this.http.get<AreaOfExpertise[]>(
      this.AreaOfExpertiseUrl + '/AreaOfExpertise'
    );
  }

  DeleteAreaOfExpertise(id: number) {
    return this.http.delete(this.AreaOfExpertiseUrl + id);
  }
  GetAreaOfExpertise(id: number): Observable<AreaOfExpertise> {
    return this.http.get<AreaOfExpertise>(this.AreaOfExpertiseUrl + id);
  }

  PostAreaOfExpertise(emp: AreaOfExpertise) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<AreaOfExpertise[]>(
      this.AreaOfExpertiseUrl,
      body,
      httpOptions
    );
  }

  PutAreaOfExpertise(id: number, emp: AreaOfExpertise) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<AreaOfExpertise[]>(
      this.AreaOfExpertiseUrl + id,
      body,
      httpOptions
    );
  }
}
