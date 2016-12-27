import { Component } from '@angular/core';

import { DimensionService } from './../services/dimension.service';

@Component({
  selector: 'common-header',
  templateUrl: './static/modules/testingfy-main/components/views/common-header-component.html'
})
export class CommonHeaderComponent {

  /**
   *  ctor (injection done here)
   */
  constructor(private _dimensionService:DimensionService) {}

  private headerMenuClick(menuId) {
    // TODO: navigate to another webpage
    console.log(menuId);
  }

  private signIn(event) {
    // TODO: navigate to user login page or show the relative login panel
    console.log(event);
  }

  private onResize(event) {
    let sizeConstant = this._dimensionService.getDimensionConstant(
      event.target.innerWidth, event.target.innerHeight);

    // if smaller than MOBILE_LARGE -->
    // if == TABLET
    // if > TABLET (i.e. laptop or sth else wider)

  }

}
