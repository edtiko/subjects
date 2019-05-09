import { Pipe, PipeTransform } from '@angular/core';

export const defaultLabelTrue = 'Si';
export const defaultLabelFalse = 'No';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {
  transform(value: Boolean, labelTrue?: string, labelFalse?: string): string {
    labelTrue = labelTrue || defaultLabelTrue;
    labelFalse = labelFalse || defaultLabelFalse;
    return value ? labelTrue : labelFalse;
  }
}
