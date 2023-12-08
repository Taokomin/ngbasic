import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxMinMeterComponent,
    ActionBarComponent,
    SqaureFlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
