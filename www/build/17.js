webpackJsonp([17],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModePublicSettingPageModule", function() { return ModePublicSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mode_public_setting__ = __webpack_require__(900);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModePublicSettingPageModule = (function () {
    function ModePublicSettingPageModule() {
    }
    ModePublicSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mode_public_setting__["a" /* ModePublicSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mode_public_setting__["a" /* ModePublicSettingPage */]),
            ],
        })
    ], ModePublicSettingPageModule);
    return ModePublicSettingPageModule;
}());

//# sourceMappingURL=mode-public-setting.module.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModePublicSettingPage; });
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


// import { ModeAirseasonsonTimerPage } from '../timer/mode-airseasonson-timer/mode-airseasonson-timer';
// import { ModeCurtainTimerPage } from '../timer/mode-curtain-timer/mode-curtain-timer';
// import { ModeLightJwTimerPage } from '../timer/mode-light-jw-timer/mode-light-jw-timer';
// import { ModeLightTimerPage } from '../timer/mode-light-timer/mode-light-timer';
/**
 * Generated class for the ModePublicSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModePublicSettingPage = (function () {
    function ModePublicSettingPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ModePublicSettingPage.prototype.ionViewDidLoad = function () {
    };
    ModePublicSettingPage.prototype.goCurtain = function () {
        this.presentShowModal('ModeCurtainTimerPage');
    };
    ModePublicSettingPage.prototype.goLight = function () {
        this.presentShowModal('ModeLightTimerPage');
    };
    ModePublicSettingPage.prototype.goAirSeason = function () {
        this.presentShowModal('ModeAirseasonsonTimerPage');
    };
    ModePublicSettingPage.prototype.goLightJW = function () {
        this.presentShowModal('ModeLightJwTimerPage');
    };
    ModePublicSettingPage.prototype.presentShowModal = function (page) {
        var profileModal = this.modalCtrl.create(page);
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    ModePublicSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode-public-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-public-setting/mode-public-setting.html"*/'<!--\n  Generated template for the ModePublicSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>模式公共设置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="my-list">\n    <ion-item (click)="goCurtain()">\n      <div item-start class="start c1">\n        <img src=\'../../assets/home/timer.png\'>\n      </div>\n      窗帘定时\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="goLight()">\n      <div item-start class="start c1">\n        <img src=\'../../assets/home/timer.png\'>\n      </div>\n      客厅主灯/书房灯定时\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="goAirSeason()">\n      <div item-start class="start c2">\n        <img src=\'../../assets/home/season.png\'>\n      </div>\n      空调季节设置\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n    <ion-item (click)="goLightJW()">\n      <div item-start class="start c3">\n        <img src=\'../../assets/home/jw.png\'>\n      </div>\n      室外灯经纬度控设置\n      <ion-icon name="arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-public-setting/mode-public-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], ModePublicSettingPage);
    return ModePublicSettingPage;
}());

//# sourceMappingURL=mode-public-setting.js.map

/***/ })

});
//# sourceMappingURL=17.js.map