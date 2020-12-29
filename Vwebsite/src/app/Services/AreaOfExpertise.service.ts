import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaOfExpertise } from '../AreaOfExpertise';

@Injectable({
  providedIn: 'root',
})
export class AreaOfExpertiseService {
  JobUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.JobUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetJobs(): Observable<AreaOfExpertise[]> {
    return this.http.get<AreaOfExpertise[]>(this.JobUrl + '/AreaOfExpertise');
  }
}
