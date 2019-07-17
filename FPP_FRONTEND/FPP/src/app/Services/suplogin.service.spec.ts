import { TestBed } from '@angular/core/testing';

import { SuploginService } from './suplogin.service';

describe('SuploginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuploginService = TestBed.get(SuploginService);
    expect(service).toBeTruthy();
  });
});
