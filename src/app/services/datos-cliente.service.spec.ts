
import { TestBed } from '@angular/core/testing';

import { DatosClienteService } from './datos-cliente.service';

describe('DatosClienteService', () => {
  let service: DatosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
