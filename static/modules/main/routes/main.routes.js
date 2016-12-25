"use strict";
var router_1 = require('@angular/router');
var landing_page_component_1 = require('./../components/landing.page.component');
var lab_playground_component_1 = require('./../components/lab.playground.component');
var lab_help_component_1 = require('./../components/lab.help.component');
var lab_step_1_resource_component_1 = require('./../components/lab.step.1.resource.component');
/**
 *  declare the route(s) for the router
 */
var appRoutes = [
    /* default path */
    { path: '', component: landing_page_component_1.LandingPageComponent },
    {
        path: 'lab',
        component: lab_playground_component_1.LabPlaygroundComponent,
        /*
         *  defind sub routes (children routes)
         */
        children: [
            { path: '', component: lab_help_component_1.LabHelpComponent },
            { path: 'labStep1', component: lab_step_1_resource_component_1.LabStep1ResourceComponent }
        ]
    }
];
exports.CAnimeRoutingProviders = [];
exports.CAnimeRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=main.routes.js.map