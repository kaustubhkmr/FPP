import { TestBed } from '@angular/core/testing';

import { SeeSupService } from './see-sup.service';

describe('SeeSupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeeSupService = TestBed.get(SeeSupService);
    expect(service).toBeTruthy();
  });
});
