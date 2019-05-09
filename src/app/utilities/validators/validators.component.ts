import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { dateRangeValidator } from 'cmp';

@Component({
  selector: 'shw-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent {
  dateRangeValidatorComponentExample =
`import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { dateRangeValidator } from 'erpsaascmp';

@Component({...})
export class DateRangeValidatorExampleComponent {
  exampleForm: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  }, { validators: dateRangeValidator });

  constructor() { }
}`;

  dateRangeValidatorTemplateExample =
`<form [formGroup]="exampleForm">
  <div class="row mb-2">
    <div class="col">
      <loggro-calendar formControlName="startDate" placeholder="Fecha inicial"></loggro-calendar>
    </div>
    <div class="col">
      <loggro-calendar formControlName="endDate" placeholder="Fecha final"></loggro-calendar>
    </div>
  </div>
  <ng-container *ngIf="exampleForm.errors; else exampleFormWithoutErrors">
    Error del <code>exampleForm</code>:
    <br/>
    <code>{{ exampleForm.errors | json }}</code>
  </ng-container>
  <ng-template #exampleFormWithoutErrors>
    No hay errores en el <code>exampleForm</code>
  </ng-template>
</form>`;

  exampleForm: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  }, { validators: dateRangeValidator });

  constructor() { }
}
