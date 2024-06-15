import { TestBed } from '@angular/core/testing';

import { CtxService } from './ctx.service';

describe('CtxService', () => {
  let service: CtxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
