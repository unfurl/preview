import { Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { Mode } from './enums/mode.enum';
import { Layout } from './enums/layout.enum';

declare global {
  interface HTMLElementTagNameMap {
    'unf-preview': NgElement & WithProperties<{ url: string; mode: Mode; layout: Layout }>;
  }
}

export abstract class CustomElementModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    const ngElement = createCustomElement(component, {
      injector,
    });

    customElements.define(`unf-${name}`, ngElement);
  }

  ngDoBootstrap() { }
}
