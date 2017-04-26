import { Component, OnInit } from '@angular/core';

import { ListAddComponent } from 'app/shopping-bag/list-add.component';
import { Product } from "../shared/models/product";
import { ShoppingBagService } from './shopping-bag.service';

@Component({
    selector: 'list-loop',
    templateUrl: 'app/shopping-bag/list-loop.component.html',
    styleUrls: ['app/shopping-bag/list-loop.component.css']
})
export class ListLoopComponent implements OnInit {
    products: Product[] = [];

    constructor(private shoppingBagService: ShoppingBagService) {}

    ngOnInit() {
        this.products = this.shoppingBagService.getItems();
    }

}

/**
 * Created by Окси on 20.04.2017.
 */
