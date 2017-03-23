"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var product_component_1 = require("./product/product.component");
var custom_component_1 = require("./custom/custom.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'product/:id', component: product_component_1.ProductComponent },
    { path: 'custom', component: custom_component_1.CustomComponent }
];
// @NgModule({
//     imports: [ RouterModule.forRoot(appRoutes) ],
//     exports: [ RouterModule ]
// })
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
/**
 * Created by Окси on 09.03.2017.
 */
//# sourceMappingURL=app-routing.module.js.map