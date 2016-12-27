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
var DimensionService = DimensionService_1 = (function () {
    function DimensionService() {
        /**
         *  method to return a "hard-code" array of img for the carousel
         */
        this.getImageSources = function () {
            var list = [];
            list.push({ 'img': '/img/landing/menu_food.jpg', 'link': 'https://www.google.com' });
            list.push({ 'img': '/img/landing/menu_wears.jpg', 'link': 'https://www.sina.com' });
            list.push({ 'img': '/img/landing/menu_daily_supplies.jpg', 'link': 'https://www.yahoo.com' });
            return list;
        };
    }
    /**
     *  return the dimension size (check the constants);
     *  the corresponding action to be taken depends on the caller application,
     *  this method only returns a valid constant value based on the
     *  given width and height
     */
    DimensionService.prototype.getDimensionConstant = function (w, h) {
        if (!isNaN(w) && !isNaN(h)) {
            var size = DimensionService_1.SIZE_LAPTOP;
            if (w < DimensionService_1.DIMEN_SIZES.SIZE_MOBILE_MEDIUM.w) {
                size = DimensionService_1.SIZE_MOBILE_SMALL;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_MOBILE_MEDIUM.w &&
                w < DimensionService_1.DIMEN_SIZES.SIZE_MOBILE_LARGE.w) {
                size = DimensionService_1.SIZE_MOBILE_MEDIUM;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_MOBILE_LARGE.w &&
                w < DimensionService_1.DIMEN_SIZES.SIZE_TABLET.w) {
                size = DimensionService_1.SIZE_MOBILE_LARGE;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_TABLET.w &&
                w < DimensionService_1.DIMEN_SIZES.SIZE_LAPTOP.w) {
                size = DimensionService_1.SIZE_TABLET;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_LAPTOP.w &&
                w < DimensionService_1.DIMEN_SIZES.SIZE_LAPTOP_LARGE.w) {
                size = DimensionService_1.SIZE_LAPTOP;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_LAPTOP_LARGE.w &&
                w < DimensionService_1.DIMEN_SIZES.SIZE_4K.w) {
                size = DimensionService_1.SIZE_LAPTOP_LARGE;
            }
            else if (w >= DimensionService_1.DIMEN_SIZES.SIZE_4K.w) {
                size = DimensionService_1.SIZE_4K;
            }
            return size;
        }
        else {
            // default treats as laptop (1024 width)
            return DimensionService_1.SIZE_LAPTOP;
        }
    };
    return DimensionService;
}());
DimensionService.SIZE_MOBILE_SMALL = 1;
DimensionService.SIZE_MOBILE_MEDIUM = 2;
DimensionService.SIZE_MOBILE_LARGE = 3;
DimensionService.SIZE_TABLET = 4;
DimensionService.SIZE_LAPTOP = 5;
DimensionService.SIZE_LAPTOP_LARGE = 6;
DimensionService.SIZE_4K = 7;
// though height is not important in here
DimensionService.DIMEN_SIZES = {
    SIZE_MOBILE_SMALL: { w: 320, h: 0 },
    SIZE_MOBILE_MEDIUM: { w: 375, h: 0 },
    SIZE_MOBILE_LARGE: { w: 425, h: 0 },
    SIZE_TABLET: { w: 768, h: 0 },
    SIZE_LAPTOP: { w: 1024, h: 0 },
    SIZE_LAPTOP_LARGE: { w: 1440, h: 0 },
    SIZE_4K: { w: 2560, h: 0 }
};
DimensionService = DimensionService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DimensionService);
exports.DimensionService = DimensionService;
var DimensionService_1;
//# sourceMappingURL=dimension.service.js.map