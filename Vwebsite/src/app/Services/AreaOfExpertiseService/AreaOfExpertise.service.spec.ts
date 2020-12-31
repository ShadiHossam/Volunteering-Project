import { TestBed } from '@angular/core/testing';

import { AreaOfExpertiseService } from './AreaOfExpertise.service';

describe('AreaOfExpertiseService', () => {
  let service: AreaOfExpertiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaOfExpertiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
