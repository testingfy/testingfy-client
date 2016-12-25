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
var ElasticSearchService = (function () {
    /**
     *  ctor.
     */
    function ElasticSearchService() {
        this.fullTextSearch = function (text) {
            var data = [];
            // TODO: really do a search etc
            data.push('hands on');
            data.push('hands on work');
            data.push('hands on workshop');
            return data;
        };
        this.getFeaturedWeeklyItems = function (dateString) {
            var data = [];
            // TODO: really do a search etc
            data.push({ 'img': '/img/landing/featured/can_food_03.jpg', 'link': 'abc.com', 'desc': 'can baked beans', 'price': 12.50 });
            data.push({ 'img': '/img/landing/featured/dairy_products_01.jpg', 'link': 'def.com', 'desc': 'creamy cheese', 'price': 4.99 });
            data.push({ 'img': '/img/landing/featured/drinks_02.jpg', 'link': 'ghi.com', 'desc': 'cocktails', 'price': 42.20 });
            //data.push({ 'img': '/img/landing/featured/stationeries_02.jpg', 'link': 'abc.com', 'desc': 'pencils for sketches', 'price': 9.80 });
            //data.push({ 'img': '/img/landing/featured/wears_01.jpg', 'link': 'abc.com', 'desc': 'women jacket', 'price': 78.99 });
            return data;
        };
        this.getSuggestionsBasedOnItem = function (item) {
            var data = [];
            // TODO: really do a suggestion search
            data.push({ 'img': '/img/landing/featured/can_food_03.jpg', 'link': 'abc.com', 'desc': 'can baked beans', 'price': 12.50 });
            data.push({ 'img': '/img/landing/featured/dairy_products_01.jpg', 'link': 'def.com', 'desc': 'creamy cheese', 'price': 4.99 });
            data.push({ 'img': '/img/landing/featured/drinks_02.jpg', 'link': 'ghi.com', 'desc': 'cocktails', 'price': 42.20 });
            data.push({ 'img': '/img/landing/featured/stationeries_02.jpeg', 'link': 'abc.com', 'desc': 'pencils for sketches', 'price': 9.80 });
            data.push({ 'img': '/img/landing/featured/wears_01.jpg', 'link': 'abc.com', 'desc': 'women jacket', 'price': 78.99 });
            //data.push({ 'img': '/img/landing/featured/wears_02.jpg', 'link': 'abc.com', 'desc': 'men jacket', 'price': 78.99 });
            return data;
        };
    }
    return ElasticSearchService;
}());
ElasticSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ElasticSearchService);
exports.ElasticSearchService = ElasticSearchService;
//# sourceMappingURL=es.service.js.map