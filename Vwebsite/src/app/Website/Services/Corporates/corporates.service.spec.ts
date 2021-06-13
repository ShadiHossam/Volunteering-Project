import { TestBed } from '@angular/core/testing';

import { CorporatesService } from './corporates.service';

describe('CorporatesService', () => {
  let service: CorporatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
