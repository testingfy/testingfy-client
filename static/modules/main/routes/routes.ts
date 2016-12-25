import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './../components/landing.component';
import { ItemComponent } from './../components/item.component';

/**
 *  declare the route(s) for the router
 */
const appRoutes: Routes = [
  /* default path */
  { path: '', component: LandingComponent },
  { path: 'item/:id', component: ItemComponent },
  {
    path: 'generic',
    component: LandingComponent
    /*
     *  defind sub routes (children routes)
     */
    /*,children: [
      { path: '', component: LabHelpComponent },
      { path: 'labStep1', component: LabStep1ResourceComponent }
    ]*/
  }
  /*
  { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
  */
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
