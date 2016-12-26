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
var CommonTrailerComponent = (function () {
    function CommonTrailerComponent() {
    }
    CommonTrailerComponent.prototype.trailerMenuClick = function (menuId) {
        // TODO: navigate to somewhere else
        console.log(menuId);
    };
    CommonTrailerComponent.prototype.trailerContactMe = function () {
        console.log('* contact me');
    };
    CommonTrailerComponent.prototype.trailerMailMe = function () { };
    CommonTrailerComponent.prototype.trailerTweet = function () { };
    return CommonTrailerComponent;
}());
CommonTrailerComponent = __decorate([
    core_1.Component({
        selector: 'common-trailer',
        templateUrl: './static/modules/testingfy-main/components/views/common-trailer-component.html'
    }),
    __metadata("design:paramtypes", [])
], CommonTrailerComponent);
exports.CommonTrailerComponent = CommonTrailerComponent;
//# sourceMappingURL=common.trailer.component.js.map