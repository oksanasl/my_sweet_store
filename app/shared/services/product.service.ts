import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-products';

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.id === id));
    }

}


/**
 * Created by Окси on 10.03.2017.
 */
