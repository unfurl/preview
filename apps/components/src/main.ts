import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { PreviewModule } from './app/preview.module';
import { unfurl, Unfurl } from './app/unfurl';

declare global {
  export interface Window {
    Unfurl: Unfurl
  }
}

window['Unfurl'] = unfurl;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(PreviewModule)
  .catch(err => console.error(err));
