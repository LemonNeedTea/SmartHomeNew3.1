webpackJsonp([21],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyQueryPageModule", function() { return EnergyQueryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__energy_query__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnergyQueryPageModule = (function () {
    function EnergyQueryPageModule() {
    }
    EnergyQueryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__energy_query__["a" /* EnergyQueryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__energy_query__["a" /* EnergyQueryPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], EnergyQueryPageModule);
    return EnergyQueryPageModule;
}());

//# sourceMappingURL=energy-query.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergyQueryPage; });
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



// import { BarchartPage } from '../barchart/barchart';

/**
 * Generated class for the EnergyQueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnergyQueryPage = (function () {
    function EnergyQueryPage(navCtrl, navParams, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.name = this.navParams.get('name');
        this.type = this.navParams.get('type');
        this.dateType = __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["b" /* EnumDateType */].Day;
        this.dateTypeChange();
    }
    EnergyQueryPage.prototype.ionViewDidLoad = function () {
    };
    EnergyQueryPage.prototype.dateTypeChange = function () {
        var now = this.tools.getNowDateStr(this.dateType);
        this.startDate = this.stopDate = now;
        switch (this.dateType) {
            case __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["b" /* EnumDateType */].Year: {
                this.displayFormat = 'YYYY';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["b" /* EnumDateType */].Month: {
                this.displayFormat = 'YYYY-MM';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__providers_model_enumdata__["b" /* EnumDateType */].Day: {
                this.displayFormat = 'YYYY-MM-DD';
                break;
            }
        }
    };
    EnergyQueryPage.prototype.goBarChartPage = function (data) {
        var params;
        if (data) {
            params = data;
        }
        else {
            params = {
                StartTime: this.startDate,
                StopTime: this.stopDate,
                DateType: this.dateType,
            };
        }
        params.Type = this.type;
        this.navCtrl.push('BarchartPage', { params: params });
    };
    EnergyQueryPage.prototype.timeRange = function (type) {
        var data;
        switch (type) {
            case 'yearall': {
                data = this.tools.getYearAllRange();
                break;
            }
            case 'year': {
                data = this.tools.getYearRange();
                break;
            }
            case 'month': {
                data = this.tools.getMonthRange();
                break;
            }
        }
        this.goBarChartPage(data);
    };
    EnergyQueryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-energy-query',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/energy-query/energy-query.html"*/'<!--\n  Generated template for the EnergyQueryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <my-title [name]="name"></my-title>\n\n      <ion-item >\n          <ion-label>时间段</ion-label>\n          <!-- <ion-grid item-end>  -->\n            <ion-row item-end>\n              <ion-col >\n              <button ion-button outline  (click)="timeRange(\'yearall\')">历 年</button>\n              </ion-col>\n              <ion-col >\n                  <button ion-button outline (click)="timeRange(\'year\')" >本 年</button>\n                  </ion-col>\n                  <ion-col >\n                      <button ion-button outline (click)="timeRange(\'month\')" >本 月</button>\n                      </ion-col>\n            </ion-row>\n          <!-- </ion-grid> -->\n          \n      </ion-item>\n      <ion-item >\n          <ion-label>数据类型</ion-label>\n          <ion-select [(ngModel)]="dateType" (ionChange)="dateTypeChange()" cancelText=\'取消\' okText=\'确定\'>\n              <ion-option value="year">按年</ion-option>\n              <ion-option value="month">按月</ion-option>\n              <ion-option value="day">按日</ion-option>\n            </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>开始日期</ion-label>\n        <ion-datetime displayFormat="{{displayFormat}}"  [(ngModel)]="startDate" cancelText=\'取消\' doneText=\'确定\'></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>结束日期</ion-label>\n        <ion-datetime displayFormat="{{displayFormat}}"   [(ngModel)]="stopDate"  cancelText=\'取消\' doneText=\'确定\'></ion-datetime>\n      </ion-item>\n      <div padding>\n          <button ion-button round block (click)="goBarChartPage()" >查询</button>\n      </div>\n        \n      \n</ion-content>\n'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/energy-query/energy-query.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */]])
    ], EnergyQueryPage);
    return EnergyQueryPage;
}());

//# sourceMappingURL=energy-query.js.map

/***/ })

});
//# sourceMappingURL=21.js.map