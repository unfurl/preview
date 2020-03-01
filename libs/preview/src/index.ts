import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PreviewModule } from './lib/preview.module';


platformBrowserDynamic()
  .bootstrapModule(PreviewModule)
  .catch(err => console.error(err));


export * from './lib/preview.module';
