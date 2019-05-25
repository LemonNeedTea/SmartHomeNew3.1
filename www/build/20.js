webpackJsonp([20],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartPageModule", function() { return LinechartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linechart__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LinechartPageModule = (function () {
    function LinechartPageModule() {
    }
    LinechartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__linechart__["a" /* LinechartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__linechart__["a" /* LinechartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LinechartPageModule);
    return LinechartPageModule;
}());

//# sourceMappingURL=linechart.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinechartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__ = __webpack_require__(67);
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
 * Generated class for the LinechartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LinechartPage = (function () {
    function LinechartPage(navCtrl, navParams, device, chart, tools) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.chart = chart;
        this.tools = tools;
        var startDate = this.navParams.get('StartDate');
        var stopDate = this.navParams.get('StopDate');
        var type = this.navParams.get('type');
        this.name = "日期(" + startDate + "-" + stopDate + ")";
        var start = this.tools.getFullDateStr(startDate, __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var stop = this.tools.getAddDate(stopDate, __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day);
        this.device.getWaterlevelMapChartData(start, stop, type).then(function (res) {
            console.log(res);
            var config = {
                dw: res.DW
            };
            _this.chart.getLineChart('chart1', res.DataList, config);
        });
    }
    LinechartPage.prototype.ionViewDidLoad = function () {
    };
    LinechartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-linechart',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/linechart/linechart.html"*/'<!--\n  Generated template for the LinechartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <my-title [name]="name"></my-title>\n      <canvas id="chart1" style="width:100%"></canvas>\n</ion-content>\n'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/linechart/linechart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_chart__["a" /* chartToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], LinechartPage);
    return LinechartPage;
}());

//# sourceMappingURL=linechart.js.map

/***/ })

});
//# sourceMappingURL=20.js.map