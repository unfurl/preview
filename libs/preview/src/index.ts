import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PreviewModule } from './lib/preview.module';
import { PreviewConfig } from './lib/models/preview-config.model';
import { UNFURL_CONFIG_KEY } from './lib/config-key';



declare global {
  export interface Window {
    Unfurl: Unfurl
  }
}

class Unfurl {

  setConfig(config: PreviewConfig) {
    this[UNFURL_CONFIG_KEY] = config;
  }

}

window.Unfurl = new Unfurl();

export const loadComponents = async () => await platformBrowserDynamic()
  .bootstrapModule(PreviewModule)
  .catch(err => console.error(err));




export * from './lib/preview.module';
