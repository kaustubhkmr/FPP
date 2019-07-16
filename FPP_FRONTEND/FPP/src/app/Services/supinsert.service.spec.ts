import { TestBed } from '@angular/core/testing';

import { SupinsertService } from './supinsert.service';

describe('SupinsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupinsertService = TestBed.get(SupinsertService);
    expect(service).toBeTruthy();
  });
});
