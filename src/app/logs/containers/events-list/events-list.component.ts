import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogsFacade } from '../../logs.facade';
import { DetailInfoInterface } from '../../models/interfaces/detail.info.interface';
import { LoadMoreInterface } from '../../models/interfaces/load.more.interface';
import { LogEvent } from '../../models/logEvent';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit, LoadMoreInterface, DetailInfoInterface {

  events: LogEvent[];
  pageSize: number;
  offSet: number;
  startDate?: string;
  endDate?: string;
  errorMessage: string;
  constructor(private logFacade: LogsFacade, private router: Router) {
    this.events = [];
    this.pageSize = 10;
    this.offSet = 0;
    this.errorMessage = "";
  }

  load(): void{
    this.offSet = this.offSet + this.pageSize;
    this.getEvents();
  }
  showDetail(data: any): void {
    this.router.navigate([`/events/detail/${data.id}`]);
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    let params = new HttpParams();
    params = params.set('limit', this.pageSize);
    params = params.set('offset', this.offSet);
    if (this.startDate != undefined)
      params = params.set('startsAt', this.startDate?.toString());
    if (this.endDate != undefined)
      params = params.set('endsAt', this.endDate?.toString());

    this.logFacade.getEventList(params)
      .subscribe((result: LogEvent[]) => {
        this.events = this.events.concat(result);
      }, error => {
        if (error.status == 401)
          this.errorMessage = "Not Authorized";
        else
          this.errorMessage = `Status: ${error.status}  -  ${error.statusText}`
      });
  }

  filter(): void {
    this.events = [];
    this.getEvents();
  }
}
