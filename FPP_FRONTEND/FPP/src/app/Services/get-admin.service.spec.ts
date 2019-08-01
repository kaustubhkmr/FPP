import { TestBed } from '@angular/core/testing';

import { GetAdminService } from './get-admin.service';

describe('GetAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAdminService = TestBed.get(GetAdminService);
    expect(service).toBeTruthy();
  });
});
