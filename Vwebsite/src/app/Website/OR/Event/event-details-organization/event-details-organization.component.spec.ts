import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventDetailsOrganizationComponent } from './event-details-organization.component';

describe('EventDetailsOrganizationComponent', () => {
  let component: EventDetailsOrganizationComponent;
  let fixture: ComponentFixture<EventDetailsOrganizationComponent>;

  beforeEach(waitForAsync(() => {
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
