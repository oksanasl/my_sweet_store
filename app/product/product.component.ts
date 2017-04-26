import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product';
import { ShoppingBagService } from "../shopping-bag/shopping-bag.service";


@Component({
    selector: 'product-detail',
    templateUrl: './app/product/product.component.html',
    styleUrls: ['./app/product/product.component.css']
})


export class ProductComponent implements OnInit{
    @Input() product: Product;
    // recentProduct: Product = product;

    constructor(
        private productService: ProductService,
        private shoppingBagService: ShoppingBagService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
             this.productService.getProduct(+params['id']))
            .subscribe(product => this.product = product);
    }

    goBack(): void {
        this.location.back();
    }

    onAddToShoppingBag(){
        this.shoppingBagService.addItems(this.product);
    }
}





/**
 * Created by Окси on 08.03.2017.
 */
