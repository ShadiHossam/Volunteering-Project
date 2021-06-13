import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobListOrganizationComponent } from './job-list-organization.component';

describe('JobListOrganizationComponent', () => {
  let component: JobListOrganizationComponent;
  let fixture: ComponentFixture<JobListOrganizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
