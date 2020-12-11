import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobTypes } from '../JobTypes';

@Injectable({
  providedIn: 'root',
})
export class JobTypesService {
  JobUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.JobUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetJobs(): Observable<JobTypes[]> {
    return this.http.get<JobTypes[]>(this.JobUrl + '/JobTypes');
  }
}
