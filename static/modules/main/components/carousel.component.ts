import { Component } from '@angular/core';
import { CarouselService } from './../services/carousel.service';

@Component({
  selector: 'carousel-component',
  templateUrl: './client/modules/main/components/views/carousel-component.html'
})
export class CarouselComponent
{
  private _imgSrc:any = null;
  private _imgTarget:any = null;
  private _imgIndex:number = -1;

  private _switchHandle = null;
  private _switchPeriod = 3000;


  constructor(private _carouselService:CarouselService) {
    console.log(this._carouselService.getImageSources());
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this._imgSrc = this._carouselService.getImageSources();

    if (this._imgSrc && this._imgSrc.length>0) {
      this._imgTarget = this._imgSrc[this._imgIndex];
    }
  } // end -- ngAfterViewInit

  ngOnInit() {
    let ctx = this;

    setTimeout(function() {
      ctx.switchImg(ctx);
    }, 10);
  }

  public switchImg = (ctx):void => {
    ctx._imgIndex = (ctx._imgIndex+1)%ctx._imgSrc.length;
    ctx._imgTarget = ctx._imgSrc[ctx._imgIndex];

    ctx._switchHandle = setTimeout(function() {
      ctx.switchImg(ctx);
    }, ctx._switchPeriod);
  };

  /**
   *  when user "pick" a particular image within the carousel
   *  (which is not the current target)
   */
  public pickImg = (index):void => {
    // 1. stop setTimeout
    clearTimeout(this._switchHandle);

    // 2. change to the target image (by index)
    this._imgIndex = index;
    this._imgTarget = this._imgSrc[index];

    let ctx = this;
    setTimeout(function() {
      ctx.switchImg(ctx);
    }, ctx._switchPeriod);
  };

  private gotoPage = (link):void => {
    console.log('**: '+link);
  };

}
