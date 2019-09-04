import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressDirective } from './address.directive';
import { ColorAddressDirective } from './color-address.directive';
import { ShadowTextDirective } from './shadow-text.directive';
import { ShadowTextParameterDirective } from './shadow-text-parameter.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddressDirective,
    ColorAddressDirective,
    ShadowTextDirective,
    ShadowTextParameterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
