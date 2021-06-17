import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCorporateDetailsComponent } from './admin-corporate-details.component';

describe('AdminCorporateDetailsComponent', () => {
  let component: AdminCorporateDetailsComponent;
  let fixture: ComponentFixture<AdminCorporateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCorporateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCorporateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
