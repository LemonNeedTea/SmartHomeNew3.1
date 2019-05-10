webpackJsonp([19],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHistoryPageModule", function() { return MessageHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_history__ = __webpack_require__(896);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageHistoryPageModule = (function () {
    function MessageHistoryPageModule() {
    }
    MessageHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_history__["a" /* MessageHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_history__["a" /* MessageHistoryPage */]),
            ],
        })
    ], MessageHistoryPageModule);
    return MessageHistoryPageModule;
}());

//# sourceMappingURL=message-history.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_model_enumdata__ = __webpack_require__(67);
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
 * Generated class for the MessageHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageHistoryPage = (function () {
    function MessageHistoryPage(navCtrl, navParams, device, tools) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.tools = tools;
        this.parentParams = this.navParams.get('data');
        var startDate = this.navParams.get("StartDate");
        var stopDate = this.navParams.get("StopDate");
        this.name = this.parentParams.F_Name;
        var start = this.tools.getFullDateStr(startDate, __WEBPACK_IMPORTED_MODULE_4__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var stop = this.tools.getAddDate(stopDate, __WEBPACK_IMPORTED_MODULE_4__providers_model_enumdata__["b" /* EnumDateType */].Day);
        this.device.getAlarmHistoryDataList(start, stop, this.parentParams.F_Type).then(function (res) {
            _this.messagelists = res;
        });
    }
    MessageHistoryPage.prototype.ionViewDidLoad = function () {
    };
    MessageHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-history',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/message-history/message-history.html"*/'<!--\n  Generated template for the MessageHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of messagelists">\n      <div>\n        <span class="biaoqian color8" margin-right>报警</span>{{item.F_AlarmText}}\n        <p class="p">{{item.F_AlarmTimeStr}}</p>\n      </div>\n      <!-- <button ion-button clear small item-end (click)="setState(item.F_ID)" [disabled]="item.F_CheckState">已阅</button> -->\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/message-history/message-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */]])
    ], MessageHistoryPage);
    return MessageHistoryPage;
}());

//# sourceMappingURL=message-history.js.map

/***/ })

});
//# sourceMappingURL=19.js.map