import { TestBed } from '@angular/core/testing';

import { JobApplianceStatusService } from './job-appliance-status.service';

describe('JobApplianceStatusService', () => {
  let service: JobApplianceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplianceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
