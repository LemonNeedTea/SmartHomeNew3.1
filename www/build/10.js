webpackJsonp([10],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellpumpqueryPageModule", function() { return WellpumpqueryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wellpumpquery__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WellpumpqueryPageModule = (function () {
    function WellpumpqueryPageModule() {
    }
    WellpumpqueryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wellpumpquery__["a" /* WellpumpqueryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wellpumpquery__["a" /* WellpumpqueryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WellpumpqueryPageModule);
    return WellpumpqueryPageModule;
}());

//# sourceMappingURL=wellpumpquery.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellpumpqueryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LinechartPage } from '../linechart/linechart';

// import { MessageHistoryPage } from '../message-history/message-history';
/**
 * Generated class for the WellpumpqueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WellpumpqueryPage = (function () {
    function WellpumpqueryPage(navCtrl, navParams, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        var nowDate = this.tools.getNowDateStr(__WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["b" /* EnumDateType */].Day);
        this.startDate = nowDate;
        this.stopDate = nowDate;
        this.name = this.navParams.get('name');
        this.type = this.navParams.get('type');
        this.data = this.navParams.get('data');
    }
    WellpumpqueryPage.prototype.ionViewDidLoad = function () {
    };
    WellpumpqueryPage.prototype.goLineChartPage = function () {
        if (this.type == __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["a" /* EnumChartType */].Message) {
            this.navCtrl.push('MessageHistoryPage', { StartDate: this.startDate, StopDate: this.stopDate, data: this.data });
        }
        else {
            this.navCtrl.push('LinechartPage', { StartDate: this.startDate, StopDate: this.stopDate, type: this.type });
        }
    };
    WellpumpqueryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wellpumpquery',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/wellpumpquery/wellpumpquery.html"*/'<!--\n  Generated template for the WellpumpqueryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <my-title [name]="name"></my-title>\n\n\n  <ion-item>\n    <ion-label>开始日期</ion-label>\n    <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDate" cancelText=\'取消\'\n      doneText=\'确定\'></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>结束日期</ion-label>\n    <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD" [(ngModel)]="stopDate" cancelText=\'取消\'\n      doneText=\'确定\'></ion-datetime>\n  </ion-item>\n  <div padding>\n    <button ion-button round block (click)="goLineChartPage()">查询</button>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/wellpumpquery/wellpumpquery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */]])
    ], WellpumpqueryPage);
    return WellpumpqueryPage;
}());

//# sourceMappingURL=wellpumpquery.js.map

/***/ })

});
//# sourceMappingURL=10.js.map