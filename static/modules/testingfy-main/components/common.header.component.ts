import { Component } from '@angular/core';

import { DimensionService } from './../services/dimension.service';

@Component({
  selector: 'common-header',
  templateUrl: './static/modules/testingfy-main/components/views/common-header-component.html'
})
export class CommonHeaderComponent {

  private _dimenSize = DimensionService.SIZE_LAPTOP;
  private _compactMenuVisible = false;
  private _compactMenuOverlay = false;

  /**
   *  ctor (injection done here)
   */
  constructor(private _dimensionService:DimensionService) {
    // use let vs var
    let ctx = this;

    setTimeout(
      (function() {
        ctx._dimenSize = ctx._dimensionService.getDimensionConstant(
          window.innerWidth, window.innerHeight);

        if (ctx._dimenSize <= DimensionService.SIZE_MOBILE_LARGE) {
          ctx._compactMenuVisible = true;
        } else {
          ctx._compactMenuVisible = false;
        }
      })(), 1000);
  }

  ngAfterViewInit() {}

  private headerMenuClick(menuId) {
    // TODO: navigate to another webpage
    console.log(menuId);
  }

  private signIn(event) {
    // TODO: navigate to user login page or show the relative login panel
    console.log(event);
  }

  private onResize(event) {
    this._dimenSize = this._dimensionService.getDimensionConstant(
      event.target.innerWidth, event.target.innerHeight);
    // if smaller than MOBILE_LARGE -->
    // if == TABLET
    // if > TABLET (i.e. laptop or sth else wider)
  }

  private resetCompactMenuAttributes() {
    // reset compact menu attributes
    this._compactMenuVisible = true;
    this._compactMenuOverlay = false;
  }


  private getCssClassForMenuFull() {
    let css='';

    if (this._dimenSize <= DimensionService.SIZE_MOBILE_LARGE) {
      css = 'hiding';
    } else if (this._dimenSize > DimensionService.SIZE_MOBILE_LARGE &&
      this._dimenSize <= DimensionService.SIZE_TABLET) {
      css = 'showing';
      // reset compact menu attributes
      this.resetCompactMenuAttributes();

    } else if (this._dimenSize > DimensionService.SIZE_TABLET) {
      css = 'showing';
      // reset compact menu attributes
      this.resetCompactMenuAttributes();
    }
    return css;
  }

  private getCssClassForMenuCompact() {
    let css='';

    if (this._dimenSize <= DimensionService.SIZE_MOBILE_LARGE) {
      css = 'showing';
    } else if (this._dimenSize > DimensionService.SIZE_MOBILE_LARGE &&
      this._dimenSize <= DimensionService.SIZE_TABLET) {
      css = 'hiding';
      // reset compact menu attributes
      this.resetCompactMenuAttributes();

    } else if (this._dimenSize > DimensionService.SIZE_TABLET) {
      css = 'hiding';
      // reset compact menu attributes
      this.resetCompactMenuAttributes();
    }
    return css;
  }

  private showCompactMenu() {
    this._compactMenuVisible = true;
    this._compactMenuOverlay = false;
  }
  private hideCompactMenu() {
    this._compactMenuVisible = false;
    // show menu overlay
    this._compactMenuOverlay = true;
  }

  private getCssForShowingCompactMenu() {
    let css = 'fa fa-bars cursor-hand ';
    if (this._compactMenuVisible == false) {
      css = 'hiding';
    }
    return css;
  }
  private getCssForHidingCompactMenu() {
    let css = 'fa fa-times cursor-hand ';
    if (this._compactMenuVisible == true) {
      css = 'hiding';
    }
    return css;
  }



}
