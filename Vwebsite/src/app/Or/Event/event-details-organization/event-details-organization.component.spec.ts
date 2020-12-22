import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsOrganizationComponent } from './event-details-organization.component';

describe('EventDetailsOrganizationComponent', () => {
  let component: EventDetailsOrganizationComponent;
  let fixture: ComponentFixture<EventDetailsOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
