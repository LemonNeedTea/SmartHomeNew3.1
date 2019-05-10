webpackJsonp([13],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomdevicePageModule", function() { return RoomdevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roomdevice__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoomdevicePageModule = (function () {
    function RoomdevicePageModule() {
    }
    RoomdevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__roomdevice__["a" /* RoomdevicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__roomdevice__["a" /* RoomdevicePage */]),
            ],
        })
    ], RoomdevicePageModule);
    return RoomdevicePageModule;
}());

//# sourceMappingURL=roomdevice.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomdevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { WellpumpPage } from '../wellpump/wellpump';
// import { CurtainSettingPage } from '../device-setting/curtain-setting/curtain-setting';
// import { DoorSettingPage } from '../device-setting/door-setting/door-setting';
// import { LiftSettingPage } from '../device-setting/lift-setting/lift-setting';
// import { PumpEastnorthpoolSettingPage } from '../device-setting/pump-eastnorthpool-setting/pump-eastnorthpool-setting';
// import { PumpNorthcourtSettingPage } from '../device-setting/pump-northcourt-setting/pump-northcourt-setting';
// import { ValveEastcourtSettingPage } from '../device-setting/valve-eastcourt-setting/valve-eastcourt-setting';
// import { ValveEastnorthpoolSettingPage } from '../device-setting/valve-eastnorthpool-setting/valve-eastnorthpool-setting';
/**

/**
 * Generated class for the RoomdevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomdevicePage = (function () {
    function RoomdevicePage(navCtrl, navParams, device, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.events = events;
        this.deviceDataListShow = [];
        this.sumNumOpen = 0;
        this.eventsIsAutoHandler = function (data) {
            _this.auto = data;
        };
        this.getRoomDeviceState = function (data) {
            var result = {};
            _this.sumNumOpen = 0;
            _this.deviceDataListShow.forEach(function (element) {
                var state = Boolean(data[element.F_ID]);
                result[element.F_ID] = state;
                if (state)
                    _this.sumNumOpen++;
            });
            _this.stateData = result;
        };
        this.roomID = this.navParams.get('id');
        this.roomName = this.navParams.get('name');
        this.isType = this.navParams.get('isType');
        if (this.isType) {
            this.device.getDeviceDataListByTypeID(this.roomID).then(function (res) {
                _this.deviceDataListShow = res;
                _this.initFn51();
            });
        }
        else {
            this.device.getDeviceDataListByRoomID(this.roomID).then(function (res) {
                _this.deviceDataListShow = res;
                _this.initFn51();
            });
        }
        this.auto = __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].isAuto;
        this.events.subscribe("FnData:isAuto", this.eventsIsAutoHandler);
    }
    RoomdevicePage.prototype.initFn51 = function () {
        this.getRoomDeviceState(__WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].GetFnData('51'));
        this.events.subscribe("FnData:51", this.getRoomDeviceState);
    };
    RoomdevicePage.prototype.ionViewDidLoad = function () {
    };
    RoomdevicePage.prototype.ionViewWillEnter = function () {
    };
    RoomdevicePage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe("FnData:51", this.getRoomDeviceState);
        this.events.unsubscribe("FnData:isAuto", this.eventsIsAutoHandler);
    };
    RoomdevicePage.prototype.goSetting = function (data) {
        if (data.F_ShowSetting) {
            var page = void 0;
            switch (data['F_SettingRouter']) {
                case "setting_pump": {
                    page = 'WellpumpPage';
                    break;
                }
                case "setting_curtain": {
                    page = 'CurtainSettingPage';
                    break;
                }
                case "setting_smartdoor": {
                    page = 'DoorSettingPage';
                    break;
                }
                case "setting-northPump": {
                    page = 'PumpEastnorthpoolSettingPage';
                    break;
                }
                case "setting_pg": {
                    page = 'PumpNorthcourtSettingPage';
                    break;
                }
                case "setting_dcf": {
                    page = 'ValveEastcourtSettingPage';
                    break;
                }
                case "setting-eastNorthDCF": {
                    page = 'ValveEastnorthpoolSettingPage';
                    break;
                }
                case "setting_lift": {
                    page = 'LiftSettingPage';
                    break;
                }
                default: {
                    page = data['F_SettingRouter'];
                    break;
                }
            }
            if (page) {
                var params = {
                    id: data["F_ID"],
                    name: data["F_Name"]
                };
                this.navCtrl.push(page, params);
            }
        }
    };
    RoomdevicePage.prototype.setDeviceState = function (id, name, state) {
        __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(id, name, state);
    };
    RoomdevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roomdevice',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/roomdevice/roomdevice.html"*/'<!--\n  Generated template for the RoomdevicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{roomName}}<span *ngIf="!auto">{{"("+sumNumOpen+"/"+deviceDataListShow.length+")"}}</span><span\n        *ngIf="auto" style="color:red;">(手动模式-不可控)</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="cate_right">\n    <ion-list class="device-list">\n      <button ion-item *ngFor="let item of deviceDataListShow"\n        [ngClass]="{true:\'show-setting\',false:\'show-button\'}[item.F_ShowSetting]" \n        (click)="goSetting(item)">\n        <div item-start class="start" [ngClass]="{true:item[\'F_TypeColor\'],false:\'unopen\'}[stateData[item.F_ID]==1]">\n          <img src=\'../assets/img/home/icon-devicesetting/{{item.F_TypeImg}}\'></div>\n        <ion-label>\n          <div class="label">\n            <div>\n              {{item.F_Name}}\n              <p *ngIf="isType">{{item.F_FloorName+\'/\'+item.F_RoomName}}</p>\n            </div>\n\n            <div class="label-right">\n              <button ion-button clear small float-right *ngIf="item.F_ShowSetting"\n                >{{item.F_SettingName}}</button>\n            </div>\n          </div>\n\n        </ion-label>\n        <ion-toggle [(ngModel)]="stateData[item.F_ID]" *ngIf="item.F_ShowButton"\n          (ngModelChange)="setDeviceState(item.F_ID,item.F_Name,stateData[item.F_ID])" [disabled]="auto"></ion-toggle>\n      </button>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/roomdevice/roomdevice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], RoomdevicePage);
    return RoomdevicePage;
}());

//# sourceMappingURL=roomdevice.js.map

/***/ })

});
//# sourceMappingURL=13.js.map