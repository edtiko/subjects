import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

import { CodeBlockComponent } from './code-block/code-block.component';
import { ConsoleCommandBlockComponent } from './console-command-block/console-command-block.component';
import { DesignWarningComponent } from './design-warning/design-warning.component';
import { ContactLinkDirective } from './contact-link.directive';
import { ComponentContainerComponent } from './component-container/component-container.component';

@NgModule({
  declarations: [
    CodeBlockComponent,
    ConsoleCommandBlockComponent,
    DesignWarningComponent,
    ContactLinkDirective,
    ComponentContainerComponent
  ],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    CodeBlockComponent,
    ConsoleCommandBlockComponent,
    DesignWarningComponent,
    ContactLinkDirective,
    ComponentContainerComponent
  ]
})
export class SharedModule { }
