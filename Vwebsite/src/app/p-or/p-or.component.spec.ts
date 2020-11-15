import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PORComponent } from './p-or.component';

describe('PORComponent', () => {
  let component: PORComponent;
  let fixture: ComponentFixture<PORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
