import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventListOrganizationComponent } from './event-list-organization.component';

describe('EventListOrganizationComponent', () => {
  let component: EventListOrganizationComponent;
  let fixture: ComponentFixture<EventListOrganizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EventListOrganizationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
