import { TestBed } from '@angular/core/testing';

import { MiaLegalService } from './mia-legal.service';

describe('MiaLegalService', () => {
  let service: MiaLegalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaLegalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
