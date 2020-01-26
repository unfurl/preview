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
      apiToken: 'KrFLdTvByTk45sAmIOWXsEQHuJfBw7wtDfMvHcvwrTzTWEHbsDdg7XiKub6y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
