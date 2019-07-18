import { TestBed } from '@angular/core/testing';

import { CustinsertService } from './custinsert.service';

describe('CustinsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustinsertService = TestBed.get(CustinsertService);
    expect(service).toBeTruthy();
  });
});
