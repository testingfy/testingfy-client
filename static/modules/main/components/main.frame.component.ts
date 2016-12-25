import { Component } from '@angular/core';


@Component({
  selector: 'main-frame',
  templateUrl: './client/modules/main/components/views/main-frame.html'
})
export class MainFrameComponent {
  //@ViewChild('divMainBlock') divMainBlock:ElementRef;

  /* info - navbar user name */
  private _userName:string = 'GUEST';
  private _cartAmount:number = 0.00;



  /* ******************************
   *    controller(s) definition
   * ****************************** */
  //private _passportController:PassportController = null;

  /* ******************************
   *    model(s) definition
   * ****************************** */
  //private _passportModel:PassportModel = null;

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
    /*this._passportModel = this._passportController.login();

    if (this._passportModel != null && this._passportModel) {
      this._userName = this._passportModel.get('userName');
    } else {
      this._userName = 'guest';
    } // end -- if(passportModel valid)
    */
  }


}
