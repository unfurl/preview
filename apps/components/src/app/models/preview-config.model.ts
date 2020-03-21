import { InjectionToken } from '@angular/core';

export const PREVIEW_CONFIG = new InjectionToken('UnfurlPreviewConfig');
export interface PreviewConfig {
  apiToken: string;
}
