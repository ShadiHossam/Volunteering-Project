import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { EventPosting } from '../../Model/EventPosting';
@Injectable({
  providedIn: 'root',
})
export class EventPostingService {
  token: string;
  header: any;
  EventUrl: string;
  x: string;
  constructor(private http: HttpClient) {
    this.EventUrl = 'http://localhost:49826/Api/EventPosting/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  // GetEvents(): Observable<EventPosting[]> {
  //   return this.http.get<EventPosting[]>(this.EventUrl + '/EventPostings/');
  // }

  CreateEvent(eventposting: EventPosting) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<EventPosting[]>(
      this.EventUrl,
      eventposting,
      httpOptions
    );
  }
  // GetThisEvent(x) {
  //   {
  //     return this.http.get(this.EventUrl + '/EventPostings/' + this.x);
  //   }
  // }
  SelectedEvent: EventPosting;
  EventList: EventPosting[];

  PostEvent(emp: EventPosting) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<EventPosting[]>(this.EventUrl, body, httpOptions);
  }

  PutEvent(id: number, emp: EventPosting) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<EventPosting[]>(this.EventUrl + id, body, httpOptions);
  }
  GetEventList(): Observable<EventPosting[]> {
    return this.http.get<EventPosting[]>(this.EventUrl);
  }

  GetEvent(id: number) {
    return this.http.get(this.EventUrl + id);
  }
  DeleteEvent(id: number) {
    return this.http.delete(this.EventUrl + id);
  }
}
