import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEvent } from '../../models/logEvent';

@Component({
  selector: 'app-event-detail-view',
  templateUrl: './event-detail-view.component.html',
  styleUrls: ['./event-detail-view.component.scss']
})
export class EventDetailViewComponent implements OnInit {

  @Input() 
  public eventDetail : LogEvent;
  constructor(private router: Router) {
    this.eventDetail = new LogEvent;
   }

  ngOnInit(): void {
  }

  goToList(): void{
    this.router.navigate([`/events`]);
  }
}
