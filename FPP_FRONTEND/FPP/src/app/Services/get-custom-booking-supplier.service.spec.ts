import { TestBed } from '@angular/core/testing';

import { GetCustomBookingSupplierService } from './get-custom-booking-supplier.service';

describe('GetCustomBookingSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCustomBookingSupplierService = TestBed.get(GetCustomBookingSupplierService);
    expect(service).toBeTruthy();
  });
});
