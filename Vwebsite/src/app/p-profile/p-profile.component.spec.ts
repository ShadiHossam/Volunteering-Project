import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PProfileComponent } from './p-profile.component';

describe('PProfileComponent', () => {
  let component: PProfileComponent;
  let fixture: ComponentFixture<PProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
