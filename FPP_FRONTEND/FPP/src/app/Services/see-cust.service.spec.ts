import { TestBed } from '@angular/core/testing';

import { SeeCustService } from './see-cust.service';

describe('SeeCustService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeeCustService = TestBed.get(SeeCustService);
    expect(service).toBeTruthy();
  });
});
