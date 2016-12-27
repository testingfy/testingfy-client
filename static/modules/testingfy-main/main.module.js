"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 *  Module => the "main" program; therefore all setups and configs are
 *    defined here
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routes_1 = require("./routes/routes");
var main_frame_component_1 = require("./components/main.frame.component");
var common_header_component_1 = require("./components/common.header.component");
var common_trailer_component_1 = require("./components/common.trailer.component");
var landing_component_1 = require("./components/landing.component");
var landing_approach_component_1 = require("./components/landing.approach.component");
/*
 *  annotation (no need to have ";")
 */
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routes_1.Routing],
        /*
         *  declare what would be used (sort of let the compiler to
         *  reference the valid tags and components)
         */
        declarations: [
            main_frame_component_1.MainFrameComponent,
            common_header_component_1.CommonHeaderComponent,
            common_trailer_component_1.CommonTrailerComponent,
            landing_component_1.LandingComponent,
            landing_approach_component_1.LandingApproachComponent
        ],
        providers: [
            routes_1.RoutingProviders
        ],
        bootstrap: [main_frame_component_1.MainFrameComponent]
    }),
    __metadata("design:paramtypes", [])
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map