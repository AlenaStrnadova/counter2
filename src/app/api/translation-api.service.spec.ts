import { TestBed } from '@angular/core/testing';

import { TranslationAPIService } from './translation-api.service';

describe('TranslationAPIService', () => {
  let service: TranslationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
