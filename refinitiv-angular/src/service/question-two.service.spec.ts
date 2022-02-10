import { TestBed } from '@angular/core/testing';

import { QuestionTwoService } from './question-two.service';

describe('QuestionTwoService', () => {
  let service: QuestionTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
