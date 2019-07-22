import { TestBed } from '@angular/core/testing';

import { SupEditService } from './sup-edit.service';

describe('SupEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupEditService = TestBed.get(SupEditService);
    expect(service).toBeTruthy();
  });
});
