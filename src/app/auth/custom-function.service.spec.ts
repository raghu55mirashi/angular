import { TestBed } from '@angular/core/testing';

import { CustomFunctionService } from './custom-function.service';

describe('CustomFunctionService', () => {
  let service: CustomFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
