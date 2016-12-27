import { Injectable } from '@angular/core';

@Injectable()
export class DimensionService
{
  constructor() {}

  public static readonly SIZE_MOBILE_SMALL = 1;
  public static readonly SIZE_MOBILE_MEDIUM = 2;
  public static readonly SIZE_MOBILE_LARGE = 3;
  public static readonly SIZE_TABLET = 4;
  public static readonly SIZE_LAPTOP = 5;
  public static readonly SIZE_LAPTOP_LARGE = 6;
  public static readonly SIZE_4K = 7;

  // though height is not important in here
  private static readonly DIMEN_SIZES = {
    SIZE_MOBILE_SMALL: { w: 320, h: 0 },
    SIZE_MOBILE_MEDIUM: { w: 375, h: 0 },
    SIZE_MOBILE_LARGE: { w: 425, h: 0 },
    SIZE_TABLET: { w: 768, h: 0 },
    SIZE_LAPTOP: { w: 1024, h: 0 },
    SIZE_LAPTOP_LARGE: { w: 1440, h: 0 },
    SIZE_4K: { w: 2560, h: 0 }
  };

  /**
   *  return the dimension size (check the constants);
   *  the corresponding action to be taken depends on the caller application,
   *  this method only returns a valid constant value based on the
   *  given width and height
   */
  public getDimensionConstant(w, h) {
    if (!isNaN(w) && !isNaN(h)) {
      let size = DimensionService.SIZE_LAPTOP;

      if (w < DimensionService.DIMEN_SIZES.SIZE_MOBILE_MEDIUM.w) {
        size = DimensionService.SIZE_MOBILE_SMALL;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_MOBILE_MEDIUM.w &&
        w < DimensionService.DIMEN_SIZES.SIZE_MOBILE_LARGE.w) {
        size = DimensionService.SIZE_MOBILE_MEDIUM;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_MOBILE_LARGE.w &&
        w < DimensionService.DIMEN_SIZES.SIZE_TABLET.w) {
        size = DimensionService.SIZE_MOBILE_LARGE;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_TABLET.w &&
        w < DimensionService.DIMEN_SIZES.SIZE_LAPTOP.w) {
        size = DimensionService.SIZE_TABLET;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_LAPTOP.w &&
        w < DimensionService.DIMEN_SIZES.SIZE_LAPTOP_LARGE.w) {
        size = DimensionService.SIZE_LAPTOP;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_LAPTOP_LARGE.w &&
        w < DimensionService.DIMEN_SIZES.SIZE_4K.w) {
        size = DimensionService.SIZE_LAPTOP_LARGE;
      } else if (w >= DimensionService.DIMEN_SIZES.SIZE_4K.w) {
        size = DimensionService.SIZE_4K;
      }
      return size;

    } else {
      // default treats as laptop (1024 width)
      return DimensionService.SIZE_LAPTOP;
    }
  }


  /**
   *  method to return a "hard-code" array of img for the carousel
   */
  public getImageSources = ():any => {
    let list = [];
    list.push({ 'img': '/img/landing/menu_food.jpg', 'link': 'https://www.google.com' });
    list.push({ 'img': '/img/landing/menu_wears.jpg', 'link': 'https://www.sina.com' });
    list.push({ 'img': '/img/landing/menu_daily_supplies.jpg', 'link': 'https://www.yahoo.com' });

    return list;
  };

}
