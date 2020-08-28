import { TestBed } from '@angular/core/testing';

import { SubmentditService } from './submentdit.service';

describe('SubmentditService', () => {
  let service: SubmentditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmentditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
