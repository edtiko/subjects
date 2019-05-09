import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageService } from '../shared/message.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'message-outlet',
  templateUrl: './message-outlet.component.html',
  styleUrls: ['./message-outlet.component.scss']
})
export class MessageOutletComponent implements OnInit, OnDestroy {

  messages: Message[];

  subscription: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessages().subscribe((messages: Message[]) => this.messages = messages);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClose(index: number) {
    this.messageService.removeMessage(index);
  }
}
