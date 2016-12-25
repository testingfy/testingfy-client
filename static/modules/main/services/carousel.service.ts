import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService
{
  constructor() {}

  /**
   *  method to return a "hard-code" array of img for the carousel
   */
  public getImageSources = ():any => {
    let list = [];
// TODO: read the default config file for img info instead "carousel.config"
    list.push({ 'img': '/img/landing/menu_food.jpg', 'link': 'https://www.google.com' });
    list.push({ 'img': '/img/landing/menu_wears.jpg', 'link': 'https://www.sina.com' });
    list.push({ 'img': '/img/landing/menu_daily_supplies.jpg', 'link': 'https://www.yahoo.com' });

    return list;
  };

}
