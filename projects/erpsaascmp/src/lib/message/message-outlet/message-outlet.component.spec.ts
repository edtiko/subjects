import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { MessageType } from '../shared/message-type.enum';
import { Message } from '../shared/message.model';
import { MessageService } from '../shared/message.service';

import { MessageComponent } from '../message/message.component';

import { MessageOutletComponent } from './message-outlet.component';

describe('MessageOutletComponent', () => {
  let component: MessageOutletComponent;
  let fixture: ComponentFixture<MessageOutletComponent>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  const messagesStub: Message[] = [
    { text: 'Message #1', type: MessageType.Success },
    { text: 'Message #2', type: MessageType.Info }
  ];

  beforeEach(async(() => {
    const messageSpy = jasmine.createSpyObj('MessageService', ['addMessage', 'removeMessage', 'getMessages']);
    messageSpy.getMessages.and.returnValue(of(messagesStub));

    TestBed.configureTestingModule({
      declarations: [ MessageOutletComponent, MessageComponent ],
      providers: [{ provide: MessageService, useValue: messageSpy }]
    })
    .compileComponents();

    messageServiceSpy = TestBed.get(MessageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the messages', () => {
    const childrenDebugElements = fixture.debugElement.queryAll(By.directive(MessageComponent));
    const index = 0;
    expect(childrenDebugElements[index].nativeElement.innerText).toContain(messagesStub[index].text);
    expect(childrenDebugElements.length).toBe(messagesStub.length);
  });

  it('should remove a message from the list when the close button is clicked', () => {
    const index = 1;
    const buttonsDebugElements = fixture.debugElement.queryAll(By.css('button'));
    buttonsDebugElements[index].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(messageServiceSpy.removeMessage).toHaveBeenCalledWith(index);
  });
});
