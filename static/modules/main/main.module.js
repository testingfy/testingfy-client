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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routes_1 = require("./routes/routes");
var main_frame_component_1 = require("./components/main.frame.component");
var search_textbox_component_1 = require("./components/search-textbox.component");
var landing_component_1 = require("./components/landing.component");
var carousel_component_1 = require("./components/carousel.component");
var featured_week_component_1 = require("./components/featured.week.component");
var item_component_1 = require("./components/item.component");
var slide_carousel_component_1 = require("./components/slide.carousel.component");
//import { LabPlaygroundComponent } from './components/lab.playground.component';
//import { LabHelpComponent } from './components/lab.help.component';
//import { LabStep1ResourceComponent } from './components/lab.step.1.resource.component';
//import { AnimeWizardService } from './services/anime.wizard.service';
var es_service_1 = require("./services/es.service");
var carousel_service_1 = require("./services/carousel.service");
var navigation_service_1 = require("./services/navigation.service");
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
            search_textbox_component_1.SearchTextboxComponent,
            landing_component_1.LandingComponent,
            carousel_component_1.CarouselComponent,
            featured_week_component_1.FeaturedWeeklyComponent,
            item_component_1.ItemComponent,
            slide_carousel_component_1.SlideCarouselComponent
        ],
        providers: [
            routes_1.RoutingProviders,
            es_service_1.ElasticSearchService,
            carousel_service_1.CarouselService,
            navigation_service_1.NavigationService
        ],
        bootstrap: [main_frame_component_1.MainFrameComponent]
    }),
    __metadata("design:paramtypes", [])
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map