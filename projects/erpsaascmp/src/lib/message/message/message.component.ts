import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../shared/message.model';
import { MessageType } from '../shared/message-type.enum';

@Component({
  selector: 'loggro-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseClicked() {
    this.close.emit();
  }

  get messageType() {
    switch (this.message.type) {
      case MessageType.Success:
        return 'message-success';
      case MessageType.Error:
        return 'message-danger';
      case MessageType.Info:
        return 'message-info';
      case MessageType.Warning:
        return 'message-warning';
      default:
        return 'message-danger';
    }
  }
}
