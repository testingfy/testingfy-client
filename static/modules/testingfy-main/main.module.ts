/*
 *  Module => the "main" program; therefore all setups and configs are
 *    defined here
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { RoutingProviders, Routing } from './routes/routes';

import { MainFrameComponent } from './components/main.frame.component';
import { CommonHeaderComponent } from './components/common.header.component';
import { CommonTrailerComponent } from './components/common.trailer.component';
import { LandingComponent } from './components/landing.component';
import { LandingApproachComponent } from './components/landing.approach.component';

import { DimensionService } from './services/dimension.service';

/*
 *  annotation (no need to have ";")
 */
@NgModule({
  imports: [ BrowserModule, FormsModule, Routing ],
  /*
   *  declare what would be used (sort of let the compiler to
   *  reference the valid tags and components)
   */
  declarations: [
    MainFrameComponent,
    CommonHeaderComponent,
    CommonTrailerComponent,
    LandingComponent,
    LandingApproachComponent
/*
    SearchTextboxComponent,
    LandingComponent,
    CarouselComponent,
    FeaturedWeeklyComponent,
    ItemComponent,
    SlideCarouselComponent
*/
  ],
  providers: [
    RoutingProviders,
    DimensionService
  ],
  bootstrap: [ MainFrameComponent ]
})
export class MainModule {

}
