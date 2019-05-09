import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[shwContactLink]'
})
export class ContactLinkDirective {

  constructor(element: ElementRef) {
    element.nativeElement.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    element.nativeElement.target = '_blank';
  }

}
