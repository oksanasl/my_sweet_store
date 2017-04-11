"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_products_1 = require("../models/mock-products");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(mock_products_1.PRODUCTS);
    };
    // ProductService might be accessing
    // data on a remote database, i.e., with an asynchronous connection,
    // so we should make this a promise. So we want to say,
    // "Run the ProductService getProducts() method, return the Products array,
    // and when you get the data execute a function that takes
    // the Products array as its parameter and set the value
    // for the local variable products to the Heroes array."
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts()
            .then(function (products) { return products.find(function (product) { return product.id === id; }); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
/**
 * Created by Окси on 10.03.2017.
 */
//# sourceMappingURL=product.service.js.map