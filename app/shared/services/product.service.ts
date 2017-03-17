import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-products';

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}


/**
 * Created by Окси on 10.03.2017.
 */
