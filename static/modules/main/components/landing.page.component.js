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
var core_1 = require('@angular/core');
var LandingPageComponent = (function () {
    function LandingPageComponent() {
        /**
         *  generic button click handler
         */
        this.handleButtonClick = function (idx) {
            switch (idx) {
                case 0:
                    //window.location.href = './test-index.html';
                    // TODO: do routing instead of changing a state to hide/show // this._showMainBlock = false;
                    console.log('bring me to playground');
                    break;
                case 1:
                    alert('to be implemented => login module');
                    break;
                case 9:
                    window.location.href = './index.html';
                    break;
                default:
                    console.log('no valid options');
            }
        };
    }
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'landing-page',
            templateUrl: './canime/modules/main/components/views/landing-page.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=landing.page.component.js.map