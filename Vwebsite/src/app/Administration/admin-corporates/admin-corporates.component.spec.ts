import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCorporatesComponent } from './admin-corporates.component';

describe('AdminCorporatesComponent', () => {
  let component: AdminCorporatesComponent;
  let fixture: ComponentFixture<AdminCorporatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCorporatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
