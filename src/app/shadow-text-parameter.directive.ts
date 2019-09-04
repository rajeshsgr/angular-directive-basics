import { Directive,Input,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appShadowColor]'
})
export class ShadowTextParameterDirective implements OnInit {

  @Input() appShadowColor: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() shadowSize: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }
    
    
 

 ngOnInit() {
  let shadowParameters = `${ this.appShadowX } ${ this.appShadowY } ${ this.shadowSize } ${ this.appShadowColor }`;

  this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowParameters);
 }

}
