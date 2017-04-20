import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product";

@Component({
    selector: 'list-loop',
    templateUrl: 'app/shopping-bag/list-loop.component.html',
    styleUrls: ['app/shopping-bag/list-loop.component.css']
})
export class ListLoopComponent implements OnInit {
    products: Product[];

    constructor() {}

    ngOnInit() {
    }

}

/**
 * Created by Окси on 20.04.2017.
 */
