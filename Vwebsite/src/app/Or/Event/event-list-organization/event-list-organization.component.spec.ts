import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListOrganizationComponent } from './event-list-organization.component';

describe('EventListOrganizationComponent', () => {
  let component: EventListOrganizationComponent;
  let fixture: ComponentFixture<EventListOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListOrganizationComponent ]
    })
    .compileComponents();
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
