import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<Message[]>();
  private messages: Message[] = [];

  constructor() { }

  addMessage(message: Message): void {
    this.messages.push(message);
    this.messageSubject.next(this.messages);
  }

  getMessages(): Observable<Message[]> {
    return this.messageSubject.asObservable();
  }

  removeMessage(index: number): void {
    this.messages.splice(index, 1);
    this.messageSubject.next(this.messages);
  }

  removeAllMessages(): void {
    this.messages = [];
    this.messageSubject.next(this.messages);
  }
}
