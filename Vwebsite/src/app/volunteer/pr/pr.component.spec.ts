import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrComponent } from './pr.component';

describe('PrComponent', () => {
  let component: PrComponent;
  let fixture: ComponentFixture<PrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
