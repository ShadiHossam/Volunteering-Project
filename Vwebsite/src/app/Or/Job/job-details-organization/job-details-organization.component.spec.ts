import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsOrganizationComponent } from './job-details-organization.component';

describe('JobDetailsOrganizationComponent', () => {
  let component: JobDetailsOrganizationComponent;
  let fixture: ComponentFixture<JobDetailsOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
