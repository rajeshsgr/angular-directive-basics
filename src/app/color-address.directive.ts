import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[coloraddress]'
})
export class ColorAddressDirective implements OnInit{
  
  @Input('coloraddress') color: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //this.el.nativeElement.textContent += this.emoji;

    this.el.nativeElement.style.backgroundColor= this.color;
  }



}
