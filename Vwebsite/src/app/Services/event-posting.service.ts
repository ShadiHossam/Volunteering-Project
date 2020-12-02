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
  constructor(private http: HttpClient) {
    this.EventUrl = 'http://localhost:49826/Api/Event';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  CreateJobs(eventposting: EventPosting) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<EventPosting[]>(
      this.EventUrl + '/CreateEvent/',
      eventposting,
      httpOptions
    );
  }
}
