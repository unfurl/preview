import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import '@unfurl/preview';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {loadComponents} from '@unfurl/preview';

window.Unfurl.setConfig({apiToken: 'mdi61be6EhHH8Tdcqt5twdltZmFKRhiF87lWONb7hiF6PODKlHiHOMaQNSMW'});

loadComponents();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
