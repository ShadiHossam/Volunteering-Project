import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevelopmentComponent } from './webdevelopment.component';

describe('WebdevelopmentComponent', () => {
  let component: WebdevelopmentComponent;
  let fixture: ComponentFixture<WebdevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
