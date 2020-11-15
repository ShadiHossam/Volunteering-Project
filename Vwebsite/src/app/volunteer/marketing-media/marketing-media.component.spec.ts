import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingMediaComponent } from './marketing-media.component';

describe('MarketingMediaComponent', () => {
  let component: MarketingMediaComponent;
  let fixture: ComponentFixture<MarketingMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
