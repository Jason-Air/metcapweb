import { TestBed, inject } from '@angular/core/testing';

import { ContourService } from './contour.service';

describe('ContourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContourService]
    });
  });

  it('should be created', inject([ContourService], (service: ContourService) => {
    expect(service).toBeTruthy();
  }));
});
