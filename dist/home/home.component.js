"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var PRODUCTS = [
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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Our products';
        this.products = PRODUCTS;
    }
    HomeComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        templateUrl: './app/home/home.component.html',
        styleUrls: ['./app/home/home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
/**
 * Created by Окси on 09.03.2017.
 */
//# sourceMappingURL=home.component.js.map