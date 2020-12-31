import { TestBed } from '@angular/core/testing';

import { QuestionsChoicesService } from './questions-choices.service';

describe('QuestionsChoicesService', () => {
  let service: QuestionsChoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsChoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
