import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOrganizationComponent } from './signup-organization.component';

describe('SignupOrganizationComponent', () => {
  let component: SignupOrganizationComponent;
  let fixture: ComponentFixture<SignupOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
