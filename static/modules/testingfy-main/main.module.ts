import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';


import { MainFrameComponent } from './components/main.frame.component';

/*
 *  annotation (no need to have ";")
 */
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  /*
   *  declare what would be used (sort of let the compiler to
   *  reference the valid tags and components)
   */
  declarations: [
    MainFrameComponent
/*    
    SearchTextboxComponent,
    LandingComponent,
    CarouselComponent,
    FeaturedWeeklyComponent,
    ItemComponent,
    SlideCarouselComponent
*/  
  ],
  bootstrap: [ MainFrameComponent ]
})
export class MainModule {

}
