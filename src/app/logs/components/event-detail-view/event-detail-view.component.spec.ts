import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EventDetailViewComponent } from './event-detail-view.component';

describe('EventDetailViewComponent', () => {
  let component: EventDetailViewComponent;
  let fixture: ComponentFixture<EventDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailViewComponent ],
      imports: [RouterTestingModule],
      providers: [Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
