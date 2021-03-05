import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobFormComponent } from './job-form.component';

describe('JobFormComponent', () => {
  let component: JobFormComponent;
  let fixture: ComponentFixture<JobFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
