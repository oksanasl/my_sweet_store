import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product';


@Component({
    selector: 'product-detail',
    templateUrl: './app/product/product.component.html',
    styleUrls: ['./app/product/product.component.css']
})


export class ProductComponent implements OnInit{
    @Input() product: Product;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.productService.getProduct(+params['id']))
            .subscribe(product => this.product = product);
    }

    goBack(): void {
        this.location.back();
    }
}





/**
 * Created by Окси on 08.03.2017.
 */
