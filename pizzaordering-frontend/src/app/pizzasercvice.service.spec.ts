import { TestBed } from '@angular/core/testing';

import { PizzasercviceService } from './pizzasercvice.service';

describe('PizzasercviceService', () => {
  let service: PizzasercviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzasercviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
