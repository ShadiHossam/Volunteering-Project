import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsChoices } from '../../Model/QuestionsChoices';
@Injectable({
  providedIn: 'root',
})
export class QuestionsChoicesService {
  token: string;
  header: any;
  QuestionsChoicesUrl: string;
  constructor(private http: HttpClient) {
    this.QuestionsChoicesUrl = 'http://localhost:49826/Api/QuestionsChoices/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetQuestionsChoicesList(): Observable<QuestionsChoices[]> {
    return this.http.get<QuestionsChoices[]>(this.QuestionsChoicesUrl);
  }
  DeleteQuestionsChoices(id: number) {
    return this.http.delete(this.QuestionsChoicesUrl + id);
  }
  GetQuestionsChoices(id: number): Observable<QuestionsChoices> {
    return this.http.get<QuestionsChoices>(this.QuestionsChoicesUrl + id);
  }

  PostQuestionsChoices(emp: QuestionsChoices) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<QuestionsChoices[]>(
      this.QuestionsChoicesUrl,
      body,
      httpOptions
    );
  }

  PutQuestionsChoices(id: number, emp: QuestionsChoices) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<QuestionsChoices[]>(
      this.QuestionsChoicesUrl + id,
      body,
      httpOptions
    );
  }
}
