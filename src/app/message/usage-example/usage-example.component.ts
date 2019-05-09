import { Component } from '@angular/core';

import { MessageService, Message } from 'erpsaascmp';
import { MessageType } from 'erpsaascmp';

@Component({
  selector: 'shw-usage-example',
  templateUrl: './usage-example.component.html',
  styleUrls: ['./usage-example.component.scss']
})
export class UsageExampleComponent {
  componentCodeExample =
`import { Component } from '@angular/core';

import { MessageService, Message } from 'erpsaascmp';
import { MessageType } from 'erpsaascmp';

@Component({...})
export class UsageExampleComponent {
  message: string;

  successType = MessageType.Success;
  errorType = MessageType.Error;
  infoType = MessageType.Info;
  warningType = MessageType.Warning;

  constructor(private messageService: MessageService) { }

  addMessage(messageType: MessageType) {
    const newMessage: Message = { type: messageType, text: this.message };
    this.messageService.addMessage(newMessage);
    this.message = null;
  }
}`;

  templateCodeExample =
`<loggro-message-outlet></loggro-message-outlet>
<div class="input-group">
  <input type="text" [(ngModel)]="message" class="form-control" placeholder="Escribe un mensaje a añadir..." required>
  <div class="input-group-append">
    <button class="btn btn-success" type="button" (click)="addMessage(successType)" [disabled]="!message">Tipo Success</button>
    <button class="btn btn-danger" type="button" (click)="addMessage(errorType)" [disabled]="!message">Tipo Error</button>
    <button class="btn btn-info" type="button" (click)="addMessage(infoType)" [disabled]="!message">Tipo Info</button>
    <button class="btn btn-warning" type="button" (click)="addMessage(warningType)" [disabled]="!message">Tipo Warning</button>
  </div>
</div>`;

  message: string;

  successType = MessageType.Success;
  errorType = MessageType.Error;
  infoType = MessageType.Info;
  warningType = MessageType.Warning;

  constructor(private messageService: MessageService) { }

  addMessage(messageType: MessageType) {
    const newMessage: Message = { type: messageType, text: this.message };
    this.messageService.addMessage(newMessage);
    this.message = null;
  }
}
