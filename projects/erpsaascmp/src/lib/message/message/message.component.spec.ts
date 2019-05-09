import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MessageType } from '../shared/message-type.enum';
import { Message } from '../shared/message.model';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let buttonDebugElement: DebugElement;
  let messageStub: Message;
  const STRING_TEST_VALUE = 'test';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    messageStub = { text: STRING_TEST_VALUE, type: MessageType.Info };
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.message = messageStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the text when set text to #message', () => {
    const text = 'Mensaje de error';
    const header = fixture.debugElement.query(By.css('div'));
    const message: Message = { text: text, type: MessageType.Info };
    component.message = message;
    fixture.detectChanges();
    expect(header.nativeElement.innerText).toContain(text);
  });

  describe('applies css classes according to the message type', () => {
    it('applies css class message-danger by default', () => {
      const expectedCssClass = '.message-danger';
      const message: Message = { text: STRING_TEST_VALUE, type: null };
      component.message = message;
      fixture.detectChanges();
      const htmlElement = fixture.debugElement.query(By.css(expectedCssClass));
      expect(htmlElement).toBeTruthy();
    });

    it('applies css class message-success when type is MessageType.Success', () => {
      const expectedCssClass = '.message-success';
      const message: Message = { text: STRING_TEST_VALUE, type: MessageType.Success };
      component.message = message;
      fixture.detectChanges();
      const htmlElement = fixture.debugElement.query(By.css(expectedCssClass));
      expect(htmlElement).toBeTruthy();
    });

    it('applies css class message-info when type is MessageType.Info', () => {
      const expectedCssClass = '.message-info';
      const message: Message = { text: STRING_TEST_VALUE, type: MessageType.Info };
      component.message = message;
      fixture.detectChanges();
      const htmlElement = fixture.debugElement.query(By.css(expectedCssClass));
      expect(htmlElement).toBeTruthy();
    });

    it('applies css class message-warning when type is MessageType.Warning', () => {
      const expectedCssClass = '.message-warning';
      const message: Message = { text: STRING_TEST_VALUE, type: MessageType.Warning };
      component.message = message;
      fixture.detectChanges();
      const htmlElement = fixture.debugElement.query(By.css(expectedCssClass));
      expect(htmlElement).toBeTruthy();
    });

    it('applies css class message-danger when type is MessageType.Error', () => {
      const expectedCssClass = '.message-danger';
      const message: Message = { text: STRING_TEST_VALUE, type: MessageType.Error };
      component.message = message;
      fixture.detectChanges();
      const htmlElement = fixture.debugElement.query(By.css(expectedCssClass));
      expect(htmlElement).toBeTruthy();
    });
  });

  it('should show only one icon accordingly to the message type', () => {
    component.message = { text: STRING_TEST_VALUE, type: MessageType.Success };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.icon-success'))).toBeTruthy();

    component.message = { text: STRING_TEST_VALUE, type: MessageType.Error };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.icon-danger'))).toBeTruthy();

    component.message = { text: STRING_TEST_VALUE, type: MessageType.Info };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.icon-info'))).toBeTruthy();

    component.message = { text: STRING_TEST_VALUE, type: MessageType.Warning };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.icon-warning'))).toBeTruthy();
  });

  it('emits the #close event when clicked', () => {
    spyOn(component.close, 'emit');
    buttonDebugElement = fixture.debugElement.query(By.css('button'));
    buttonDebugElement.triggerEventHandler('click', null);
    expect(component.close.emit).toHaveBeenCalledTimes(1);
  });
});
