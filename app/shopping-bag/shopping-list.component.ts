import { Component, OnInit } from '@angular/core';

import { Product } from "../shared/models/product";
import { ShoppingBagService } from '../shared/services/shopping-bag.service';

@Component({
    selector: 'shopping-list',
    templateUrl: 'app/shopping-bag/shopping-list.component.html',
    styleUrls: ['app/shopping-bag/shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    item: Product[];

    constructor(private shoppingBagService: ShoppingBagService) {}

    ngOnInit() {
        this.item = this.shoppingBagService.getItems();
    }

}

/**
 * Created by Окси on 20.04.2017.
 */
