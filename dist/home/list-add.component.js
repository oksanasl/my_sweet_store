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
var core_1 = require("@angular/core");
var ListAddComponent = (function () {
    function ListAddComponent() {
    }
    ListAddComponent.prototype.ngOnInit = function () {
    };
    return ListAddComponent;
}());
ListAddComponent = __decorate([
    core_1.Component({
        selector: 'list-add',
        templateUrl: '../../app/shopping-bag/list-add.component.html',
        styleUrls: ['../../app/shopping-bag/list-add.component.css']
    }),
    __metadata("design:paramtypes", [])
], ListAddComponent);
exports.ListAddComponent = ListAddComponent;
/**
 * Created by Окси on 19.04.2017.
 */
//# sourceMappingURL=list-add.component.js.map