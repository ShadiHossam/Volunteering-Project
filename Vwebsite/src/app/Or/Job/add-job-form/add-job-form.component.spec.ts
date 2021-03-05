import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddJobFormComponent } from './add-job-form.component';

describe('AddJobFormComponent', () => {
  let component: AddJobFormComponent;
  let fixture: ComponentFixture<AddJobFormComponent>;

  beforeEach(waitForAsync(() => {
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
