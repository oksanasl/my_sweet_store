import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomComponent } from './custom/custom.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        CustomComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}



/**
 * Created by Окси on 10.02.2017.
 */
