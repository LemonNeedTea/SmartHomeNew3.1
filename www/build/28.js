webpackJsonp([28],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiftSettingPageModule", function() { return LiftSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lift_setting__ = __webpack_require__(887);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LiftSettingPageModule = (function () {
    function LiftSettingPageModule() {
    }
    LiftSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lift_setting__["a" /* LiftSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lift_setting__["a" /* LiftSettingPage */]),
            ],
        })
    ], LiftSettingPageModule);
    return LiftSettingPageModule;
}());

//# sourceMappingURL=lift-setting.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiftSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LiftSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiftSettingPage = (function () {
    function LiftSettingPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        /**start**/
        this.eventsFnAutoHandler = function (data) {
            _this.auto = data;
        };
        this.eventsFn51Handler = function (data) {
            _this.getDeviceState(data);
        };
        this.eventsFn50Handler = function (data) {
            _this.f50Data = data;
        };
        this.id = this.navParams.get("id");
        this.name = this.navParams.get("name");
        var fn51Data = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('51');
        this.getDeviceState(fn51Data);
        this.events.subscribe("FnData:51", this.eventsFn51Handler);
        this.f50Data = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('50');
        this.events.subscribe("FnData:50", this.eventsFn50Handler);
        this.auto = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].isAuto;
        this.events.subscribe("FnData:isAuto", this.eventsFnAutoHandler);
    }
    LiftSettingPage.prototype.ionViewDidLoad = function () {
    };
    LiftSettingPage.prototype.getDeviceState = function (data) {
        if (data) {
            this.state = data[this.id];
        }
    };
    LiftSettingPage.prototype.setDeviceState = function (state) {
        __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(this.id, this.name, state);
    };
    LiftSettingPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("FnData:50", this.eventsFn50Handler);
        this.events.unsubscribe("FnData:51", this.eventsFn51Handler);
        this.events.unsubscribe("FnData:isAuto", this.eventsFnAutoHandler);
    };
    LiftSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lift-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/lift-setting/lift-setting.html"*/'<!--\n  Generated template for the LiftSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label> <span *ngIf="!state">已关闭</span>\n        <div ion-text color=\'primary\' *ngIf="state">已打开\n          <div float-right>{{f50Data.F507}}kW</div>\n        </div>\n      </ion-label>\n      <ion-toggle [(ngModel)]="state" (ngModelChange)="setDeviceState(state)" [disabled]="auto"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n  <div text-center>\n    <img src="../../../assets/img//icons//left-setting.png" style="width: 100%;" />\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/lift-setting/lift-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], LiftSettingPage);
    return LiftSettingPage;
}());

//# sourceMappingURL=lift-setting.js.map

/***/ })

});
//# sourceMappingURL=28.js.map