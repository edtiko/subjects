import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const dateRangeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');

  const startDateValue = startDate && startDate.value as Date;
  const endDateValue = endDate && endDate.value as Date;

  if (startDateValue && endDateValue && startDateValue > endDateValue) {
    return { invalidDateRange: { startDate: startDateValue, endDate: endDateValue } };
  } else {
    return null;
  }
};
