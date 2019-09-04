import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadowText]'
})
export class ShadowTextDirective {

    constructor(elem: ElementRef, renderer: Renderer2) {
       renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px blue');
    }

    
  }

