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
  constructor(private http: HttpClient) {
    this.JobUrl = 'http://localhost:49826/Api/Job/';
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
  getJob(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(this.JobUrl + 'JobPosting');
  }
}
