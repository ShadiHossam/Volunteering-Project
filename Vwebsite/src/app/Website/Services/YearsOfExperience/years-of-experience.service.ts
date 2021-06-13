import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YearsOfExperience } from '../../Model/YearsOfExperience';

@Injectable({
  providedIn: 'root',
})
export class YearsOfExperienceService {
  YearsOfExperienceUrl: string;
  header: any;

  constructor(private http: HttpClient) {
    this.YearsOfExperienceUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetYearsOfExperienceList(): Observable<YearsOfExperience[]> {
    return this.http.get<YearsOfExperience[]>(
      this.YearsOfExperienceUrl + '/YearsOfExperience'
    );
  }

  DeleteYearsOfExperience(id: number) {
    return this.http.delete(this.YearsOfExperienceUrl + id);
  }
  GetYearsOfExperience(id: number): Observable<YearsOfExperience> {
    return this.http.get<YearsOfExperience>(this.YearsOfExperienceUrl + id);
  }

  PostYearsOfExperience(emp: YearsOfExperience) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<YearsOfExperience[]>(
      this.YearsOfExperienceUrl,
      body,
      httpOptions
    );
  }

  PutYearsOfExperience(id: number, emp: YearsOfExperience) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<YearsOfExperience[]>(
      this.YearsOfExperienceUrl + id,
      body,
      httpOptions
    );
  }
}
