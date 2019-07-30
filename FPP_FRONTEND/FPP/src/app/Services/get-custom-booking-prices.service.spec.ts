import { TestBed } from '@angular/core/testing';

import { GetCustomBookingPricesService } from './get-custom-booking-prices.service';

describe('GetCustomBookingPricesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCustomBookingPricesService = TestBed.get(GetCustomBookingPricesService);
    expect(service).toBeTruthy();
  });
});
