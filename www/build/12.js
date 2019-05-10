webpackJsonp([12],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpEastnorthpoolTimerPageModule", function() { return PumpEastnorthpoolTimerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pump_eastnorthpool_timer__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PumpEastnorthpoolTimerPageModule = (function () {
    function PumpEastnorthpoolTimerPageModule() {
    }
    PumpEastnorthpoolTimerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pump_eastnorthpool_timer__["a" /* PumpEastnorthpoolTimerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pump_eastnorthpool_timer__["a" /* PumpEastnorthpoolTimerPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PumpEastnorthpoolTimerPageModule);
    return PumpEastnorthpoolTimerPageModule;
}());

//# sourceMappingURL=pump-eastnorthpool-timer.module.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PumpEastnorthpoolTimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { EastnorthpoolPumpParams } from '../../../providers/model/model';
/**
 * Generated class for the PumpEastnorthpoolTimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PumpEastnorthpoolTimerPage = (function () {
    function PumpEastnorthpoolTimerPage(navCtrl, navParams, viewCtrl, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tools = tools;
        this.getData();
    }
    PumpEastnorthpoolTimerPage.prototype.ionViewDidLoad = function () {
    };
    PumpEastnorthpoolTimerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PumpEastnorthpoolTimerPage.prototype.complate = function () {
        var params = this.getParams();
        __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setTimer(params);
        this.dismiss();
    };
    PumpEastnorthpoolTimerPage.prototype.getParams = function () {
        // let params = new EastnorthpoolPumpParams();//注意组装顺序
        // params.loop = this.loop;
        // params.timerOpen = Number(this.timerOpen);
        // params.starDate = this.startDate;
        // params.runtime = this.runtime;
        // return params;
    };
    PumpEastnorthpoolTimerPage.prototype.checkParam = function () {
        return true;
    };
    PumpEastnorthpoolTimerPage.prototype.getData = function () {
        var fnData = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('55');
        this.loop = this.tools.getArrayByFnData(fnData, '55', 81, 7);
        this.timerOpen = Number(fnData.F5588);
        this.startDate = [fnData.F5589, fnData.F5590];
        this.runtime = fnData.F5591;
    };
    PumpEastnorthpoolTimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pump-eastnorthpool-timer',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/pump-eastnorthpool-timer/pump-eastnorthpool-timer.html"*/'<!--\n  Generated template for the PumpEastnorthpoolTimerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>定时</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="complate()">\n        <ion-icon ios="md-checkmark" md="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="setting-page">\n  <ion-list>\n    <ion-item>\n      <ion-label>定时开启</ion-label>\n      <ion-toggle [(ngModel)]="timerOpen"></ion-toggle>\n    </ion-item>\n    <my-time name=\'开启时间\' [(myModel)]="startDate"></my-time>\n    <my-loop [(myModel)]="loop"></my-loop>\n    <my-runtime [(myModel)]="runtime"></my-runtime>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/pump-eastnorthpool-timer/pump-eastnorthpool-timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */]])
    ], PumpEastnorthpoolTimerPage);
    return PumpEastnorthpoolTimerPage;
}());

//# sourceMappingURL=pump-eastnorthpool-timer.js.map

/***/ })

});
//# sourceMappingURL=12.js.map