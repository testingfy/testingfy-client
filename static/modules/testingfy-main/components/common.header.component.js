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
        this._dimenSize = dimension_service_1.DimensionService.SIZE_LAPTOP;
        this._compactMenuVisible = false;
        this._compactMenuOverlay = false;
        // use let vs var
        var ctx = this;
        setTimeout((function () {
            ctx._dimenSize = ctx._dimensionService.getDimensionConstant(window.innerWidth, window.innerHeight);
            if (ctx._dimenSize <= dimension_service_1.DimensionService.SIZE_MOBILE_LARGE) {
                ctx._compactMenuVisible = true;
            }
            else {
                ctx._compactMenuVisible = false;
            }
        })(), 1000);
    }
    CommonHeaderComponent.prototype.ngAfterViewInit = function () { };
    CommonHeaderComponent.prototype.headerMenuClick = function (menuId) {
        // TODO: navigate to another webpage
        console.log(menuId);
    };
    CommonHeaderComponent.prototype.signIn = function (event) {
        // TODO: navigate to user login page or show the relative login panel
        console.log(event);
    };
    CommonHeaderComponent.prototype.onResize = function (event) {
        this._dimenSize = this._dimensionService.getDimensionConstant(event.target.innerWidth, event.target.innerHeight);
        // if smaller than MOBILE_LARGE -->
        // if == TABLET
        // if > TABLET (i.e. laptop or sth else wider)
    };
    CommonHeaderComponent.prototype.resetCompactMenuAttributes = function () {
        // reset compact menu attributes
        this._compactMenuVisible = true;
        this._compactMenuOverlay = false;
    };
    CommonHeaderComponent.prototype.getCssClassForMenuFull = function () {
        var css = '';
        if (this._dimenSize <= dimension_service_1.DimensionService.SIZE_MOBILE_LARGE) {
            css = 'hiding';
        }
        else if (this._dimenSize > dimension_service_1.DimensionService.SIZE_MOBILE_LARGE &&
            this._dimenSize <= dimension_service_1.DimensionService.SIZE_TABLET) {
            css = 'showing';
            // reset compact menu attributes
            this.resetCompactMenuAttributes();
        }
        else if (this._dimenSize > dimension_service_1.DimensionService.SIZE_TABLET) {
            css = 'showing';
            // reset compact menu attributes
            this.resetCompactMenuAttributes();
        }
        return css;
    };
    CommonHeaderComponent.prototype.getCssClassForMenuCompact = function () {
        var css = '';
        if (this._dimenSize <= dimension_service_1.DimensionService.SIZE_MOBILE_LARGE) {
            css = 'showing';
        }
        else if (this._dimenSize > dimension_service_1.DimensionService.SIZE_MOBILE_LARGE &&
            this._dimenSize <= dimension_service_1.DimensionService.SIZE_TABLET) {
            css = 'hiding';
            // reset compact menu attributes
            this.resetCompactMenuAttributes();
        }
        else if (this._dimenSize > dimension_service_1.DimensionService.SIZE_TABLET) {
            css = 'hiding';
            // reset compact menu attributes
            this.resetCompactMenuAttributes();
        }
        return css;
    };
    CommonHeaderComponent.prototype.showCompactMenu = function () {
        this._compactMenuVisible = true;
        this._compactMenuOverlay = false;
    };
    CommonHeaderComponent.prototype.hideCompactMenu = function () {
        this._compactMenuVisible = false;
        // show menu overlay
        this._compactMenuOverlay = true;
    };
    CommonHeaderComponent.prototype.getCssForShowingCompactMenu = function () {
        var css = 'fa fa-bars cursor-hand ';
        if (this._compactMenuVisible == false) {
            css = 'hiding';
        }
        return css;
    };
    CommonHeaderComponent.prototype.getCssForHidingCompactMenu = function () {
        var css = 'fa fa-times cursor-hand ';
        if (this._compactMenuVisible == true) {
            css = 'hiding';
        }
        return css;
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