import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileOrganizationComponent } from './profile-organization.component';

describe('ProfileOrganizationComponent', () => {
  let component: ProfileOrganizationComponent;
  let fixture: ComponentFixture<ProfileOrganizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
