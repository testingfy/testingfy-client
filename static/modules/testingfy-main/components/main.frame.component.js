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
var MainFrameComponent = (function () {
    /**
     *  ctor
     */
    function MainFrameComponent() {
        //this._passportController = new PassportController();
    }
    /**
     *  run once per component init (hm... not sure yet)
     *  read => https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    MainFrameComponent.prototype.ngOnInit = function () {
        /*
         *  1) check if login or not and determine the following:
         *  a. setup the name (if not login => guest)
         */
    };
    return MainFrameComponent;
}());
MainFrameComponent = __decorate([
    core_1.Component({
        selector: 'main-frame',
        templateUrl: './static/modules/testingfy-main/components/views/main-frame.html'
    }),
    __metadata("design:paramtypes", [])
], MainFrameComponent);
exports.MainFrameComponent = MainFrameComponent;
//# sourceMappingURL=main.frame.component.js.map