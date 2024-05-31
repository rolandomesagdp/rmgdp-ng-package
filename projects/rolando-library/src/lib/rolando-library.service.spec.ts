import { TestBed } from '@angular/core/testing';

import { RolandoLibraryService } from './rolando-library.service';

describe('RolandoLibraryService', () => {
  let service: RolandoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolandoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
