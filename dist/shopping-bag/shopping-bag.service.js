"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingBagService = (function () {
    function ShoppingBagService() {
    }
    ShoppingBagService.prototype.getItems = function () {
        return this.product;
        // to display on the shopping list
    };
    ShoppingBagService.prototype.addItems = function (product) {
        Array.prototype.push.apply(this.product, product);
        // to add multiple items to an array
        // takes an array of ingredients and adds it to the list
        // apply this push method available on each array object
        // to all the items (this.items)
        // ( , items) pass to the addItems method & push them individually
        // on this.items property of the shopping list
    };
    return ShoppingBagService;
}());
exports.ShoppingBagService = ShoppingBagService;
/**
 * Created by Окси on 21.04.2017.
 */
//# sourceMappingURL=shopping-bag.service.js.map