/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminguardService } from './adminguard.service';

describe('AdminguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminguardService]
    });
  });

  it('should ...', inject([AdminguardService], (service: AdminguardService) => {
    expect(service).toBeTruthy();
  }));
});
