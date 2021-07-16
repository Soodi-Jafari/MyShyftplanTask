import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { EventsService } from "./api/events.service";
import { LogEvent } from "./models/logEvent";

@Injectable({
  providedIn: 'root'
})

export class LogsFacade {

    constructor(private eventService: EventsService) {
    }

    getEventList(params: HttpParams): Observable<Array<LogEvent>> {
      return this.eventService.getEventList(params)
      .pipe(map((results: any) => results.items));
    }

    getEvent(id: number): Observable<LogEvent> {
        return this.eventService.getEvent(id)
        .pipe();
    }
}