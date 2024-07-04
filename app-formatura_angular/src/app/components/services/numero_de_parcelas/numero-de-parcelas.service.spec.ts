import { TestBed } from '@angular/core/testing';

import { NumeroDeParcelasService } from './numero-de-parcelas.service';

describe('NumeroDeParcelasService', () => {
  let service: NumeroDeParcelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeroDeParcelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
