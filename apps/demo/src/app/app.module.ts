import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreviewModule} from '@unfurl/preview';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PreviewModule.forRoot({
      /* Free Test Token */
      apiToken: 'mdi61be6EhHH8Tdcqt5twdltZmFKRhiF87lWONb7hiF6PODKlHiHOMaQNSMW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
