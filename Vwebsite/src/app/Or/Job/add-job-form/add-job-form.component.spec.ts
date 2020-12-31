import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobFormComponent } from './add-job-form.component';

describe('AddJobFormComponent', () => {
  let component: AddJobFormComponent;
  let fixture: ComponentFixture<AddJobFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
