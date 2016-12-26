import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './../components/landing.component';

/**
 *  declare the route(s) for the router
 */
const appRoutes: Routes = [
  /* default path */
  { path: '', component: LandingComponent }
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
