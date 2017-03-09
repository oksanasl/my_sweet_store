import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomComponent } from './custom/custom.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'custom', component: CustomComponent },

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/**
 * Created by Окси on 09.03.2017.
 */
