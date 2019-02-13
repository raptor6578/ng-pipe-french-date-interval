var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { DateIntervalPipe } from './date-interval.pipe';
var DateIntervalModule = /** @class */ (function () {
    function DateIntervalModule() {
    }
    DateIntervalModule = __decorate([
        NgModule({
            declarations: [DateIntervalPipe],
            imports: [
                CommonModule
            ],
            exports: [DateIntervalPipe]
        })
    ], DateIntervalModule);
    return DateIntervalModule;
}());
export { DateIntervalModule };
//# sourceMappingURL=date-interval.module.js.map