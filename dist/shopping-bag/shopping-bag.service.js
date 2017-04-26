"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingBagService = (function () {
    function ShoppingBagService() {
        this.shoppingbag = [];
    }
    ShoppingBagService.prototype.getItems = function () {
        return this.product;
        // to display on the shopping list
    };
    ShoppingBagService.prototype.addItems = function (product) {
        this.product = product;
        this.shoppingbag.push(product);
        alert(product.name + ' was added to shopping bag');
    };
    return ShoppingBagService;
}());
exports.ShoppingBagService = ShoppingBagService;
/**
 * Created by Окси on 21.04.2017.
 */
//# sourceMappingURL=shopping-bag.service.js.map