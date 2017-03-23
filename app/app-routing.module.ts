import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomComponent } from './custom/custom.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'custom', component: CustomComponent }
];

// @NgModule({
//     imports: [ RouterModule.forRoot(appRoutes) ],
//     exports: [ RouterModule ]
// })

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/**
 * Created by Окси on 09.03.2017.
 */
