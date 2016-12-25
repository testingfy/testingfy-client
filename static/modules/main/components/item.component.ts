import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'item-component',
  templateUrl: './client/modules/main/components/views/item-component.html'
})
export class ItemComponent {
  private _id:any = null;

  constructor(private _route:ActivatedRoute) {}

  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      let id = params['id'];

      this._id = id;
// TODO: dao to get the item by "id"
      console.log(id);

    });
  }

}
