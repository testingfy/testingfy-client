import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { RoutingProviders, Routing } from './routes/routes';

import { MainFrameComponent } from './components/main.frame.component';
import { SearchTextboxComponent } from './components/search-textbox.component';
import { LandingComponent } from './components/landing.component';
import { CarouselComponent } from './components/carousel.component';
import { FeaturedWeeklyComponent } from './components/featured.week.component';
import { ItemComponent } from './components/item.component';
import { SlideCarouselComponent } from './components/slide.carousel.component';



//import { LabPlaygroundComponent } from './components/lab.playground.component';
//import { LabHelpComponent } from './components/lab.help.component';
//import { LabStep1ResourceComponent } from './components/lab.step.1.resource.component';

//import { AnimeWizardService } from './services/anime.wizard.service';
import { ElasticSearchService } from './services/es.service';
import { CarouselService } from './services/carousel.service';
import { NavigationService } from './services/navigation.service';

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
    SearchTextboxComponent,
    LandingComponent,
    CarouselComponent,
    FeaturedWeeklyComponent,
    ItemComponent,
    SlideCarouselComponent
  ],
  providers: [
    RoutingProviders,
    ElasticSearchService,
    CarouselService,
    NavigationService
  ],
  bootstrap: [ MainFrameComponent ]
})
export class MainModule {

}
