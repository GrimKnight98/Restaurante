import { TestBed } from '@angular/core/testing';

import { TiposComidaService } from './tipos-comida.service';

describe('TiposComidaService', () => {
  let service: TiposComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
