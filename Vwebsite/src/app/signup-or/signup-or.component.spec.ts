import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupORComponent } from './signup-or.component';

describe('SignupORComponent', () => {
  let component: SignupORComponent;
  let fixture: ComponentFixture<SignupORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
