import { PreviewConfig } from './lib/models/preview-config.model';
import { UNFURL_CONFIG_KEY } from './lib/config-key';

class Unfurl {

  setConfig(config: PreviewConfig) {
    this[ UNFURL_CONFIG_KEY ] = config;
  }

  getConfig(): PreviewConfig {
    return this[ UNFURL_CONFIG_KEY ];
  }

}
export const unfurl = new Unfurl();
