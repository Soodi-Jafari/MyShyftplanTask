import { Component, Input, OnInit } from '@angular/core';
import { DetailInfoInterface } from '../../models/interfaces/detail.info.interface';
import { LoadMoreInterface } from '../../models/interfaces/load.more.interface';
import { LogEvent } from '../../models/logEvent';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss']
})
export class EventsGridComponent implements OnInit {

  @Input()
  events: LogEvent[];
  @Input()
  detailCallback?: DetailInfoInterface;
  @Input()
  loadMoreCallback?: LoadMoreInterface;
  constructor() {
    this.events = [];
  }

  ngOnInit(): void {
  }
  loadMore(): void {
    if (this.loadMoreCallback)
      this.loadMoreCallback.load();
  }

  detailClick(item: any) {
    if (this.detailCallback)
      this.detailCallback.showDetail(item)
  }
}
