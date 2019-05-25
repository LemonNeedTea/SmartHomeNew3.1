webpackJsonp([11],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellpumpPageModule", function() { return WellpumpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wellpump__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WellpumpPageModule = (function () {
    function WellpumpPageModule() {
    }
    WellpumpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wellpump__["a" /* WellpumpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wellpump__["a" /* WellpumpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], WellpumpPageModule);
    return WellpumpPageModule;
}());

//# sourceMappingURL=wellpump.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellpumpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { WellpumpqueryPage } from '../wellpumpquery/wellpumpquery';


// import { TimerPumpPage } from '../timer/timer-pump/timer-pump';
/**
 * Generated class for the WellpumpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WellpumpPage = (function () {
    function WellpumpPage(navCtrl, navParams, events, chart, device, tools, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.chart = chart;
        this.device = device;
        this.tools = tools;
        this.modalCtrl = modalCtrl;
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
        this.eventsFn52Handler = function (data) {
            var value = _this.getWaterlevelData(data);
            _this.levelData[0].value = value;
            _this.changeData();
        };
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        var fn51Data = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('51');
        this.getDeviceState(fn51Data);
        this.events.subscribe("FnData:51", this.eventsFn51Handler);
        this.f50Data = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('50');
        this.events.subscribe("FnData:50", this.eventsFn50Handler);
        this.auto = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].isAuto;
        this.events.subscribe("FnData:isAuto", this.eventsFnAutoHandler);
    }
    WellpumpPage.prototype.getDeviceState = function (data) {
        if (data) {
            this.state = data[this.id];
        }
    };
    WellpumpPage.prototype.setDeviceState = function (state) {
        __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(this.id, this.name, state);
    };
    WellpumpPage.prototype.ionViewDidLoad = function () {
        this.getWaterLevelChart();
        this.getWaterlevelMapChart();
    };
    WellpumpPage.prototype.ionViewWillEnter = function () {
    };
    WellpumpPage.prototype.ionViewWillUnload = function () {
        console.log("leave");
        this.events.unsubscribe("FnData:50", this.eventsFn50Handler);
        this.events.unsubscribe("FnData:51", this.eventsFn51Handler);
        this.events.unsubscribe("FnData:52", this.eventsFn52Handler);
        this.events.unsubscribe("FnData:isAuto", this.eventsFnAutoHandler);
    };
    WellpumpPage.prototype.changeData = function () {
        this.levelGuide.position = [this.levelData[0].key, this.levelData[0].value];
        this.levelGuide.content = this.levelData[0].value;
        this.levelChart.changeData(this.levelData);
        this.levelChart.repaint();
    };
    WellpumpPage.prototype.getWaterLevelChart = function () {
        var fnData = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('52');
        var value = this.getWaterlevelData(fnData);
        this.levelData = [
            { key: '', value: value, type: '井水液位' }
        ];
        var config = {
            dw: 'm',
            max: 200,
            min: 0,
            tooltip: false
        };
        this.levelChart = this.chart.getBarChart('mountNode', this.levelData, config);
        this.levelGuide = this.levelChart.guide().text({
            position: [0, 0],
            content: 0,
            style: {
                // fill: color,
                textBaseline: 'bottom'
            },
            offsetY: -5
        });
        this.changeData();
        this.events.subscribe("FnData:52", this.eventsFn52Handler);
    };
    WellpumpPage.prototype.getWaterlevelData = function (data) {
        var temp = data['F529'];
        if (temp) {
            return temp * 1;
        }
    };
    WellpumpPage.prototype.getWaterlevelMapChart = function () {
        var _this = this;
        var nowDateStr = this.tools.getNowDateStr(__WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var start = this.tools.getFullDateStr(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var stop = this.tools.getAddDate(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        this.device.getWaterlevelMapChartData(start, stop, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].WellPump).then(function (res) {
            var config = {
                dw: res.DW
            };
            var data = [
                { key: '10:11:00', value: '2', type: '井水液位' }
            ];
            _this.chart.getLineChart('waterlevelChart', res.DataList, config);
        });
    };
    WellpumpPage.prototype.goWellPumpQuery = function () {
        this.navCtrl.push('WellpumpqueryPage', { name: '井水液位', type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].WellPump });
    };
    WellpumpPage.prototype.presentShowModal = function () {
        var profileModal = this.modalCtrl.create('TimerPumpPage', { name: this.name });
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    WellpumpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wellpump',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/wellpump/wellpump.html"*/'<!--\n  Generated template for the WellpumpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentShowModal()">\n        <ion-icon name="alarm"></ion-icon>\n      </button>\n      <!-- <button ion-button icon-only (click)="openModal()">\n            <ion-icon name="pulse"></ion-icon>\n          </button> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content class="open-card">\n      <ion-item>\n        <ion-label>\n          <span *ngIf="!state">已关闭</span>\n          <div ion-text color=\'primary\' *ngIf="state">已打开\n            <div float-right>{{f50Data.F506}}kW</div>\n          </div>\n        </ion-label>\n        <ion-toggle [(ngModel)]="state" (ngModelChange)="setDeviceState(!state)" [disabled]="auto"></ion-toggle>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <my-title [name]="\'当前水位\'"></my-title>\n\n    <ion-card-content>\n      <canvas id="mountNode" style="width:100%"></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      本日水位趋势\n      <button ion-button icon-only clear float-right (click)="goWellPumpQuery()" style="margin:-11px">\n        <ion-icon name=\'stats\'></ion-icon>\n      </button>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <div class="tab">\n        <button class="btn active" id="one">本 日</button>\n        <button class="btn" id="three">本 周</button>\n        <button class="btn" id="six">本 月 </button>\n        <button class="btn" id="oneYear">更 多</button>\n      </div> -->\n      <canvas id="waterlevelChart" style="width:100%"></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/wellpump/wellpump.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_chart__["a" /* chartToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], WellpumpPage);
    return WellpumpPage;
}());

//# sourceMappingURL=wellpump.js.map

/***/ })

});
//# sourceMappingURL=11.js.map