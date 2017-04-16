import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'orange';
  }
}
