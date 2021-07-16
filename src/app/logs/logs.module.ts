import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { EventsListComponent } from './containers/events-list/events-list.component';
import { EventDetailComponent } from './containers/events-list/event-detail/event-detail.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventDetailViewComponent } from './components/event-detail-view/event-detail-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogsFacade } from './logs.facade';
import { EventsService } from './api/events.service';
import { InterceptorService } from '../interceptor.service';


@NgModule({
  declarations: [
    LogsComponent,
    EventsListComponent,
    EventDetailComponent,
    EventsGridComponent,
    EventDetailViewComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    HttpClient,
    LogsFacade,
    EventsService
    
  ],
})
export class LogsModule { }
