import { TestBed } from '@angular/core/testing';

import { CustloginService } from './custlogin.service';

describe('CustloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustloginService = TestBed.get(CustloginService);
    expect(service).toBeTruthy();
  });
});
