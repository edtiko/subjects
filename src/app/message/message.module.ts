import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageModule as LibraryMessageModule } from 'erpsaascmp';

import { SharedModule } from '../shared/shared.module';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message/message.component';
import { ElementsComponent } from './elements/elements.component';
import { UsageExampleComponent } from './usage-example/usage-example.component';

@NgModule({
  declarations: [MessageComponent, ElementsComponent, UsageExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibraryMessageModule,
    SharedModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
