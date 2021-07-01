import { TestBed } from '@angular/core/testing';

import { KalpitiyaService } from './kalpitiya.service';

describe('KalpitiyaService', () => {
  let service: KalpitiyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalpitiyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
