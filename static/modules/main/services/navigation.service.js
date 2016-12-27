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
var router_1 = require("@angular/router");
var NavigationService = (function () {
    /**
     *  any injection should be declared here
     */
    function NavigationService(_router) {
        var _this = this;
        this._router = _router;
        /**
         *  handy method for navigating to the item page
         */
        this.navToItem = function (id) {
            _this._router.navigate(['/item', id]);
        };
    }
    return NavigationService;
}());
NavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], NavigationService);
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map