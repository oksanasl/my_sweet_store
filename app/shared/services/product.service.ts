import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { PRODUCTS } from '../models/mock-products';

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    // ProductService might be accessing
    // data on a remote database, i.e., with an asynchronous connection,
    // so we should make this a promise. So we want to say,
    // "Run the ProductService getProducts() method, return the Products array,
    // and when you get the data execute a function that takes
    // the Products array as its parameter and set the value
    // for the local variable products to the Heroes array."

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.id === id));
    }

}


/**
 * Created by Окси on 10.03.2017.
 */
