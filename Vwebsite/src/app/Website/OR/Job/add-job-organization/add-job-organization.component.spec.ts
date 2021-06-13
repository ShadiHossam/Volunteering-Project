import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddJobOrganizationComponent } from './add-job-organization.component';

describe('AddJobOrganizationComponent', () => {
  let component: AddJobOrganizationComponent;
  let fixture: ComponentFixture<AddJobOrganizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
