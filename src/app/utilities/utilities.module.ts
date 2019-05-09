import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PipesModule, CalendarModule } from 'erpsaascmp';

import { SharedModule } from '../shared/shared.module';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { DateUtilsComponent } from './date-utils/date-utils.component';
import { ValidatorsComponent } from './validators/validators.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ExcelExporterComponent } from './excel-exporter/excel-exporter.component';
import { CssClassesComponent } from './css-classes/css-classes.component';

@NgModule({
  declarations: [PipesComponent, DateUtilsComponent, ValidatorsComponent, UtilitiesComponent, ExcelExporterComponent, CssClassesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    CalendarModule,
    SharedModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
