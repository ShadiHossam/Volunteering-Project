import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../../Model/Skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  token: string;
  header: any;
  SkillsUrl: string;
  constructor(private http: HttpClient) {
    this.SkillsUrl = 'http://localhost:49826/Api/Skills/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetSkillsList(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.SkillsUrl);
  }
  DeleteSkills(id: number) {
    return this.http.delete(this.SkillsUrl + id);
  }
  GetSkills(id: number): Observable<Skills> {
    return this.http.get<Skills>(this.SkillsUrl + id);
  }

  PostSkills(emp: Skills) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Skills[]>(this.SkillsUrl, body, httpOptions);
  }

  PutSkills(id: number, emp: Skills) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Skills[]>(this.SkillsUrl + id, body, httpOptions);
  }
}
