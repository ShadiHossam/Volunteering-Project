import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApply } from '../../Model/JobApply';

@Injectable({
  providedIn: 'root',
})
export class JobApplyService {
  token: string;
  header: any;
  JobApplyUrl: string;
  constructor(private http: HttpClient) {
    this.JobApplyUrl = 'http://localhost:49826/Api/JobApply/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetJobApplyList(): Observable<JobApply[]> {
    return this.http.get<JobApply[]>(this.JobApplyUrl);
  }
  DeleteJobApply(id: number) {
    return this.http.delete(this.JobApplyUrl + id);
  }
  GetJobApply(id: number): Observable<JobApply> {
    return this.http.get<JobApply>(this.JobApplyUrl + id);
  }

  PostJobApply(emp) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<JobApply[]>(this.JobApplyUrl, httpOptions);
  }

  PutJobApply(id: number, emp: JobApply) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<JobApply[]>(this.JobApplyUrl + id, body, httpOptions);
  }
}
