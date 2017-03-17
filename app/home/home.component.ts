import {Component, OnInit} from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';


@Component({
    selector: 'home-page',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})


export class HomeComponent implements OnInit{
    title: string = 'Our products';
    products: Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService) { }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}


/**
 * Created by Окси on 09.03.2017.
 */
