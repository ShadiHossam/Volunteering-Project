import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAnswers } from '../../UserAnswers';
@Injectable({
  providedIn: 'root',
})
export class UserAnswersService {
  token: string;
  header: any;
  UserAnswersUrl: string;
  constructor(private http: HttpClient) {
    this.UserAnswersUrl = 'http://localhost:49826/Api/UserAnswers/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetUserAnswersList(): Observable<UserAnswers[]> {
    return this.http.get<UserAnswers[]>(this.UserAnswersUrl);
  }
  DeleteUserAnswers(id: number) {
    return this.http.delete(this.UserAnswersUrl + id);
  }
  GetUserAnswers(id: number): Observable<UserAnswers> {
    return this.http.get<UserAnswers>(this.UserAnswersUrl + id);
  }

  PostUserAnswers(emp) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<UserAnswers[]>(
      this.UserAnswersUrl,
      body,
      httpOptions
    );
  }

  PutUserAnswers(id: number, emp: UserAnswers) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<UserAnswers[]>(
      this.UserAnswersUrl + id,
      body,
      httpOptions
    );
  }
}
