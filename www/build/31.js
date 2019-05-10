webpackJsonp([31],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartPageModule", function() { return BarchartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barchart__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BarchartPageModule = (function () {
    function BarchartPageModule() {
    }
    BarchartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__barchart__["a" /* BarchartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barchart__["a" /* BarchartPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], BarchartPageModule);
    return BarchartPageModule;
}());

//# sourceMappingURL=barchart.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarchartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_chart__ = __webpack_require__(163);
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
 * Generated class for the BarchartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarchartPage = (function () {
    function BarchartPage(navCtrl, navParams, device, chart, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.chart = chart;
        this.tools = tools;
        this.dataList = [];
        this.dw = "";
        this.parentParams = this.navParams.get("params");
        // this.name = "日期(" + this.parentParams.StartTime + "-" + this.parentParams.StopTime + ")";
    }
    BarchartPage.prototype.ionViewDidLoad = function () {
        this.loadChart(this.parentParams);
    };
    BarchartPage.prototype.loadChart = function (data) {
        var _this = this;
        this.name = "日期(" + data.StartTime + "-" + data.StopTime + ")";
        var params = data;
        params.StartTime = this.tools.getFullDateStr(params.StartTime, params.DateType);
        params.StopTime = this.tools.getAddDate(params.StopTime, params.DateType);
        this.device.getEnergyChartData(params).then(function (res) {
            _this.dataList = res.DataList;
            _this.dw = res.DW;
            _this.sum = res.Sum;
            var config = {
                dw: _this.dw
            };
            _this.chart.getBarChart('chartBar', _this.dataList, config);
            _this.parentParams = data;
        });
    };
    BarchartPage.prototype.goDetail = function (data) {
        var childParams;
        switch (this.parentParams.DateType) {
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Year: {
                childParams = this.tools.getYearRange(data);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month: {
                childParams = this.tools.getMonthRange(data);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day: {
                var yearStr = this.parentParams.StartTime.substring(0, 5);
                childParams = this.tools.getDayRange(yearStr + data);
            }
        }
        if (childParams) {
            childParams.Type = this.parentParams.Type;
            this.loadChart(childParams);
        }
    };
    BarchartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-barchart',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/barchart/barchart.html"*/'<!--\n  Generated template for the BarchartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <my-title [name]="name"></my-title>\n\n  <canvas id="chartBar" style="width:100%"></canvas>\n  <!-- <ion-grid text-center>\n    <ion-row>\n      <ion-col>名称</ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row *ngFor="let item of dataList">\n      <ion-col><a>{{item.key}}</a></ion-col>\n      <ion-col>{{item.value}}</ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <ul class="self-list" margin-top>\n    <li class="item">\n      <div class=\'li1 li-header\'>\n        <span>日期</span>\n        <span>单位（{{dw}}）</span>\n      </div>\n    </li>\n    <li *ngFor="let item of dataList" class="item">\n      <div class=\'li1\'> <span><a (click)="goDetail(item.key)">{{item.key}}</a></span>\n        <span>{{item.value}}</span>\n      </div>\n    </li>\n    <li class="item">\n      <div class=\'li1 li-header\'>\n        <span>总计</span>\n        <span>{{sum}}</span>\n      </div>\n    </li>\n  </ul>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/barchart/barchart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_chart__["a" /* chartToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], BarchartPage);
    return BarchartPage;
}());

//# sourceMappingURL=barchart.js.map

/***/ })

});
//# sourceMappingURL=31.js.map