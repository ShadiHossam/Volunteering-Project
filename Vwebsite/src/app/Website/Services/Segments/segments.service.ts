import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Segments } from '../../Model/Segments';
@Injectable({
  providedIn: 'root',
})
export class SegmentsService {
  token: string;
  header: any;
  SegmentsUrl: string;
  constructor(private http: HttpClient) {
    this.SegmentsUrl = 'http://localhost:49826/Api/Segments/';
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetSegmentsList(): Observable<Segments[]> {
    return this.http.get<Segments[]>(this.SegmentsUrl);
  }
  DeleteSegments(id: number) {
    return this.http.delete(this.SegmentsUrl + id);
  }
  GetSegments(id: number): Observable<Segments> {
    return this.http.get<Segments>(this.SegmentsUrl + id);
  }

  PostSegments(emp: Segments) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Segments[]>(this.SegmentsUrl, body, httpOptions);
  }

  PutSegments(id: number, emp: Segments) {
    var body = JSON.stringify(emp);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Segments[]>(this.SegmentsUrl + id, body, httpOptions);
  }
}
