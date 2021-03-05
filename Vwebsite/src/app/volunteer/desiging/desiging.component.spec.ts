import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesigingComponent } from './desiging.component';

describe('DesigingComponent', () => {
  let component: DesigingComponent;
  let fixture: ComponentFixture<DesigingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesigingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
