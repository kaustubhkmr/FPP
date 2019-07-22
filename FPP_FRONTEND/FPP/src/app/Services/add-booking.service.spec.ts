import { TestBed } from '@angular/core/testing';

import { AddBookingService } from './add-booking.service';

describe('AddBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBookingService = TestBed.get(AddBookingService);
    expect(service).toBeTruthy();
  });
});
