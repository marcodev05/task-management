import { TestBed } from '@angular/core/testing';

import { TaskFormDataService } from './task-form-data.service';

describe('TaskFormDataService', () => {
  let service: TaskFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
