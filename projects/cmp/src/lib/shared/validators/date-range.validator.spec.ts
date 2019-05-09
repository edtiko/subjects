import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';

import { dateRangeValidator } from '..';

describe('dateRangeValidator', () => {
  let formGroup: FormGroup;

  beforeEach(() => {
    formGroup = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  });

  it('should return null if any of the two dates has no value', () => {
    formGroup.get('startDate').setValue(new Date());
    expect(dateRangeValidator(formGroup)).toBeNull();
  });

  it('should return null if the date range is valid', () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 1);
    formGroup.get('startDate').setValue(startDate);
    formGroup.get('endDate').setValue(endDate);
    expect(dateRangeValidator(formGroup)).toBeNull();
  });

  it('should return a value if the date range is invalid', () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() - 1);
    formGroup.get('startDate').setValue(startDate);
    formGroup.get('endDate').setValue(endDate);
    const errors: ValidationErrors = dateRangeValidator(formGroup);
    expect(errors).toBeTruthy();
    expect(errors.invalidDateRange.startDate).toBe(startDate);
    expect(errors.invalidDateRange.endDate).toBe(endDate);
  });
});
