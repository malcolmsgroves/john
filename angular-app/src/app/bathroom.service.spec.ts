import { TestBed, inject } from '@angular/core/testing';

import { BathroomService } from './bathroom.service';

describe('BathroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BathroomService]
    });
  });

  it('should be created', inject([BathroomService], (service: BathroomService) => {
    expect(service).toBeTruthy();
  }));
});
