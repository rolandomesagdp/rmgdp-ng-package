import { TestBed } from '@angular/core/testing';

import { NgRmgdpService } from './ng-rmgdp.service';

describe('NgRmgdpService', () => {
  let service: NgRmgdpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRmgdpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
