import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product';


@Component({
    selector: 'product-detail',
    templateUrl: './app/product/product.component.html',
    styleUrls: ['./app/product/product.component.css']
})


export class ProductComponent {
    @Input()
    product: Product;
}

/**
 * Created by Окси on 08.03.2017.
 */
