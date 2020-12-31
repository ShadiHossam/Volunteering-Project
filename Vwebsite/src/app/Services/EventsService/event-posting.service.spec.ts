import { TestBed } from '@angular/core/testing';

import { EventPostingService } from './event-posting.service';

describe('EventPostingService', () => {
  let service: EventPostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
