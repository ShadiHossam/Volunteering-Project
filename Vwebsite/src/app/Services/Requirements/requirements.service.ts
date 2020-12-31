import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirements } from '../../Requirements';
@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  token: string;
  header: any;
  RequirementsUrl: string;
  constructor(private http: HttpClient) {
    this.RequirementsUrl = 'http://localhost:49826/Api/Requirements/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetRequirementsList(): Observable<Requirements[]> {
    return this.http.get<Requirements[]>(this.RequirementsUrl);
  }
  DeleteRequirements(id: number) {
    return this.http.delete(this.RequirementsUrl + id);
  }
  GetRequirements(id: number): Observable<Requirements> {
    return this.http.get<Requirements>(this.RequirementsUrl + id);
  }

  PostRequirements(emp: Requirements) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Requirements[]>(
      this.RequirementsUrl,
      body,
      httpOptions
    );
  }

  PutRequirements(id: number, emp: Requirements) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Requirements[]>(
      this.RequirementsUrl + id,
      body,
      httpOptions
    );
  }
}
