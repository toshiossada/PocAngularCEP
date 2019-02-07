import { TestBed } from '@angular/core/testing';

import { CepService } from './cep.service';

describe('CepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CepService = TestBed.get(CepService);
    expect(service).toBeTruthy();
  });
});
