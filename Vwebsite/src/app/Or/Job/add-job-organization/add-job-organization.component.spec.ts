import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobOrganizationComponent } from './add-job-organization.component';

describe('AddJobOrganizationComponent', () => {
  let component: AddJobOrganizationComponent;
  let fixture: ComponentFixture<AddJobOrganizationComponent>;

  beforeEach(async(() => {
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
