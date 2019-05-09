import { TestBed } from '@angular/core/testing';

import { DateUtilsService } from './date-utils.service';

describe('DateUtilsService', () => {
  let dateUtilsService: DateUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilsService]
    });
    dateUtilsService = TestBed.get(DateUtilsService);
  });

  it('should be created', () => {
    expect(dateUtilsService).toBeTruthy();
  });

  it('should get the first possible moment of a given date', () => {
    const dateDayOfMonth = 2;
    const firstMomentOfDate = dateUtilsService.getFirstMomentOfDate(new Date(1990, 1, dateDayOfMonth));
    const shouldBeDayBefore = new Date(firstMomentOfDate.getTime() - 1);
    expect(firstMomentOfDate.getDate()).toBe(dateDayOfMonth);
    expect(shouldBeDayBefore.getDate()).toBe(dateDayOfMonth - 1);
  });

  it('should get the last possible moment of a given date', () => {
    const dateDayOfMonth = 1;
    const lastMomentOfDate = dateUtilsService.getLastMomentOfDate(new Date(1990, 1, dateDayOfMonth));
    const shouldBeDayAfter = new Date(lastMomentOfDate.getTime() + 1);
    expect(lastMomentOfDate.getDate()).toBe(dateDayOfMonth);
    expect(shouldBeDayAfter.getDate()).toBe(dateDayOfMonth + 1);
  });

  describe('getDateXDaysFromNow', () => {
    // Posiblemente esta prueba deba modificarse para verificar fechas en lugar de mili-segundos
    const tolerance = 5;
    const fiveDaysInMilliseconds = 1000 * 60 * 60 * 24 * 5;

    it('should get me the date X days in the future', () => {
      const today = new Date();
      const fiveDaysFromNow = dateUtilsService.getDateXDaysFromNow(5);
      const difference = Math.abs(today.getTime() + fiveDaysInMilliseconds - fiveDaysFromNow.getTime());
      expect(difference).toBeLessThanOrEqual(tolerance);
    });

    it('should get me the same date if I request the date in 0 days from now', () => {
      const today = new Date();
      const shouldBeToday = dateUtilsService.getDateXDaysFromNow(0);
      const difference = Math.abs(today.getTime() - shouldBeToday.getTime());
      expect(difference).toBeLessThanOrEqual(tolerance);
    });

    it('should get me the date X days in the past', () => {
      const today = new Date();
      const fiveDaysAgo = dateUtilsService.getDateXDaysFromNow(-5);
      const difference = Math.abs(today.getTime() - fiveDaysInMilliseconds - fiveDaysAgo.getTime());
      expect(difference).toBeLessThanOrEqual(tolerance);
    });
  });
});
