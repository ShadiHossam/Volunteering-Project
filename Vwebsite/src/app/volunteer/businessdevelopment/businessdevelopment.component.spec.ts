import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessdevelopmentComponent } from './businessdevelopment.component';

describe('BusinessdevelopmentComponent', () => {
  let component: BusinessdevelopmentComponent;
  let fixture: ComponentFixture<BusinessdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
