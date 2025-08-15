import { TestBed } from '@angular/core/testing';

import { BnsDataService } from './bns-data.service';

describe('BnsDataService', () => {
  let service: BnsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
