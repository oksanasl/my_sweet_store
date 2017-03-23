import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomComponent } from './custom/custom.component';
import { ProductService } from "./shared/services/product.service";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // CommonModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        CustomComponent
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}



/**
 * Created by Окси on 10.02.2017.
 */
