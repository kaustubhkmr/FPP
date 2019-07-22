import { TestBed } from '@angular/core/testing';

import { GetBookingSupplierService } from './get-booking-supplier.service';

describe('GetBookingSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBookingSupplierService = TestBed.get(GetBookingSupplierService);
    expect(service).toBeTruthy();
  });
});
