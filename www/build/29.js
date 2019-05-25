webpackJsonp([29],{

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorSettingPageModule", function() { return DoorSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__door_setting__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DoorSettingPageModule = (function () {
    function DoorSettingPageModule() {
    }
    DoorSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__door_setting__["a" /* DoorSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__door_setting__["a" /* DoorSettingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], DoorSettingPageModule);
    return DoorSettingPageModule;
}());

//# sourceMappingURL=door-setting.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(43);
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
 * Generated class for the DoorSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoorSettingPage = (function () {
    function DoorSettingPage(navCtrl, navParams, events) {
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
        this.id = this.navParams.get("id");
        this.name = this.navParams.get("name");
        var fn51Data = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('51');
        this.getDeviceState(fn51Data);
        this.events.subscribe("FnData:51", this.eventsFn51Handler);
        this.auto = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].isAuto;
        this.events.subscribe("FnData:isAuto", this.eventsFnAutoHandler);
    }
    DoorSettingPage.prototype.ionViewDidLoad = function () {
    };
    DoorSettingPage.prototype.getDeviceState = function (data) {
        if (data) {
            this.state = data[this.id];
        }
    };
    DoorSettingPage.prototype.setDeviceState = function (state) {
        this.state = state;
        __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(this.id, this.name, state);
    };
    DoorSettingPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("FnData:51", this.eventsFn51Handler);
        this.events.unsubscribe("FnData:isAuto", this.eventsFnAutoHandler);
    };
    DoorSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-door-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/door-setting/door-setting.html"*/'<!--\n  Generated template for the DoorSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <my-title name="状态"></my-title>\n  <div class="curtain-img" padding>\n    <div>\n      <img src="../../../assets//img//home//icon-devicesetting//curtain-pic.png" float-left>\n    </div>\n  </div>\n  <ion-grid margin-top>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button outline [ngClass]="{\'selected\': state==1}" (click)="setDeviceState(1)" [disabled]="auto">打开</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button outline [ngClass]="{\'selected\': state==2}" (click)="setDeviceState(2)" [disabled]="auto">停止</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button outline [ngClass]="{\'selected\': state==0}" (click)="setDeviceState(0)" [disabled]="auto">关闭</button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/door-setting/door-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], DoorSettingPage);
    return DoorSettingPage;
}());

//# sourceMappingURL=door-setting.js.map

/***/ })

});
//# sourceMappingURL=29.js.map