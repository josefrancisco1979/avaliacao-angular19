import { TestBed } from '@angular/core/testing';

import { CalcularQuadradoService } from './calcular-quadrado.service';

describe('CalcularQuadradoService', () => {
  let service: CalcularQuadradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularQuadradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
