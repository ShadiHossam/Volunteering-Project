import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YearsOfExperience } from '../YearsOfExperience';

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

  GetYears(): Observable<YearsOfExperience[]> {
    return this.http.get<YearsOfExperience[]>(
      this.YearsOfExperienceUrl + '/YearsOfExperience'
    );
  }
}
