import { Component } from '@angular/core';

@Component({
  selector: 'common-header',
  templateUrl: './static/modules/testingfy-main/components/views/common-header-component.html'
})
export class CommonHeaderComponent {

  private headerMenuClick(menuId) {
    // TODO: navigate to another webpage
    console.log(menuId);
  }

  private signIn(event) {
    // TODO: navigate to user login page or show the relative login panel
    console.log(event);
  }
}
