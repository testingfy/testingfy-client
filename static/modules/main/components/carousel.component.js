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
var carousel_service_1 = require("./../services/carousel.service");
var CarouselComponent = (function () {
    function CarouselComponent(_carouselService) {
        var _this = this;
        this._carouselService = _carouselService;
        this._imgSrc = null;
        this._imgTarget = null;
        this._imgIndex = -1;
        this._switchHandle = null;
        this._switchPeriod = 3000;
        this.switchImg = function (ctx) {
            ctx._imgIndex = (ctx._imgIndex + 1) % ctx._imgSrc.length;
            ctx._imgTarget = ctx._imgSrc[ctx._imgIndex];
            ctx._switchHandle = setTimeout(function () {
                ctx.switchImg(ctx);
            }, ctx._switchPeriod);
        };
        /**
         *  when user "pick" a particular image within the carousel
         *  (which is not the current target)
         */
        this.pickImg = function (index) {
            // 1. stop setTimeout
            clearTimeout(_this._switchHandle);
            // 2. change to the target image (by index)
            _this._imgIndex = index;
            _this._imgTarget = _this._imgSrc[index];
            var ctx = _this;
            setTimeout(function () {
                ctx.switchImg(ctx);
            }, ctx._switchPeriod);
        };
        this.gotoPage = function (link) {
            console.log('**: ' + link);
        };
        console.log(this._carouselService.getImageSources());
    }
    CarouselComponent.prototype.ngAfterViewInit = function () {
        // viewChild is set after the view has been initialized
        this._imgSrc = this._carouselService.getImageSources();
        if (this._imgSrc && this._imgSrc.length > 0) {
            this._imgTarget = this._imgSrc[this._imgIndex];
        }
    }; // end -- ngAfterViewInit
    CarouselComponent.prototype.ngOnInit = function () {
        var ctx = this;
        setTimeout(function () {
            ctx.switchImg(ctx);
        }, 10);
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel-component',
        templateUrl: './client/modules/main/components/views/carousel-component.html'
    }),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map