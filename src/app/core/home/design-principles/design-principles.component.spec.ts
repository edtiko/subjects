import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPrinciplesComponent } from './design-principles.component';

describe('DesignPrinciplesComponent', () => {
  let component: DesignPrinciplesComponent;
  let fixture: ComponentFixture<DesignPrinciplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPrinciplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
