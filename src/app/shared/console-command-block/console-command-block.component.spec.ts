import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleCommandBlockComponent } from './console-command-block.component';

describe('ConsoleCommandBlockComponent', () => {
  let component: ConsoleCommandBlockComponent;
  let fixture: ComponentFixture<ConsoleCommandBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleCommandBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleCommandBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
