import { TestBed } from '@angular/core/testing';

import { MessageType } from './message-type.enum';
import { Message } from './message.model';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;
  const messagesStub: Message[] = [
    { text: 'Message #1', type: MessageType.Success },
    { text: 'Message #2', type: MessageType.Info }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message into the messages array when #addMessage is called', () => {
    service.getMessages().subscribe((messages: Message[]) => {
      expect(messages.length).toEqual(1);
      expect(messages).toEqual([messagesStub[0]]);
    });
    service.addMessage(messagesStub[0]);
  });

  it('should remove a message from the messages array when #removeMessage is called', () => {
    service.addMessage(messagesStub[0]);
    service.addMessage(messagesStub[1]);
    service.getMessages().subscribe((messages: Message[]) => {
      expect(messages.length).toEqual(1);
      expect(messages).toEqual([messagesStub[1]]);
    });
    service.removeMessage(0);
  });

  it('should remove all messages from the messages array when #removeAllMessages is called', () => {
    service.addMessage(messagesStub[0]);
    service.addMessage(messagesStub[1]);

    service.removeAllMessages();

    service.getMessages().subscribe((messages: Message[]) => {
      expect(messages.length).toBe(0);
    });

  });
});
