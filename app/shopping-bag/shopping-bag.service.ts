import { Product } from "../shared/models/product";

export class ShoppingBagService {
    private product: Product[];
    public shoppingbag = [];

    constructor() {}

    getItems() {
        return this.product;

        // to display on the shopping list
    }

    addItems(product) {
        this.product = product;
        this.shoppingbag.push(product);
        alert(product.name + ' was added to shopping bag');
    }


    // addItems(product: Product[]) {
    //     Array.prototype.push.apply(this.product, product);
    // }
        // to add multiple items to an array
        // takes an array of ingredients and adds it to the list
        // apply this push method available on each array object
        // to all the items (this.items)
        // ( , items) pass to the addItems method & push them individually
        // on this.items property of the shopping list
    //

}


/**
 * Created by Окси on 21.04.2017.
 */
