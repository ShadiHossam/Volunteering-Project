import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigingComponent } from './desiging.component';

describe('DesigingComponent', () => {
  let component: DesigingComponent;
  let fixture: ComponentFixture<DesigingComponent>;

  beforeEach(async(() => {
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
