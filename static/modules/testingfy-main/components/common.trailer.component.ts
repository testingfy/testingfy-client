import { Component } from '@angular/core';

@Component({
  selector: 'common-trailer',
  templateUrl: './static/modules/testingfy-main/components/views/common-trailer-component.html'
})
export class CommonTrailerComponent {

  private trailerMenuClick(menuId) {
    // TODO: navigate to somewhere else
    console.log(menuId);
  }

  private trailerContactMe() {
    console.log('* contact me');
  }
  private trailerMailMe() {}
  private trailerTweet() {}

}
