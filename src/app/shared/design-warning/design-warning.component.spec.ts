import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignWarningComponent } from './design-warning.component';

describe('DesignWarningComponent', () => {
  let component: DesignWarningComponent;
  let fixture: ComponentFixture<DesignWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
