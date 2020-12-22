import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { JobPosting } from '../JobPosting';
@Injectable({
  providedIn: 'root',
})
export class JobPostingService {
  token: string;
  header: any;
  JobUrl: string;
  SelectedJob: JobPosting;
  JobList: JobPosting[];
  constructor(private http: HttpClient) {
    this.JobUrl = 'http://localhost:49826/Api/JobPosting/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  CreateJobs(jobposting: JobPosting) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<JobPosting[]>(
      this.JobUrl + '/CreateJob/',
      jobposting,
      httpOptions
    );
  }
  GetJobList(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(this.JobUrl);
  }
  DeleteJob(id: number) {
    return this.http.delete(this.JobUrl + id);
  }
  GetJob(id: number): Observable<JobPosting> {
    return this.http.get<JobPosting>(this.JobUrl + id);
  }

  PostJob(emp: JobPosting) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<JobPosting[]>(this.JobUrl, body, httpOptions);
  }

  PutJob(id: number, emp: JobPosting) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<JobPosting[]>(this.JobUrl + id, body, httpOptions);
  }
}
