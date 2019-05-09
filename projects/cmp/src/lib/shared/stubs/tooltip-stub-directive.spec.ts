import { Directive, Input } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[pTooltip]' })
export class TooltipStubDirective {
  @Input() tooltipPosition = 'right';

  _text: string;

  @Input('pTooltip') set text(text: string) {
    this._text = text;
  }

  get text(): string {
    return this._text;
  }
}
