import { Component } from '@angular/core';

import { DateUtilsService } from 'erpsaascmp';

@Component({
  selector: 'shw-date-utils',
  templateUrl: './date-utils.component.html',
  styleUrls: ['./date-utils.component.scss']
})
export class DateUtilsComponent {
  now: Date = new Date();

  constructor(private dateUtilsService: DateUtilsService) {
    setInterval(() => {
      this.now = new Date();
    }, 500);
  }

  get firstMomentOfToday() {
    return this.dateUtilsService.getFirstMomentOfDate(this.now);
  }

  get lastMomentOfToday() {
    return this.dateUtilsService.getLastMomentOfDate(this.now);
  }
}
