import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Jobs } from '../../Model/Jobs';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  token: string;
  header: any;
  JobUrl: string;
  SelectedJob: Jobs;
  JobList: Jobs[];
  constructor(private http: HttpClient) {
    this.JobUrl = 'http://localhost:49826/Api/Jobs/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  CreateJobs(Jobs: Jobs) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Jobs[]>(
      this.JobUrl + '/CreateJob/',
      Jobs,
      httpOptions
    );
  }
  GetJobList(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.JobUrl);
  }
  DeleteJob(id: number) {
    return this.http.delete(this.JobUrl + id);
  }
  GetJob(id): Observable<Jobs> {
    return this.http.get<Jobs>(this.JobUrl + id);
  }

  PostJob(emp: Jobs) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Jobs[]>(this.JobUrl, body, httpOptions);
  }

  PutJob(id: number, emp: Jobs) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Jobs[]>(this.JobUrl + id, body, httpOptions);
  }
}
