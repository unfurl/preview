import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewComponent} from './components/preview.component';
import { PREVIEW_CONFIG, PreviewConfig } from './models/preview-config.model';
import { BrowserLinkComponent } from './components/browser-link/browser-link.component';
import { PreviewMinimalComponent } from './components/preview-minimal/preview-minimal.component';
import { PreviewService } from './providers/preview.service';
import { PreviewCompactComponent } from './components/preview-compact/preview-compact.component';
import { TruncateDirective } from './directives/truncate.directive';
import { PreviewDetailedComponent } from './components/preview-detailed/preview-detailed.component';
import { PreviewSimpleComponent } from './components/preview-simple/preview-simple.component';
import { CustomElementModule } from './elements.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PreviewComponent, BrowserLinkComponent, PreviewMinimalComponent, PreviewCompactComponent, TruncateDirective, PreviewDetailedComponent, PreviewSimpleComponent],
  imports: [ BrowserModule, CommonModule, HttpClientModule ],
  exports: [PreviewComponent, BrowserLinkComponent, PreviewMinimalComponent, PreviewCompactComponent, PreviewDetailedComponent, PreviewSimpleComponent],
  entryComponents: [PreviewComponent],
  providers: [
    PreviewService
  ]
})
export class PreviewModule extends CustomElementModule {

 constructor(injector: Injector) {
    super(injector, PreviewComponent, 'preview');
 }


  static forRoot(config: PreviewConfig): ModuleWithProviders<PreviewModule> {
    return {
      ngModule: PreviewModule,
      providers: [
        {
          provide: PREVIEW_CONFIG,
          useValue: config,
        },
        PreviewService,
      ]
    }
  }
}
