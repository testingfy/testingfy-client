import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './modules/testingfy-main/main.module';

const platform = platformBrowserDynamic();
/*
 *  load the required app-module (so, the main / bootstrapper has no logic
 *  in picking which app-module to run, which is a good thing)
 */
platform.bootstrapModule(MainModule);
