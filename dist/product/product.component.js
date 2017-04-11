"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var product_service_1 = require("../shared/services/product.service");
var product_1 = require("../shared/models/product");
var ProductComponent = (function () {
    function ProductComponent(productService, route, location, router) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    // ngOnInit(): void {
    //     this.route.params
    //         .switchMap((params: Params) => this.productService.getProduct(+params['id']))
    //         .subscribe(product => this.product = product);
    // }
    // ngOnInit(){
    //     //grab the current product
    //     let id = this.route.snapshot.params['id'];
    //
    //     this.productService.getProduct(+['id']).then(product => this.product = product);
    // }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.productService.getProduct(+['id']).then(function (product) { return _this.product = product; });
    };
    ProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProductComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductComponent.prototype, "product", void 0);
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './app/product/product.component.html',
        styleUrls: ['./app/product/product.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
/**
 * Created by Окси on 08.03.2017.
 */
//# sourceMappingURL=product.component.js.map