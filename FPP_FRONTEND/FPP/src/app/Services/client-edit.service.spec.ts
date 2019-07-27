import { TestBed } from '@angular/core/testing';

import { ClientEditService } from './client-edit.service';

describe('ClientEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientEditService = TestBed.get(ClientEditService);
    expect(service).toBeTruthy();
  });
});
