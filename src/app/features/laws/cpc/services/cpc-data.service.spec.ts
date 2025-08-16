import { TestBed } from '@angular/core/testing';

import { CpcDataService } from './cpc-data.service';

describe('CpcDataService', () => {
  let service: CpcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
