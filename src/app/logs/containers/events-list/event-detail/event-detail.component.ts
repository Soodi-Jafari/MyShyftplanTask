import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogsFacade } from 'src/app/logs/logs.facade';
import { LogEvent } from 'src/app/logs/models/logEvent';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  viewModel: LogEvent;
  errorMessage: string;
  constructor(private logFacade: LogsFacade, private route: ActivatedRoute) {
    this.viewModel = new LogEvent();
    this.errorMessage = "";
  }

  ngOnInit(): void {
    if (this.route.params) {
      this.route.params.subscribe(params => {
        this.viewModel.id = Number(params['id']);
        this.getEvent();
      });
    }
  }

  getEvent(): void {
    this.logFacade.getEvent(this.viewModel.id)
      .subscribe((result: any) => {
        this.viewModel = result;
      }, error => {
        if (error.status == 401)
          this.errorMessage = "Not Authorized";
        else if (error.status == 404)
          this.errorMessage = "Not found";
        else
          this.errorMessage = `Status: ${error.status}  -  ${error.statusText}`
      });
  }

}
