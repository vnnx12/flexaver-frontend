import { TestBed } from '@angular/core/testing';

import { ChangelangService } from './changelang.service';


describe('ChangelangService', () => {
  let service: ChangelangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangelangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
