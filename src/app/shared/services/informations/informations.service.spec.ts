import { TestBed } from '@angular/core/testing';

import { InformationsService } from './informations.service';

describe('InformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationsService = TestBed.get(InformationsService);
    expect(service).toBeTruthy();
  });
});
