import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './login-service.service';

describe('AdminServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminServiceService = TestBed.get(AdminServiceService);
    expect(service).toBeTruthy();
  });
});
