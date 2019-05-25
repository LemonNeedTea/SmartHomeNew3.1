webpackJsonp([7],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeLightJwTimerPageModule", function() { return ModeLightJwTimerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mode_light_jw_timer__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModeLightJwTimerPageModule = (function () {
    function ModeLightJwTimerPageModule() {
    }
    ModeLightJwTimerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mode_light_jw_timer__["a" /* ModeLightJwTimerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mode_light_jw_timer__["a" /* ModeLightJwTimerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ModeLightJwTimerPageModule);
    return ModeLightJwTimerPageModule;
}());

//# sourceMappingURL=mode-light-jw-timer.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WellPumpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EastCourtValveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NorthCourtPumpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EastPoolValveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NorthPoolValveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EastnorthpoolValveParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurtainModeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LightModeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SeasonModeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LighJWModeParams; });
/**
 * 井水泵定时参数
 */
var WellPumpParams = (function () {
    function WellPumpParams() {
        this.code = 2;
    }
    return WellPumpParams;
}());

/**
 * 南园浇花阀
 */
var EastCourtValveParams = (function () {
    function EastCourtValveParams() {
        this.code = 8;
    }
    return EastCourtValveParams;
}());

/**
 * 北园喷灌泵
 */
var NorthCourtPumpParams = (function () {
    function NorthCourtPumpParams() {
        this.code = 7;
    }
    return NorthCourtPumpParams;
}());

/**
 * 南水池补水阀
 */
var EastPoolValveParams = (function () {
    function EastPoolValveParams() {
        this.code = 11;
    }
    return EastPoolValveParams;
}());

/**
 * 北水池补水阀
 */
var NorthPoolValveParams = (function () {
    function NorthPoolValveParams() {
        this.code = 10;
    }
    return NorthPoolValveParams;
}());

/**
 * 北院喷灌补水阀
 */
var EastnorthpoolValveParams = (function () {
    function EastnorthpoolValveParams() {
        this.code = 12;
    }
    return EastnorthpoolValveParams;
}());

var CurtainModeParams = (function () {
    function CurtainModeParams() {
        this.code = 6;
    }
    return CurtainModeParams;
}());

var LightModeParams = (function () {
    function LightModeParams() {
        this.code = 5;
    }
    return LightModeParams;
}());

var SeasonModeParams = (function () {
    function SeasonModeParams() {
        this.code = 4;
    }
    return SeasonModeParams;
}());

var LighJWModeParams = (function () {
    function LighJWModeParams() {
        this.code = 9;
    }
    return LighJWModeParams;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeLightJwTimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_model_model__ = __webpack_require__(885);
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
 * Generated class for the ModeLightJwTimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModeLightJwTimerPage = (function () {
    function ModeLightJwTimerPage(navCtrl, navParams, viewCtrl, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tools = tools;
        this.getData();
    }
    ModeLightJwTimerPage.prototype.ionViewDidLoad = function () {
    };
    ModeLightJwTimerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModeLightJwTimerPage.prototype.complate = function () {
        var params = this.getParams();
        if (this.checkParam()) {
            __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setTimer(params);
            this.dismiss();
        }
    };
    ModeLightJwTimerPage.prototype.getParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_4__providers_model_model__["e" /* LighJWModeParams */](); //注意组装顺序
        params.timerOpen = Number(this.timerOpen);
        params.runtime = Number(this.runtime);
        params.runtime1 = Number(this.runtime1);
        return params;
    };
    ModeLightJwTimerPage.prototype.checkParam = function () {
        return true;
    };
    ModeLightJwTimerPage.prototype.getData = function () {
        var fnData = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('55');
        this.timerOpen = Number(fnData.F5578);
        this.runtime = fnData.F5579;
        this.runtime1 = fnData.F5580;
    };
    ModeLightJwTimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode-light-jw-timer',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/mode-light-jw-timer/mode-light-jw-timer.html"*/'<!--\n  Generated template for the ModeLightJwTimerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>室外灯经纬度设置</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="complate()">\n        <ion-icon ios="md-checkmark" md="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="setting-page">\n  <ion-list>\n    <ion-item>\n      <ion-label>定时开启</ion-label>\n      <ion-toggle [(ngModel)]="timerOpen"></ion-toggle>\n    </ion-item>\n\n    <my-runtime [(myModel)]="runtime" name=\'延时关闭\'></my-runtime>\n    <my-runtime [(myModel)]="runtime1" name=\'偏移时间\'></my-runtime>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/mode-light-jw-timer/mode-light-jw-timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */]])
    ], ModeLightJwTimerPage);
    return ModeLightJwTimerPage;
}());

//# sourceMappingURL=mode-light-jw-timer.js.map

/***/ })

});
//# sourceMappingURL=7.js.map