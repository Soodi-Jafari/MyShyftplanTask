import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogEvent } from '../models/logEvent';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  baseUrl = 'https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod';
  constructor(private http: HttpClient)
  { 
  }

  getEventList(params:HttpParams): Observable<any>  {
    
    let url = this.baseUrl + '/events';
    return this.http.get<any>(url, {params});
  } 

  getEvent(id: number): Observable<LogEvent>  {
    
    let url = this.baseUrl + `/events/${id}`;
    return this.http.get<LogEvent>(url);
  } 
}
