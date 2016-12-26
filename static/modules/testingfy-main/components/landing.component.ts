import { Component } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './static/modules/testingfy-main/components/views/landing-component.html'
})
export class LandingComponent {

  private headerMenuClick(menuId) {
    // TODO: navigate to another webpage
    console.log(menuId);
  }

  private signIn(event) {
    // TODO: navigate to user login page or show the relative login panel
    console.log(event);
  }
}
