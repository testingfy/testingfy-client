import { Injectable } from '@angular/core';
import { Router }   from '@angular/router';

@Injectable()
export class NavigationService {

  /**
   *  any injection should be declared here
   */
  constructor(private _router:Router) {}

  /**
   *  handy method for navigating to the item page
   */
  public navToItem = (id) => {
    this._router.navigate(['/item', id]);
  };

}
