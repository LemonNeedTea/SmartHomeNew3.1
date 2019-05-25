webpackJsonp([16],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeSettingPageModule", function() { return ModeSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mode_setting__ = __webpack_require__(901);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModeSettingPageModule = (function () {
    function ModeSettingPageModule() {
    }
    ModeSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mode_setting__["a" /* ModeSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mode_setting__["a" /* ModeSettingPage */]),
            ],
        })
    ], ModeSettingPageModule);
    return ModeSettingPageModule;
}());

//# sourceMappingURL=mode-setting.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__ = __webpack_require__(43);
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
 * Generated class for the ModeSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModeSettingPage = (function () {
    function ModeSettingPage(navCtrl, navParams, device, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.modalCtrl = modalCtrl;
        this.alarm = true;
        this.mode = this.navParams.get("mode");
        this.modeID = this.mode.F_AgreementID;
        this.name = this.mode.F_Name;
        this.alarm = this.mode.F_SecurityRun;
        ;
        this.getModeDeviceDataList();
    }
    ModeSettingPage.prototype.getModeDeviceDataList = function () {
        var _this = this;
        this.device.GetDeviceModeDetailDatas(this.modeID).then(function (res) {
            _this.dataList = res;
            console.log(res);
        });
    };
    ModeSettingPage.prototype.ionViewDidLoad = function () {
    };
    ModeSettingPage.prototype.presentShowModal = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.dataList));
        var profileModal = this.modalCtrl.create('ModeDeviceSelectedSettingPage', { dataList: data });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.dataList = data;
            }
        });
        profileModal.present();
    };
    ModeSettingPage.prototype.saveMode = function () {
        var _this = this;
        var paramsData = [];
        this.dataList.forEach(function (element) {
            element.data.forEach(function (data) {
                if (data.Control) {
                    paramsData.push({
                        F_DeviceID: data.DeviceID,
                        F_Open: data.Open
                    });
                }
            });
        });
        this.mode.F_SecurityRun = this.alarm;
        this.device.setModeDetail(this.mode, paramsData).then(function (res) {
            if (res == true) {
                __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].socketObject.setModeDetail(_this.mode.F_AgreementID);
                _this.navCtrl.pop();
            }
        });
    };
    ModeSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mode-setting',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-setting/mode-setting.html"*/'<!--\n  Generated template for the ModeSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentShowModal()">\n        <ion-icon name=\'list\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-list> -->\n  <ion-item>\n    <ion-label>报警系统</ion-label>\n    <ion-toggle [(ngModel)]="alarm"></ion-toggle>\n  </ion-item>\n  <!-- </ion-list> -->\n  <ion-list class="device-list">\n    <ion-item-group *ngFor="let item of dataList">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{item.name}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let device of item.data">\n        <!-- <ng-container > -->\n        <ion-item *ngIf="device.Control">\n          <div item-start class="start" [ngClass]="{true:device.DeviceColor,false:\'unopen\'}[device.Open]">\n            <img src=\'../assets/img/home/icon-devicesetting/{{device.Img}}\'></div>\n          <ion-label>\n            <div class="label">\n              <div>\n                {{device.DeviceName}}\n                <p><span>{{device.FloorName+\'/\'+device.RoomName}}</span></p>\n              </div>\n            </div>\n\n          </ion-label>\n          <ion-toggle [(ngModel)]="device.Open"></ion-toggle>\n          {{device.DeviceName}}\n        </ion-item>\n\n        <!-- </ng-container> -->\n      </ion-item-sliding>\n\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <button ion-button block color=\'primary\' no-margin (click)="saveMode()">保 存</button>\n</ion-footer>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/mode-setting/mode-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], ModeSettingPage);
    return ModeSettingPage;
}());

//# sourceMappingURL=mode-setting.js.map

/***/ })

});
//# sourceMappingURL=16.js.map