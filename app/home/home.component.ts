import { Component } from '@angular/core';

export class Product {
    id: number;
    name: string;
}

const PRODUCTS: Product[] = [
    { id: 1, name: 'Avocado' },
    { id: 2, name: 'Pineapple' },
    { id: 3, name: 'Pear' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Coconut' },
    { id: 6, name: 'Pomegranate' },
    { id: 7, name: 'Fig' },
    { id: 8, name: 'Kiwi' },
    { id: 9, name: 'Persimmon' }
];

@Component({
    selector: 'home-page',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})


export class HomeComponent {
    title: string = 'Our products';
    products = PRODUCTS;
}


/**
 * Created by Окси on 09.03.2017.
 */
