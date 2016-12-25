import { Component } from '@angular/core';


@Component({
  selector: 'main-frame',
  templateUrl: './static/modules/testingfy-main/components/views/main-frame.html'
})
export class MainFrameComponent {

  /**
   *  ctor
   */
  constructor() {
    //this._passportController = new PassportController();
  }

  /**
   *  run once per component init (hm... not sure yet)
   *  read => https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  ngOnInit() {
    /*
     *  1) check if login or not and determine the following:
     *  a. setup the name (if not login => guest)
     */

  }

}
