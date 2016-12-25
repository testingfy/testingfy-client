import { Injectable } from '@angular/core';

@Injectable()
export class ElasticSearchService {

  /**
   *  ctor.
   */
  constructor() {}

  public fullTextSearch = (text):any => {
    let data:Array<any> = [];
// TODO: really do a search etc

    data.push('hands on');
    data.push('hands on work');
    data.push('hands on workshop');

    return data;
  };

  public getFeaturedWeeklyItems = (dateString):any => {
    let data:Array<any> = [];
// TODO: really do a search etc

    data.push({ 'img': '/img/landing/featured/can_food_03.jpg', 'link': 'abc.com', 'desc': 'can baked beans', 'price': 12.50 });
    data.push({ 'img': '/img/landing/featured/dairy_products_01.jpg', 'link': 'def.com', 'desc': 'creamy cheese', 'price': 4.99 });
    data.push({ 'img': '/img/landing/featured/drinks_02.jpg', 'link': 'ghi.com', 'desc': 'cocktails', 'price': 42.20 });
    //data.push({ 'img': '/img/landing/featured/stationeries_02.jpg', 'link': 'abc.com', 'desc': 'pencils for sketches', 'price': 9.80 });
    //data.push({ 'img': '/img/landing/featured/wears_01.jpg', 'link': 'abc.com', 'desc': 'women jacket', 'price': 78.99 });

    return data;
  };

  public getSuggestionsBasedOnItem = (item) => {
    let data:Array<any> = [];
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
