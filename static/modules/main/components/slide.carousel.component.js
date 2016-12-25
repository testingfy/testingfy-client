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
var es_service_1 = require("./../services/es.service");
var navigation_service_1 = require("./../services/navigation.service");
var SlideCarouselComponent = (function () {
    function SlideCarouselComponent(_esService, _navService) {
        var _this = this;
        this._esService = _esService;
        this._navService = _navService;
        this._data = null;
        this.goto = function (item) {
            console.log(item);
            // TODO: fwd by _navService
            console.log(_this._navService);
        };
    }
    SlideCarouselComponent.prototype.ngAfterViewInit = function () {
        this._data = this._esService.getSuggestionsBasedOnItem(null);
    };
    return SlideCarouselComponent;
}());
SlideCarouselComponent = __decorate([
    core_1.Component({
        selector: 'slide-carousel-component',
        templateUrl: './client/modules/main/components/views/slide-carousel-component.html'
    }),
    __metadata("design:paramtypes", [es_service_1.ElasticSearchService,
        navigation_service_1.NavigationService])
], SlideCarouselComponent);
exports.SlideCarouselComponent = SlideCarouselComponent;
//# sourceMappingURL=slide.carousel.component.js.map