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
var CarouselService = (function () {
    function CarouselService() {
        /**
         *  method to return a "hard-code" array of img for the carousel
         */
        this.getImageSources = function () {
            var list = [];
            // TODO: read the default config file for img info instead "carousel.config"
            list.push({ 'img': '/img/landing/menu_food.jpg', 'link': 'https://www.google.com' });
            list.push({ 'img': '/img/landing/menu_wears.jpg', 'link': 'https://www.sina.com' });
            list.push({ 'img': '/img/landing/menu_daily_supplies.jpg', 'link': 'https://www.yahoo.com' });
            return list;
        };
    }
    return CarouselService;
}());
CarouselService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CarouselService);
exports.CarouselService = CarouselService;
//# sourceMappingURL=carousel.service.js.map