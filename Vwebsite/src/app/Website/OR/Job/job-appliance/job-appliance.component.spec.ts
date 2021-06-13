import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplianceComponent } from './job-appliance.component';

describe('JobApplianceComponent', () => {
  let component: JobApplianceComponent;
  let fixture: ComponentFixture<JobApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
