webpackJsonp([18],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeDeviceSelectedSettingPageModule", function() { return ModeDeviceSelectedSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mode_device_selected_setting__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModeDeviceSelectedSettingPageModule = (function () {
    function ModeDeviceSelectedSettingPageModule() {
    }
    ModeDeviceSelectedSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mode_device_selected_setting__["a" /* ModeDeviceSelectedSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mode_device_selected_setting__["a" /* ModeDeviceSelectedSettingPage */]),
            ],
        })
    ], ModeDeviceSelectedSettingPageModule);
    return ModeDeviceSelectedSettingPageModule;
}());

//# sourceMappingURL=mode-device-selected-setting.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeDeviceSelectedSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ModeDeviceSelectedSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModeDeviceSelectedSettingPage = (function () {
    function ModeDeviceSelectedSettingPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataList = this.navParams.get("dataList");
    }
    ModeDeviceSelectedSettingPage.prototype.ionViewWillEnter = function () {
    };
    ModeDeviceSelectedSettingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModeDeviceSelectedSettingPage.prototype.complate = function () {
        this.viewCtrl.dismiss(this.dataList);
    };
    ModeDeviceSelectedSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode-device-selected-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-device-selected-setting/mode-device-selected-setting.html"*/'<!--\n  Generated template for the ModeDeviceSelectedSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>设备选择</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="complate()">\n        <ion-icon ios="md-checkmark" md="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="device-list">\n    <ion-item-group *ngFor="let item of dataList">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{item.name}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let device of item.data">\n        <ion-item>\n\n          <ion-label>\n            <div item-start class="start" [ngClass]="device.DeviceColor">\n              <img src=\'../assets/img/home/icon-devicesetting/{{device.Img}}\'></div>\n            <div class="label">\n              <div>\n                {{device.DeviceName}}\n                <p><span>{{device.FloorName+\'/\'+device.RoomName}}</span></p>\n              </div>\n            </div>\n\n          </ion-label>\n          <ion-checkbox [(ngModel)]="device.Control"></ion-checkbox>\n        </ion-item>\n      </ion-item-sliding>\n\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-device-selected-setting/mode-device-selected-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], ModeDeviceSelectedSettingPage);
    return ModeDeviceSelectedSettingPage;
}());

//# sourceMappingURL=mode-device-selected-setting.js.map

/***/ })

});
//# sourceMappingURL=18.js.map