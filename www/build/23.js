webpackJsonp([23],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValveEastpoolSettingPageModule", function() { return ValveEastpoolSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valve_eastpool_setting__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValveEastpoolSettingPageModule = (function () {
    function ValveEastpoolSettingPageModule() {
    }
    ValveEastpoolSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__valve_eastpool_setting__["a" /* ValveEastpoolSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__valve_eastpool_setting__["a" /* ValveEastpoolSettingPage */]),
            ],
        })
    ], ValveEastpoolSettingPageModule);
    return ValveEastpoolSettingPageModule;
}());

//# sourceMappingURL=valve-eastpool-setting.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValveEastpoolSettingPage; });
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


// import { PumpNorthcourtTimerPage } from '../../timer/pump-northcourt-timer/pump-northcourt-timer';

/**
 * Generated class for the ValveEastpoolSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValveEastpoolSettingPage = (function () {
    function ValveEastpoolSettingPage(navCtrl, navParams, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    ValveEastpoolSettingPage.prototype.ionViewDidLoad = function () {
    };
    ValveEastpoolSettingPage.prototype.presentShowModal = function () {
        var profileModal = this.modalCtrl.create('ValveEastpoolTimerPage');
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    ValveEastpoolSettingPage.prototype.getDeviceState = function (data) {
        if (data) {
            this.state = data[this.id];
        }
    };
    ValveEastpoolSettingPage.prototype.setDeviceState = function (state) {
        __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(this.id, this.name, state);
    };
    ValveEastpoolSettingPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("FnData:51", this.eventsFn51Handler);
        this.events.unsubscribe("FnData:isAuto", this.eventsFnAutoHandler);
    };
    ValveEastpoolSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-valve-eastpool-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/valve-eastpool-setting/valve-eastpool-setting.html"*/' <!--\n  Generated template for the PumpNorthcourtSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentShowModal()">\n        <ion-icon name="alarm"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label> <span *ngIf="!state">已关闭</span>\n        <div ion-text color=\'primary\' *ngIf="state">已打开\n          <!-- <div float-right>0.003kW</div> -->\n        </div>\n      </ion-label>\n      <ion-toggle [(ngModel)]="state" (ngModelChange)="setDeviceState(state)" [disabled]="auto"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n  <div text-center>\n    <img src="../../../assets/img/icons/pump-setting.png" style="width: 100%;" />\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device-setting/valve-eastpool-setting/valve-eastpool-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ValveEastpoolSettingPage);
    return ValveEastpoolSettingPage;
}());

//# sourceMappingURL=valve-eastpool-setting.js.map

/***/ })

});
//# sourceMappingURL=23.js.map