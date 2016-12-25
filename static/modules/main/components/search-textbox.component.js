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
var es_service_1 = require("./../services/es.service");
var SearchTextboxComponent = (function () {
    /**
     *  ctor (injecting ElasticSearchService)
     */
    function SearchTextboxComponent(_esService) {
        var _this = this;
        this._esService = _esService;
        this._searchMode = false;
        this._textForSearch = '';
        this._dataList = null;
        this.toggleSearch = function () {
            _this._searchMode = !_this._searchMode;
            // reset
            if (_this._searchMode == false) {
                _this._dataList = null;
                _this._textForSearch = null;
            }
        };
        this.doSearch = function (event) {
            // TODO: in real world, might need a throttle (not real time search... overloading the elastic-search)
            // check if need to search or reset the dataList or not
            if (_this._textForSearch == '') {
                _this._dataList = null;
            }
            else {
                // reset
                _this._dataList = null;
                _this._dataList = _this._esService.fullTextSearch(_this._textForSearch);
            }
        };
    }
    return SearchTextboxComponent;
}());
SearchTextboxComponent = __decorate([
    core_1.Component({
        selector: 'search-textbox',
        templateUrl: './client/modules/main/components/views/search-textbox.html'
    }),
    __metadata("design:paramtypes", [es_service_1.ElasticSearchService])
], SearchTextboxComponent);
exports.SearchTextboxComponent = SearchTextboxComponent;
//# sourceMappingURL=search-textbox.component.js.map