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
var dimension_service_1 = require("./../services/dimension.service");
var CommonHeaderComponent = (function () {
    /**
     *  ctor (injection done here)
     */
    function CommonHeaderComponent(_dimensionService) {
        this._dimensionService = _dimensionService;
    }
    CommonHeaderComponent.prototype.headerMenuClick = function (menuId) {
        // TODO: navigate to another webpage
        console.log(menuId);
    };
    CommonHeaderComponent.prototype.signIn = function (event) {
        // TODO: navigate to user login page or show the relative login panel
        console.log(event);
    };
    CommonHeaderComponent.prototype.onResize = function (event) {
        var sizeConstant = this._dimensionService.getDimensionConstant(event.target.innerWidth, event.target.innerHeight);
        // if smaller than MOBILE_LARGE -->
        // if == TABLET
        // if > TABLET (i.e. laptop or sth else wider)
    };
    return CommonHeaderComponent;
}());
CommonHeaderComponent = __decorate([
    core_1.Component({
        selector: 'common-header',
        templateUrl: './static/modules/testingfy-main/components/views/common-header-component.html'
    }),
    __metadata("design:paramtypes", [dimension_service_1.DimensionService])
], CommonHeaderComponent);
exports.CommonHeaderComponent = CommonHeaderComponent;
//# sourceMappingURL=common.header.component.js.map