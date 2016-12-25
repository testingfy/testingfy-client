"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var main_module_1 = require("./modules/testingfy-main/main.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
/*
 *  load the required app-module (so, the main / bootstrapper has no logic
 *  in picking which app-module to run, which is a good thing)
 */
platform.bootstrapModule(main_module_1.MainModule);
//# sourceMappingURL=main.js.map