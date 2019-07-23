import { TestBed } from '@angular/core/testing';

import { ClientDashboardService } from './client-dashboard.service';

describe('ClientDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDashboardService = TestBed.get(ClientDashboardService);
    expect(service).toBeTruthy();
  });
});
