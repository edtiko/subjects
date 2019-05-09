import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UtilitiesModule } from './utilities/utilities.module';
import { CollapsiblePanelModule } from './collapsible-panel/collapsible-panel.module';
import { DialogModule } from './dialog/dialog.module';
import { InputsModule } from './inputs/inputs.module';
import { MessageModule } from './message/message.module';
import { TableModule } from './table/table.module';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
import { TabsModule } from './tabs/tab.module';
import { NavTabsModule } from './nav-tabs/nav-tabs.module';
import { ButtonsModule } from './button/buttons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml },
    { name: 'bash', func: bash }
  ];
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    CoreModule,
    SharedModule,
    UtilitiesModule,
    CollapsiblePanelModule,
    DialogModule,
    InputsModule,
    MessageModule,
    TableModule,
    DynamicTableModule,
    TabsModule,
    NavTabsModule,
    ButtonsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
