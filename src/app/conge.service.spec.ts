import { TestBed, inject } from '@angular/core/testing';

import { CongeService } from './conge.service';

describe('CongeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongeService]
    });
  });

  it('should ...', inject([CongeService], (service: CongeService) => {
    expect(service).toBeTruthy();
  }));
});
