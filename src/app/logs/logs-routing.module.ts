import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './containers/events-list/event-detail/event-detail.component';
import { EventsListComponent } from './containers/events-list/events-list.component';
import { LogsComponent } from './logs.component';

const routes: Routes = [
  { path: '', component: LogsComponent, children: [
    {path: '', component: EventsListComponent},
    {path: 'detail/:id', component: EventDetailComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
