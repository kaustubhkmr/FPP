import { TestBed, async, inject } from '@angular/core/testing';

import { SupAuthGuard } from './sup-auth.guard';

describe('SupAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupAuthGuard]
    });
  });

  it('should ...', inject([SupAuthGuard], (guard: SupAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
