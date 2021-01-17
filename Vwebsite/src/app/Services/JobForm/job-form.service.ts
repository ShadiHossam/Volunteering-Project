import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobForm } from '../../JobForm';
@Injectable({
  providedIn: 'root',
})
export class JobFormService {
  token: string;
  header: any;
  JobForm: JobForm[];
  JobFormUrl: string;
  constructor(private http: HttpClient) {
    this.JobFormUrl = 'http://localhost:49826/Api/JobForm/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetJobFormList(): Observable<JobForm[]> {
    return this.http.get<JobForm[]>(this.JobFormUrl);
  }
  DeleteJobForm(id: number) {
    return this.http.delete(this.JobFormUrl + id);
  }
  GetJobForm(id: number): Observable<JobForm> {
    return this.http.get<JobForm>(this.JobFormUrl + id);
  }

  PostJobForm(emp) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<JobForm[]>(this.JobFormUrl, body, httpOptions);
  }

  PutJobForm(id: number, emp: JobForm) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<JobForm[]>(this.JobFormUrl + id, body, httpOptions);
  }
}
