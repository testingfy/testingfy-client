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
var anime_wizard_service_1 = require('./../services/anime.wizard.service');
var LabStep1ResourceComponent = (function () {
    /*  ctor  */
    function LabStep1ResourceComponent(awService) {
        /*
         *  animeWizardService instance (singleton like)
         */
        this.awService = null;
        this.awService = awService;
    }
    LabStep1ResourceComponent = __decorate([
        core_1.Component({
            selector: 'lab-step-1-resource',
            templateUrl: './canime/modules/main/components/views/lab-step-1-resource.html'
        }), 
        __metadata('design:paramtypes', [anime_wizard_service_1.AnimeWizardService])
    ], LabStep1ResourceComponent);
    return LabStep1ResourceComponent;
}());
exports.LabStep1ResourceComponent = LabStep1ResourceComponent;
//# sourceMappingURL=lab.step.1.resource.component.js.map