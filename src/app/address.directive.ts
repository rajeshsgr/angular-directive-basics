import { Directive, ElementRef, OnInit,Input } from '@angular/core';

@Directive({
  selector: '[address]'
})
export class AddressDirective implements OnInit {



  constructor(private elementRef: ElementRef) { 

  }

  ngOnInit(){

    this.elementRef.nativeElement.textContent +='Elmwood, New Orleans, LA 70123';


  }

}
