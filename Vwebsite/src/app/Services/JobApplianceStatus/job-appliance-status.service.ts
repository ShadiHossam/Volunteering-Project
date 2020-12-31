import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplianceStatus } from '../../JobApplianceStatus';

@Injectable({
  providedIn: 'root',
})
export class JobApplianceStatusService {
  token: string;
  header: any;
  JobApplianceStatusUrl: string;
  constructor(private http: HttpClient) {
    this.JobApplianceStatusUrl =
      'http://localhost:49826/Api/JobApplianceStatus/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetJobApplianceStatusList(): Observable<JobApplianceStatus[]> {
    return this.http.get<JobApplianceStatus[]>(this.JobApplianceStatusUrl);
  }
  DeleteJobApplianceStatus(id: number) {
    return this.http.delete(this.JobApplianceStatusUrl + id);
  }
  GetJobApplianceStatus(id: number): Observable<JobApplianceStatus> {
    return this.http.get<JobApplianceStatus>(this.JobApplianceStatusUrl + id);
  }

  PostJobApplianceStatus(emp: JobApplianceStatus) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<JobApplianceStatus[]>(
      this.JobApplianceStatusUrl,
      body,
      httpOptions
    );
  }

  PutJobApplianceStatus(id: number, emp: JobApplianceStatus) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<JobApplianceStatus[]>(
      this.JobApplianceStatusUrl + id,
      body,
      httpOptions
    );
  }
}
