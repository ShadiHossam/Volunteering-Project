import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSkills } from '../../Model/UserSkills';
@Injectable({
  providedIn: 'root',
})
export class UserSkillsService {
  token: string;
  header: any;
  UserSkillsUrl: string;
  constructor(private http: HttpClient) {
    this.UserSkillsUrl = 'http://localhost:49826/Api/UserSkills/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetUserSkillsList(): Observable<UserSkills[]> {
    return this.http.get<UserSkills[]>(this.UserSkillsUrl);
  }
  DeleteUserSkills(id: number) {
    return this.http.delete(this.UserSkillsUrl + id);
  }
  GetUserSkills(id: number): Observable<UserSkills> {
    return this.http.get<UserSkills>(this.UserSkillsUrl + id);
  }

  PostUserSkills(emp: UserSkills) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<UserSkills[]>(this.UserSkillsUrl, body, httpOptions);
  }

  PutUserSkills(id: number, emp: UserSkills) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<UserSkills[]>(
      this.UserSkillsUrl + id,
      body,
      httpOptions
    );
  }
}
