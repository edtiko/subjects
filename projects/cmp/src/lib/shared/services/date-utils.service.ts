import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  getFirstMomentOfDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  getLastMomentOfDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  }

  getDateXDaysFromNow(x: number) {
    const now = new Date();
    now.setDate(now.getDate() + x);
    return now;
  }
}
