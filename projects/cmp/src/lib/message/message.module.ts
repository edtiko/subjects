import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { MessageOutletComponent } from './message-outlet/message-outlet.component';

@NgModule({
  declarations: [MessageComponent, MessageOutletComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageOutletComponent]
})
export class MessageModule { }
