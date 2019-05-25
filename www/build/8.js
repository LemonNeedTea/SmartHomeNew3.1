webpackJsonp([8],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeCurtainTimerPageModule", function() { return ModeCurtainTimerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mode_curtain_timer__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModeCurtainTimerPageModule = (function () {
    function ModeCurtainTimerPageModule() {
    }
    ModeCurtainTimerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mode_curtain_timer__["a" /* ModeCurtainTimerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mode_curtain_timer__["a" /* ModeCurtainTimerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ModeCurtainTimerPageModule);
    return ModeCurtainTimerPageModule;
}());

//# sourceMappingURL=mode-curtain-timer.module.js.map

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

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeCurtainTimerPage; });
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
 * Generated class for the ModeCurtainTimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModeCurtainTimerPage = (function () {
    function ModeCurtainTimerPage(navCtrl, navParams, viewCtrl, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tools = tools;
        this.getData();
    }
    ModeCurtainTimerPage.prototype.ionViewDidLoad = function () {
    };
    ModeCurtainTimerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModeCurtainTimerPage.prototype.complate = function () {
        var params = this.getParams();
        if (this.checkParam()) {
            __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setTimer(params);
            this.dismiss();
        }
    };
    ModeCurtainTimerPage.prototype.getParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_4__providers_model_model__["a" /* CurtainModeParams */](); //注意组装顺序
        params.timerOpen = Number(this.timerOpen);
        params.loop = this.getfullMonth(this.loop);
        params.starDate = this.startDate;
        params.stopDate = this.stopDate;
        params.starDate1 = this.startDate1;
        params.stopDate1 = this.stopDate1;
        return params;
    };
    ModeCurtainTimerPage.prototype.getfullMonth = function (data) {
        var count = data.length;
        for (var i = 0; i < 6 - count; i++) {
            data.push(0);
        }
        return data;
    };
    ModeCurtainTimerPage.prototype.checkParam = function () {
        if (this.loop.length > 6) {
            this.tools.presentToast("最多选择6个月");
            return false;
        }
        return true;
    };
    ModeCurtainTimerPage.prototype.getData = function () {
        var fnData = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('55');
        this.loop = this.tools.getArrayByFnData(fnData, '55', 33, 6);
        this.timerOpen = Number(fnData.F5532);
        this.startDate = [fnData.F5539, fnData.F5540];
        this.stopDate = [fnData.F5541, fnData.F5542];
        this.startDate1 = [fnData.F5543, fnData.F5544];
        this.stopDate1 = [fnData.F5545, fnData.F5546];
    };
    ModeCurtainTimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode-curtain-timer',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/mode-curtain-timer/mode-curtain-timer.html"*/'<!--\n  Generated template for the ModeCurtainTimerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>定时</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="complate()">\n        <ion-icon ios="md-checkmark" md="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="setting-page">\n  <!-- <ion-item>\n    <ion-label>自动控制</ion-label>\n    <ion-toggle [(ngModel)]="timerOpen"></ion-toggle>\n  </ion-item> -->\n  <ion-list>\n    <ion-list-header>\n      空调季节\n    </ion-list-header>\n\n    <my-loop [(myModel)]="loop" name=\'月份\' type=\'month\' isTrans=\'0\'></my-loop>\n\n    <my-time name=\'开启时间\' [(myModel)]="startDate"></my-time>\n    <my-time name=\'关闭时间\' [(myModel)]="stopDate"></my-time>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      非空调季节\n    </ion-list-header>\n    <my-time name=\'开启时间\' [(myModel)]="startDate1"></my-time>\n    <my-time name=\'关闭时间\' [(myModel)]="stopDate1"></my-time>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/timer/mode-curtain-timer/mode-curtain-timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */]])
    ], ModeCurtainTimerPage);
    return ModeCurtainTimerPage;
}());

//# sourceMappingURL=mode-curtain-timer.js.map

/***/ })

});
//# sourceMappingURL=8.js.map