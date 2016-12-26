"use strict";
var router_1 = require("@angular/router");
var landing_component_1 = require("./../components/landing.component");
/**
 *  declare the route(s) for the router
 */
var appRoutes = [
    /* default path */
    { path: '', component: landing_component_1.LandingComponent }
];
exports.RoutingProviders = [];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.js.map