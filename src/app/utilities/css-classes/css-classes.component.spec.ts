import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHARED_TEST_IMPORTS } from '../../shared/test-utils';

import { CssClassesComponent } from './css-classes.component';

describe('CssClassesComponent', () => {
  let component: CssClassesComponent;
  let fixture: ComponentFixture<CssClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CssClassesComponent],
      imports: [...SHARED_TEST_IMPORTS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
