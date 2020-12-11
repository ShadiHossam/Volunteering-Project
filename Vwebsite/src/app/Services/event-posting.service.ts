import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { EventPosting } from '../EventPosting';
@Injectable({
  providedIn: 'root',
})
export class EventPostingService {
  token: string;
  header: any;
  EventUrl: string;
  x: string;
  constructor(private http: HttpClient) {
    this.EventUrl = 'http://localhost:49826/Api';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetEvents(): Observable<EventPosting[]> {
    return this.http.get<EventPosting[]>(this.EventUrl + '/EventPostings/');
  }

  CreateEvent(eventposting: EventPosting) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<EventPosting[]>(
      this.EventUrl + '/Event/CreateEvent/',
      eventposting,
      httpOptions
    );
  }
  GetThisEvent(x) {
    {
      return this.http.get(this.EventUrl + '/EventPostings/' + this.x);
    }
  }
}
