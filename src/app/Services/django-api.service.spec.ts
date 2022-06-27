import { TestBed } from '@angular/core/testing';

import { DjangoAPIService } from './django-api.service';

describe('DjangoAPIService', () => {
  let service: DjangoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
