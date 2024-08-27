import { Locale } from '@tenpo/lib-core';

import ${{ parameters.moduleName }} as Screen from './screens/${{ parameters.moduleName }}';

import es from './i18n/translations/default.json';
import es_PE from './i18n/translations/es_PE.json';

import useRemote from './hooks/useRemote';

import localDuck from './features/local';
import remoteDuck from './features/remote';

import type {
  Hooks,
  Module,
  Screens,
  StoreSlices,
  Translations,
} from '@tenpo/lib-core';
import type { IDuck } from '@tenpo/lib-extensible-duck';

class ${{ parameters.moduleName }} implements Module {
  getNamespace(): string {
    return '${{ parameters.moduleName }}';
  }

  getScreens(): Screens {
    return {
      ${{ parameters.moduleName }}: Screen,
    };
  }

  getStoreSlices(): StoreSlices<IDuck> {
    return [localDuck, remoteDuck];
  }

  getTranslations(): Translations {
    return {
      [Locale.es]: es,
      [Locale.es_PE]: es_PE,
    };
  }

  getHooks(): Hooks {
    return {
      useRemote,
    };
  }
}

export default new ${{ parameters.moduleName }}();
