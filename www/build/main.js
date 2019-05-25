webpackJsonp([36],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http) {
        this.http = http;
    }
    //localStorage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpServicesProvider = (function () {
    function HttpServicesProvider(http, loading, toastCtrl, config, tools) {
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.config = config;
        this.tools = tools;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    //get请求
    HttpServicesProvider.prototype.get = function (url) {
        var _this = this;
        // const loader = this.loading.create({
        //     // content: "Please wait...",
        //     duration: 3000
        // });
        // loader.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(url, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                })
            }).subscribe(function (res) {
                // loader.dismiss();
                resolve(res.json());
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "请求失败！",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                // loader.dismiss();
            });
        });
    };
    //post请求
    HttpServicesProvider.prototype.post = function (url, params, isLoading) {
        var _this = this;
        if (isLoading === void 0) { isLoading = true; }
        //参数转换
        var urlParams = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
        for (var key in params) {
            urlParams.set(key, params[key]);
        }
        var loader;
        if (isLoading === true) {
            loader = this.loading.create({});
            loader.present();
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.config.apiUrl + url, urlParams, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                })
            })
                .subscribe(function (res) {
                if (isLoading) {
                    loader.dismiss();
                }
                try {
                    resolve(res.json());
                }
                catch (error) {
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "请求失败！",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                if (isLoading) {
                    loader.dismiss();
                }
                reject('');
            });
        });
    };
    HttpServicesProvider.prototype.postMain = function (url, params, isLoading) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (isLoading === void 0) { isLoading = true; }
        return new Promise(function (resolve) {
            var username = _this.tools.getUserName();
            if (username) {
                params['UserName'] = username;
                _this.post(url, params, isLoading).then(function (res) {
                    if (res["MainData"]) {
                        resolve(res["MainData"]);
                    }
                }, function (err) { });
            }
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["z" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6__tools_tools__["a" /* ToolsProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_message__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_room__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__energy_energy__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jiguang_ionic_jpush__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(device, jpush) {
        this.device = device;
        this.jpush = jpush;
        this.tabRoots = [
            {
                root: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
                tabTitle: '首页',
                tabIcon: 'home'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_3__room_room__["a" /* RoomPage */],
                tabTitle: '房间',
                tabIcon: 'photos'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_4__device_device__["a" /* DevicePage */],
                tabTitle: '设备',
                tabIcon: 'options'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_5__energy_energy__["a" /* EnergyPage */],
                tabTitle: '用能',
                tabIcon: 'stats'
            }, {
                root: __WEBPACK_IMPORTED_MODULE_1__message_message__["a" /* MessagePage */],
                tabTitle: '消息',
                tabIcon: 'chatboxes',
                tabBadge: 0,
                tabBadgeStyle: 'danger'
            }
        ];
        this.getMessageNum();
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.getMessageNum();
        }, 10000);
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.interval);
    };
    TabsPage.prototype.getMessageNum = function () {
        var _this = this;
        this.device.getAlarmDataList(false).then(function (res) {
            _this.tabRoots[4].tabBadge = res.length;
            _this.jpush.setApplicationIconBadgeNumber(Number(res.length));
        });
        // this.http.post('EnergyAppData/GetMessageData',null,false).then(res=>{
        //   let data=res['MainData'];
        //   this.tabRoots[2].tabBadge = data.length;
        // });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab *ngFor="let tabRoot of tabRoots" [root]="tabRoot.root" tabTitle={{tabRoot.tabTitle}} tabIcon={{tabRoot.tabIcon}} tabBadge={{tabRoot.tabBadge}} \n  tabBadgeStyle={{tabRoot.tabBadgeStyle}}></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/tabs/tabs.html"*/,
            selector: 'tabs'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__jiguang_ionic_jpush__["a" /* JPush */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_f2__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_f2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__antv_f2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var chartToolsProvider = (function () {
    function chartToolsProvider() {
        this.chartObj = {};
        this.chartObj = {};
    }
    chartToolsProvider.prototype.getLineChart = function (id, data, config) {
        return this.getChart(id, 'line', data, config);
    };
    chartToolsProvider.prototype.getBarChart = function (id, data, config) {
        return this.getChart(id, 'bar', data, config);
    };
    chartToolsProvider.prototype.getChart = function (id, type, data, config) {
        if (this.chartObj[id]) {
            this.chartObj[id].clear();
            this.chartObj[id] = null;
        }
        var chart = new __WEBPACK_IMPORTED_MODULE_1__antv_f2___default.a.Chart({
            id: id,
            height: 280,
            pixelRatio: window.devicePixelRatio,
            padding: [50, 'auto', 50, 'auto'],
        });
        if (config['dw']) {
            chart.guide().text({
                position: ['min', 'max'],
                content: "单位(" + config['dw'] + ")",
                style: {
                    textBaseline: 'middle',
                    textAlign: 'center'
                },
                offsetY: -30
            });
        }
        ;
        chart.axis('key', {
            label: {
                rotate: -Math.PI / 4,
                textAlign: 'end',
                textBaseline: 'middle'
            }
        });
        chart.legend({
            align: 'right',
            itemWidth: 50
        });
        var key = {
            tickCount: 12,
            isRounding: true,
            formatter: function (res) {
                return res;
            }
        };
        var value = {};
        if (type == 'line') {
            key['range'] = [0, 1];
        }
        if (config['max']) {
            value['max'] = config['max'];
        }
        if (config['min']) {
            value['min'] = config['min'];
        }
        chart.scale({
            value: value,
            key: key
        });
        if (config['tooltip'] !== false) {
            chart.tooltip({
                // custom: true,
                // showXTip: true,
                // showYTip: true,
                // snap: true,
                // crosshairsType: 'xy',
                // crosshairsStyle: {
                //     lineDash: [2]
                // },
                onShow: function onShow(ev) {
                    var items = ev.items;
                    items[0].name = null;
                    items[0].name = items[0].title;
                    items[0].value = items[0].value;
                }
            });
        }
        else {
            chart.tooltip(false);
        }
        if (type == 'line') {
            chart.line().position('key*value').color('type').shape('smooth');
        }
        else {
            chart.interval().position('key*value').color('type');
        }
        chart.source(data);
        chart.render();
        this.chartObj[id] = chart;
        return chart;
    };
    chartToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], chartToolsProvider);
    return chartToolsProvider;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, loginRequest, events, menuCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loginRequest = loginRequest;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.keyboard = keyboard;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.Login = function (username, password) {
        var _this = this;
        // this.keyboard.close();
        // this.navCtrl.setRoot(TabsPage);
        this.loginRequest.login(username.value, password.value).then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) { });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding >\n  <div ion-text color="primary" text-center class="logo">\n    <img src="../../assets/img/login/logo@3x.png"/>\n    <!-- <ion-icon  name="ionic" style="font-size :4em;" padding-right></ion-icon> -->\n    <p  >家居智慧能源管理</p>\n  </div>\n  <form class="list-form">\n    <ion-item  >\n      <!-- <ion-label fixed><ion-icon color="primary" name="person" item-start></ion-icon></ion-label> -->\n      <ion-label floating><ion-icon name="person" item-start ></ion-icon>用 户 名</ion-label>\n      <ion-input type="text"  #username></ion-input>\n    </ion-item>\n    <ion-item >\n      <!-- <ion-label fixed><ion-icon color="primary" name="lock" item-start></ion-icon></ion-label> -->\n      <ion-label floating><ion-icon name="lock" item-start ></ion-icon>密 码</ion-label>\n      <ion-input type="password" #password clearInput="true"></ion-input>\n    </ion-item>\n    <!-- <ion-item no-lines style="margin-top:20px;font-size:1.4rem;">\n      <label item-right>记住密码</label>\n      <ion-toggle></ion-toggle>\n    </ion-item> -->\n  </form>\n  <!-- <div > -->\n    <button button ion-button round tappable  margin-top icon-right block color="primary"  (click)="Login(username, password)">\n      \n      登 录<ion-icon name="arrow-round-forward"></ion-icon>\n    </button>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["b" /* LoginRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Keyboard */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
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




// import { WellpumpPage } from '../wellpump/wellpump';
// import { CurtainSettingPage } from '../device-setting/curtain-setting/curtain-setting';
// import { DoorSettingPage } from '../device-setting/door-setting/door-setting';
// import { LiftSettingPage } from '../device-setting/lift-setting/lift-setting';
// import { PumpEastnorthpoolSettingPage } from '../device-setting/pump-eastnorthpool-setting/pump-eastnorthpool-setting';
// import { PumpNorthcourtSettingPage } from '../device-setting/pump-northcourt-setting/pump-northcourt-setting';
// import { ValveEastcourtSettingPage } from '../device-setting/valve-eastcourt-setting/valve-eastcourt-setting';
// import { ValveEastnorthpoolSettingPage } from '../device-setting/valve-eastnorthpool-setting/valve-eastnorthpool-setting';
// import { RoomdevicePage } from '../../pages/roomdevice/roomdevice';
/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevicePage = (function () {
    function DevicePage(navCtrl, navParams, device, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.events = events;
        this.stateData = {};
        this.sumNumOPen = 0;
        this.sumNum = 0;
        this.openStateNumArr = {};
        this.getIsAuto();
        this.device.getDeviceTypeDataList().then(function (res) {
            _this.typeDataList = res;
            res.forEach(function (element) {
                _this.openStateNumArr[element.F_ID] = 0;
                _this.sumNum += element.F_DeviceNum;
            });
            _this.device.getDeviceIDtoTypeID().then(function (ress) {
                _this.deviceDataList = ress;
                _this.getFn51Data();
            });
        });
    }
    DevicePage.prototype.ionViewDidEnter = function () {
        // if (!this.isFirst) {
        //   this.getIsAuto();
        //   this.getFn51Data();
        // }
    };
    DevicePage.prototype.getIsAuto = function () {
        var _this = this;
        this.auto = __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].isAuto;
        this.events.subscribe("FnData:isAuto", function (data) {
            _this.auto = data;
            //  console.log(data);
        });
    };
    DevicePage.prototype.getFn51Data = function () {
        var _this = this;
        var data = __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].GetFnData('51');
        this.getTypeDeviceNum(data);
        this.events.subscribe("FnData:51", function (res) {
            _this.getTypeDeviceNum(res);
        });
    };
    // ionViewDidLeave() {
    //   this.events.unsubscribe("FnData:51",()=>{});
    //   this.events.unsubscribe("FnData:isAuto",()=>{});
    //   console.log('ionViewDidLeave')
    // }
    DevicePage.prototype.getTypeDeviceNum = function (data) {
        this.sumNumOPen = 0;
        var sumNumOPen = 0;
        var result = JSON.parse(JSON.stringify(this.openStateNumArr));
        for (var key in data) {
            if (data.hasOwnProperty(key) && Number(key) > 0) {
                var state = data[key];
                var typeID = this.deviceDataList[key];
                var element = data[key];
                if (Boolean(element)) {
                    sumNumOPen++;
                    result[typeID]++;
                }
            }
        }
        ;
        this.sumNumOPen = sumNumOPen;
        this.stateData = result;
    };
    DevicePage.prototype.getRightCateData = function (typeID) {
        var _this = this;
        this.typeID = typeID;
        this.deviceDataListShow = new Array();
        this.deviceDataList.forEach(function (item) {
            if (item['F_TypeID'] == typeID) {
                _this.deviceDataListShow.push(item);
            }
        });
    };
    DevicePage.prototype.setDeviceState = function (id, name, state) {
        __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].socketObject.setDeviceState(id, name, state);
    };
    DevicePage.prototype.goSetting = function (data) {
        var page;
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
        }
        if (page) {
            var params = {
                id: data["F_ID"],
                name: data["F_Name"]
            };
            this.navCtrl.push(page, params);
        }
    };
    DevicePage.prototype.goRoomDevice = function (id, name) {
        this.navCtrl.push('RoomdevicePage', { id: id, name: name, isType: true });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device/device.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>设备 ({{sumNumOPen}}/{{sumNum}})</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list class="my-list">\n    <button ion-item *ngFor="let item of typeDataList" (tap)="goRoomDevice(item[\'F_ID\'],item.F_Name)">\n      <div item-start class="start" [ngClass]="item[\'F_Color\']"><img\n          src=\'../assets/img/home/icon-devicesetting/{{item.F_Img}}\'></div>\n\n      <h2>{{item.F_Name}}\n        <p float-right class="state">{{stateData[item[\'F_ID\']]}}/{{item.F_DeviceNum}}</p>\n\n      </h2>\n\n\n      <!-- <ion-icon name="arrow-forward" item-end></ion-icon> -->\n\n    </button>\n  </ion-list>\n  <!-- \n  <div class="cate_content">\n    <div class="cate_left">\n      <ion-list>\n        <ion-item *ngFor="let item of typeDataList" (tap)="getRightCateData(item[\'F_ID\'])"\n          [ngClass]="{\'item-selected\': item[\'F_ID\']==typeID}">\n          <img src=\'../assets/img/home/icon-devicesetting/{{item.F_Img}}\'>\n          <p>{{item.F_Name}}</p>\n\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="cate_right">\n      <ion-list class="device-list">\n        <ion-item *ngFor="let item of deviceDataListShow" [ngClass]="{\'device-open\': stateData[item.F_ID]==1}">\n          <ion-label>\n            <div class="label">\n              <div>\n                {{item.F_Name}}\n                <p><span class="biaoqian" [ngClass]="item.F_Color">{{item.F_FloorName+\'/\'+item.F_RoomName}}</span></p>\n              </div>\n              <div class="label-right">\n                <button ion-button clear small float-right *ngIf="item.F_ShowSetting"\n                  (click)="goSetting(item)">{{item.F_SettingName}}</button>\n              </div>\n            </div>\n\n          </ion-label>\n          <ion-toggle [(ngModel)]="stateData[item.F_ID]" *ngIf="item.F_ShowButton" [disabled]="auto"\n            (ngModelChange)="setDeviceState(item.F_ID,item.F_Name,stateData[item.F_ID])"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </div>\n\n\n  </div> -->\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/device/device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_model_variable__ = __webpack_require__(43);
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







// import { PopoverPage } from '../popover/popover';
// import { WellpumpqueryPage } from '../wellpumpquery/wellpumpquery';
// import { EnergyQueryPage } from '../energy-query/energy-query';

/**
 * Generated class for the EnergyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnergyPage = (function () {
    function EnergyPage(navCtrl, navParams, tools, device, chart, events, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.device = device;
        this.chart = chart;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.oneData = {}; //一楼
        this.twoData = {}; //二楼
        this.threeData = {}; //三楼
        this.airData = {}; //空调
        this.pumpData = {}; //井水泵
        this.liftData = {}; //电梯
        this.power = {};
        this.v = {};
        this.water = {};
        this.eleType = __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["c" /* EnumEnergyType */].Ele;
        this.waterType = __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["c" /* EnumEnergyType */].Water;
        this.energyType = this.eleType;
        var f54Data = __WEBPACK_IMPORTED_MODULE_5__providers_model_variable__["a" /* Variable */].GetFnData('54');
        var f50Data = __WEBPACK_IMPORTED_MODULE_5__providers_model_variable__["a" /* Variable */].GetFnData('50');
        this.setF50DetailData(f50Data);
        this.setF54DetailData(f54Data);
        this.events.subscribe("FnData:50", function (res) {
            _this.setF50DetailData(res);
        });
        this.events.subscribe("FnData:54", function (res) {
            _this.setF54DetailData(res);
        });
    }
    EnergyPage.prototype.setF50DetailData = function (data) {
        if (Object.keys(data).length > 0) {
            this.power = {
                one: data.F504,
                two: data.F508,
                three: data.F509,
                air: data.F505,
                pump: data.F506,
                lift: data.F507,
            };
            this.v = {
                a: data.F501,
                b: data.F502,
                c: data.F503,
            };
        }
    };
    EnergyPage.prototype.setF54DetailData = function (data) {
        if (Object.keys(data).length > 0) {
            var f541Arr = data.F541.split(',');
            var f542Arr = data.F542.split(',');
            var f543Arr = data.F543.split(',');
            this.oneData = {
                ud: f541Arr[0],
                um: f541Arr[1],
                uy: f541Arr[2],
                udh: f542Arr[0],
                umh: f542Arr[1],
                uyh: f542Arr[2],
                udl: f543Arr[0],
                uml: f543Arr[1],
                uyl: f543Arr[2],
            };
            var f547Arr = data.F547.split(',');
            var f548Arr = data.F548.split(',');
            this.twoData = {
                ud: f547Arr[0],
                um: f547Arr[1],
                uy: f547Arr[2],
            };
            this.threeData = {
                ud: f548Arr[0],
                um: f548Arr[1],
                uy: f548Arr[2],
            };
            var f544Arr = data.F544.split(',');
            var f545Arr = data.F545.split(',');
            var f546Arr = data.F546.split(',');
            this.airData = {
                ud: f544Arr[0],
                um: f544Arr[1],
                uy: f544Arr[2],
            };
            this.pumpData = {
                ud: f545Arr[0],
                um: f545Arr[1],
                uy: f545Arr[2],
            };
            this.liftData = {
                ud: f546Arr[0],
                um: f546Arr[1],
                uy: f546Arr[2],
            };
            var f549Arr = data.F549.split(',');
            this.water = {
                ud: f549Arr[0],
                um: f549Arr[1],
                uy: f549Arr[2],
            };
        }
    };
    EnergyPage.prototype.ionViewDidLoad = function () {
    };
    EnergyPage.prototype.ionViewDidEnter = function () {
        this.energyTypeChange();
    };
    EnergyPage.prototype.getEleChart = function () {
        var _this = this;
        var nowDateStr = this.tools.getNowDateStr(__WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var start = this.tools.getFullDateStr(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var stop = this.tools.getAddDate(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var params = {
            StartTime: start,
            StopTime: stop,
            Type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].EleFull,
            DateType: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Hour
        };
        this.device.getEnergyChartData(params).then(function (res) {
            var config = {
                dw: res.DW
            };
            _this.chart.getBarChart('chart', res.DataList, config);
        });
    };
    EnergyPage.prototype.getWaterChart = function () {
        var _this = this;
        var nowDateStr = this.tools.getNowDateStr(__WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var start = this.tools.getFullDateStr(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var stop = this.tools.getAddDate(nowDateStr, __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Day);
        var params = {
            StartTime: start,
            StopTime: stop,
            Type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].Water,
            DateType: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["b" /* EnumDateType */].Hour
        };
        this.device.getEnergyChartData(params).then(function (res) {
            var config = {
                dw: res.DW
            };
            _this.chart.getBarChart('chart', res.DataList, config);
        });
    };
    EnergyPage.prototype.energyTypeChange = function () {
        switch (this.energyType) {
            case this.eleType: {
                this.getEleChart();
                break;
            }
            case this.waterType: {
                this.getWaterChart();
            }
        }
    };
    EnergyPage.prototype.showPopover = function (myEvent) {
        var eleList = [
            { name: '用电量查询', page: 'EnergyQueryPage', type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].Ele },
            { name: '电负荷查询', page: 'WellpumpqueryPage', type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].FH },
            { name: '空调负荷查询', page: 'WellpumpqueryPage', type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].Air },
        ];
        var waterList = [
            { name: '用水量查询', page: 'EnergyQueryPage', type: __WEBPACK_IMPORTED_MODULE_6__providers_model_enumdata__["a" /* EnumChartType */].Water }
        ];
        var list;
        if (this.energyType == this.eleType) {
            list = eleList;
        }
        else {
            list = waterList;
        }
        var popover = this.popoverCtrl.create('PopoverPage', { list: list });
        popover.present({
            ev: myEvent
        });
    };
    EnergyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-energy',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/energy/energy.html"*/'<!--\n  Generated template for the EnergyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\' >\n    <ion-title>{{{true:\'用电\',false:\'用水\'}[energyType==eleType]}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-footer no-border>\n\n  <ion-toolbar transparent>\n    <ion-segment [(ngModel)]="energyType" color="primary" (ionChange)="energyTypeChange()">\n      <ion-segment-button value={{eleType}}>\n        <ion-icon name="flash"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value={{waterType}}>\n        <ion-icon name="water"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-content>\n  <my-title [name]="{true:\' 总用电趋势图\',false:\'总用水趋势图\'}[energyType==eleType]"></my-title>\n  <canvas id="chart" style="width:100%"></canvas>\n  <div [ngSwitch]="energyType">\n    <div *ngSwitchCase="eleType">\n      <my-title [name]="\'一楼总进线\'"></my-title>\n      <!-- <ion-list> -->\n      <ul class=\'jinxian-ul\'>\n        <li class="line-gap"><span>有功功率(kW):</span><span>{{ power.one}}</span></li>\n        <li><span>电压A(V):</span><span>{{ v.a }}</span></li>\n        <li><span>电压B(V):</span><span>{{ v.b }}</span></li>\n        <li class="line-gap"><span>电压C(V):</span><span>{{ v.c }}</span></li>\n\n        <li><span>本日电量(kWh):</span><span>{{oneData.ud}}</span></li>\n        <li><span>日峰电量(kWh):</span><span>{{oneData.udh}}</span></li>\n        <li class="line-gap"><span>日谷电量(kWh):</span><span>{{oneData.udl}}</span></li>\n\n        <li><span>本月电量(kWh):</span><span>{{oneData.um}}</span></li>\n        <li><span>月峰电量(kWh):</span><span>{{oneData.umh}}</span></li>\n        <li class="line-gap"><span>月谷电量(kWh):</span><span>{{oneData.uml}}</span></li>\n\n        <li><span>本年电量(kWh):</span><span>{{oneData.uy}}</span></li>\n        <li><span>年峰电量(kWh):</span><span>{{oneData.uyh}}</span></li>\n        <li class="line-gap"><span>年谷电量(kWh):</span><span>{{oneData.uyl}}</span></li>\n      </ul>\n      <my-title [name]="\'二楼、三楼用电量\'"></my-title>\n\n      <ion-grid class="self-grid">\n        <ion-row class="first-row">\n          <ion-col col-4>名称</ion-col>\n          <ion-col>二楼</ion-col>\n          <ion-col>三楼</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>有功功率(kW)</ion-col>\n          <ion-col>{{power.two}}</ion-col>\n          <ion-col>{{power.three}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本日电量(kWh)</ion-col>\n          <ion-col>{{twoData.ud}}</ion-col>\n          <ion-col>{{threeData.ud}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本月电量(kWh)</ion-col>\n          <ion-col>{{twoData.um}}</ion-col>\n          <ion-col>{{threeData.um}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本年电量(kWh)</ion-col>\n          <ion-col>{{twoData.uy}}</ion-col>\n          <ion-col>{{threeData.uy}}</ion-col>\n\n        </ion-row>\n      </ion-grid>\n      <my-title [name]="\'重点设备用电量\'"></my-title>\n\n      <ion-grid class="self-grid">\n        <ion-row class="first-row">\n          <ion-col col-4>名称</ion-col>\n          <ion-col>空调</ion-col>\n          <ion-col>水泵</ion-col>\n          <ion-col>电梯</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>有功功率(kW)</ion-col>\n          <ion-col> {{power.air}}</ion-col>\n          <ion-col>{{power.pump}}</ion-col>\n          <ion-col>{{power.lift}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本日电量(kWh)</ion-col>\n          <ion-col>{{airData.ud}}</ion-col>\n          <ion-col>{{pumpData.ud}}</ion-col>\n          <ion-col>{{liftData.ud}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本月电量(kWh)</ion-col>\n          <ion-col>{{airData.um}}</ion-col>\n          <ion-col>{{pumpData.um}}</ion-col>\n          <ion-col>{{liftData.um}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>本年电量(kWh)</ion-col>\n          <ion-col>{{airData.uy}}</ion-col>\n          <ion-col>{{pumpData.uy}}</ion-col>\n          <ion-col>{{liftData.uy}}</ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="waterType">\n      <my-title [name]="\'用水量\'"></my-title>\n\n      <ion-grid class="self-grid">\n        <ion-row class="first-row">\n          <ion-col col-6>名称</ion-col>\n          <ion-col col-6>总水量</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>本日水量(m³)</ion-col>\n          <ion-col col-6>{{water.ud}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>本月水量(m³)</ion-col>\n          <ion-col col-6>{{water.um}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>本年水量(m³)</ion-col>\n          <ion-col col-6>{{water.uy}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/energy/energy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_chart__["a" /* chartToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* PopoverController */]])
    ], EnergyPage);
    return EnergyPage;
}());

//# sourceMappingURL=energy.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
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




// import { RoomdevicePage } from '../../pages/roomdevice/roomdevice';
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomPage = (function () {
    function RoomPage(navCtrl, navParams, device, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.events = events;
        this.floorStartNumArr = {};
        this.roomStartNumArr = {};
        this.floorResultData = {};
        this.roomResultData = {};
        this.isFirst = true;
        this.device.getFloorDataList().then(function (res) {
            _this.floors = res;
            res.forEach(function (element) {
                _this.floorStartNumArr[element.F_ID] = 0;
            });
            _this.device.getRoomDataList().then(function (res1) {
                _this.rooms = res1;
                res1.forEach(function (element) {
                    _this.roomStartNumArr[element.F_ID] = 0;
                });
                //
                _this.device.getDeviceIDtoRoomaAndFloorID().then(function (res3) {
                    _this.floorAndRoomArr = res3;
                    _this.getFn51Data();
                    _this.isFirst = false;
                });
            });
        });
    }
    RoomPage.prototype.ionViewDidEnter = function () {
        // if (!this.isFirst) {
        //   this.getFn51Data();
        // }
    };
    RoomPage.prototype.getFn51Data = function () {
        var _this = this;
        var data = __WEBPACK_IMPORTED_MODULE_3__providers_model_variable__["a" /* Variable */].GetFnData('51');
        this.getTypeDeviceNum(data);
        this.events.subscribe("FnData:51", function (res) {
            console.log("room-fn51");
            _this.getTypeDeviceNum(res);
        });
    };
    RoomPage.prototype.getTypeDeviceNum = function (data) {
        var floorResult = JSON.parse(JSON.stringify(this.floorStartNumArr));
        var roomResult = JSON.parse(JSON.stringify(this.roomStartNumArr));
        for (var key in data) {
            if (data.hasOwnProperty(key) && Number(key) > 0) {
                var state = data[key];
                var floorAndRoomID = this.floorAndRoomArr[key];
                if (!floorAndRoomID) {
                    continue;
                }
                var floorID = floorAndRoomID[1];
                var roomID = floorAndRoomID[0];
                var element = data[key];
                if (Boolean(element)) {
                    floorResult[floorID]++;
                    roomResult[roomID]++;
                }
            }
        }
        ;
        this.floorResultData = floorResult;
        this.roomResultData = roomResult;
    };
    RoomPage.prototype.goRoomDevice = function (id, name) {
        this.navCtrl.push('RoomdevicePage', { id: id, name: name });
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/room/room.html"*/'<!--\n  Generated template for the RoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>房间</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide>\n      <img src="../../assets/room1.png" />\n    </ion-slide>\n\n    <ion-slide>\n      <h2>二 层</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>三 层</h2>\n    </ion-slide>\n\n  </ion-slides>\n  <ion-list>\n    <ion-item-group *ngFor="let floor of floors">\n      <ion-item-divider sticky>\n        {{floor.F_Name}}\n        <p float-right class="state" style="padding-right: 16px;" >{{roomResultData[floor.F_ID]}}/{{floor.F_DeviceNum}}</p>\n\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let room of rooms" (click)="goRoomDevice(room.F_ID,floor.F_Name+room.F_Name)">\n        <button ion-item *ngIf="room.F_FloorID==floor.F_ID">\n          <div item-start class="start" [ngClass]="room.F_Color">\n            <img src="../../assets/room/{{room.F_Img}}">\n          </div>\n\n          {{room.F_Name}}\n          <p item-end class="state"><span>{{roomResultData[room.F_ID]}}</span>/{{room.F_DeviceNum}}</p>\n        </button>\n      </ion-item-sliding>\n\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/room/room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/barchart/barchart.module": [
		849,
		31
	],
	"../pages/device-setting/curtain-setting/curtain-setting.module": [
		851,
		30
	],
	"../pages/device-setting/door-setting/door-setting.module": [
		850,
		29
	],
	"../pages/device-setting/lift-setting/lift-setting.module": [
		852,
		28
	],
	"../pages/device-setting/pump-eastnorthpool-setting/pump-eastnorthpool-setting.module": [
		853,
		27
	],
	"../pages/device-setting/pump-northcourt-setting/pump-northcourt-setting.module": [
		854,
		26
	],
	"../pages/device-setting/valve-eastcourt-setting/valve-eastcourt-setting.module": [
		855,
		25
	],
	"../pages/device-setting/valve-eastnorthpool-setting/valve-eastnorthpool-setting.module": [
		856,
		24
	],
	"../pages/device-setting/valve-eastpool-setting/valve-eastpool-setting.module": [
		857,
		23
	],
	"../pages/device-setting/valve-northpool-setting/valve-northpool-setting.module": [
		858,
		22
	],
	"../pages/device/device.module": [
		859,
		35
	],
	"../pages/energy-query/energy-query.module": [
		860,
		21
	],
	"../pages/energy/energy.module": [
		861,
		34
	],
	"../pages/linechart/linechart.module": [
		862,
		20
	],
	"../pages/login/login.module": [
		863,
		33
	],
	"../pages/message-history/message-history.module": [
		864,
		19
	],
	"../pages/mode-device-selected-setting/mode-device-selected-setting.module": [
		865,
		18
	],
	"../pages/mode-public-setting/mode-public-setting.module": [
		866,
		17
	],
	"../pages/mode-setting/mode-setting.module": [
		868,
		16
	],
	"../pages/password/password.module": [
		869,
		15
	],
	"../pages/popover/popover.module": [
		867,
		14
	],
	"../pages/room/room.module": [
		870,
		32
	],
	"../pages/roomdevice/roomdevice.module": [
		871,
		13
	],
	"../pages/timer/mode-airseasonson-timer/mode-airseasonson-timer.module": [
		872,
		9
	],
	"../pages/timer/mode-curtain-timer/mode-curtain-timer.module": [
		876,
		8
	],
	"../pages/timer/mode-light-jw-timer/mode-light-jw-timer.module": [
		873,
		7
	],
	"../pages/timer/mode-light-timer/mode-light-timer.module": [
		874,
		6
	],
	"../pages/timer/pump-eastnorthpool-timer/pump-eastnorthpool-timer.module": [
		877,
		12
	],
	"../pages/timer/pump-northcourt-timer/pump-northcourt-timer.module": [
		875,
		5
	],
	"../pages/timer/timer-pump/timer-pump.module": [
		878,
		4
	],
	"../pages/timer/valve-eastcourt-timer/valve-eastcourt-timer.module": [
		879,
		3
	],
	"../pages/timer/valve-eastnorthpool-timer/valve-eastnorthpool-timer.module": [
		880,
		2
	],
	"../pages/timer/valve-eastpool-timer/valve-eastpool-timer.module": [
		881,
		1
	],
	"../pages/timer/valve-northpool-timer/valve-northpool-timer.module": [
		883,
		0
	],
	"../pages/wellpump/wellpump.module": [
		882,
		11
	],
	"../pages/wellpumpquery/wellpumpquery.module": [
		884,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jiguang_ionic_jpush__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//配置文件







var ToolsProvider = (function () {
    function ToolsProvider(storage, events, config, toastCtrl, alertCtrl, vibration, jpush) {
        this.storage = storage;
        this.events = events;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.vibration = vibration;
        this.jpush = jpush;
    }
    //获取用户信息
    ToolsProvider.prototype.getUserName = function () {
        var userinfo = this.storage.get(this.config.userInfoSotrageName);
        if (userinfo && userinfo['username']) {
            return userinfo['username'];
        }
        else {
            return '';
        }
    };
    ToolsProvider.prototype.setUserInfo = function (data) {
        this.storage.set(this.config.userInfoSotrageName, data);
    };
    ToolsProvider.prototype.getNowDateStr = function (type) {
        var now = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        if (type == null)
            return now.format('YYYY-MM-DD HH:mm:ss');
        var result = '';
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Year: {
                result = now.format("YYYY");
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month: {
                result = now.format('YYYY-MM');
                ;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day: {
                result = now.format('YYYY-MM-DD');
                break;
            }
        }
        return result;
    };
    ToolsProvider.prototype.getFullDateStr = function (dateStr, type) {
        if (type == null)
            return dateStr;
        var result = '';
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Year: {
                result = dateStr + '-01-01 00:00:00';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month: {
                result = dateStr + '-01 00:00:00';
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day:
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Hour: {
                result = dateStr + ' 00:00:00';
                break;
            }
        }
        var temp = __WEBPACK_IMPORTED_MODULE_4_moment___default()(result);
        var now = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        if (temp > now) {
            return now.format('YYYY-MM-DD HH:mm:ss');
        }
        else {
            return result;
        }
    };
    ToolsProvider.prototype.getAddDate = function (dateStr, type) {
        var fullDateStr = this.getFullDateStr(dateStr, type);
        var fulDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(fullDateStr);
        var addDate;
        var result = '';
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Year: {
                addDate = fulDate.add(1, 'y');
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month: {
                addDate = fulDate.add(1, 'M');
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day:
            case __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Hour: {
                addDate = fulDate.add(1, 'd');
                break;
            }
        }
        var now = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        if (addDate > now) {
            return now.format('YYYY-MM-DD HH:mm:ss');
        }
        else {
            return addDate.format('YYYY-MM-DD HH:mm:ss');
        }
    };
    ToolsProvider.prototype.getYearAllRange = function () {
        var result = {};
        var now = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
        var startYear = now.year() - 3;
        var stopYear = now.year();
        result.StartTime = startYear;
        result.StopTime = stopYear;
        result.DateType = __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Year;
        return result;
    };
    ToolsProvider.prototype.getYearRange = function (year) {
        var result = {};
        if (year == null) {
            var now_1 = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
            var startYear = now_1.year();
            result.StartTime = startYear + '-01';
            result.StopTime = now_1.format('YYYY-MM');
        }
        else {
            result.StartTime = year + '-01';
            result.StopTime = year + '-12';
        }
        result.DateType = __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month;
        return result;
    };
    ToolsProvider.prototype.getMonthRange = function (year) {
        var result = {};
        if (year == null) {
            var now_2 = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
            result.StartTime = now_2.format('YYYY-MM') + '-01';
            result.StopTime = now_2.format('YYYY-MM-DD');
        }
        else {
            var temp = this.getFullDateStr(year, __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Month);
            var tempDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(temp);
            result.StartTime = tempDate.startOf('month').format("YYYY-MM-DD");
            result.StopTime = tempDate.endOf('month').format("YYYY-MM-DD");
        }
        result.DateType = __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day;
        return result;
    };
    ToolsProvider.prototype.getDayRange = function (day) {
        var result = {};
        if (day == null) {
            var now_3 = __WEBPACK_IMPORTED_MODULE_4_moment___default()();
            result.StartTime = now_3.format('YYYY-MM-DD');
            result.StopTime = now_3.format('YYYY-MM-DD');
        }
        else {
            var temp = this.getFullDateStr(day, __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Day);
            // let tempDate = Moment(temp);
            result.StartTime = day;
            result.StopTime = day;
        }
        result.DateType = __WEBPACK_IMPORTED_MODULE_5__providers_model_enumdata__["b" /* EnumDateType */].Hour;
        return result;
    };
    ToolsProvider.prototype.presentToast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ToolsProvider.prototype.getTimeStrByMin = function (min) {
        if (min) {
            var hour = Math.floor(min / 60);
            var minute = min % 60;
            return this.getTime(hour.toString(), minute.toString());
        }
        else {
            return this.getTime("0", "0");
        }
    };
    /**
     * 将小时、分钟转换成字符串 00:00
     * @param hour
     * @param minute
     */
    ToolsProvider.prototype.getTime = function (hour, minute) {
        var str = (hour ? hour : 0) + ": " + (minute ? minute : 0);
        return __WEBPACK_IMPORTED_MODULE_4_moment___default()(str, "HH:mm").format("HH:mm");
    };
    /**
     * 将 00:00字符串 转换成分钟
     * @param timeStr
     */
    ToolsProvider.prototype.getMinuteByTime = function (timeStr) {
        var time = __WEBPACK_IMPORTED_MODULE_4_moment___default()(timeStr, "HH:mm");
        var hour = time.hours();
        var minute = time.minutes();
        return hour * 60 + minute;
    };
    ToolsProvider.prototype.getSendControl = function (data) {
        var num = 0;
        var arr = new Array();
        for (var item in data) {
            var temp = data[item];
            if (temp instanceof Array) {
                temp.forEach(function (ele) {
                    arr.push(ele);
                });
            }
            else {
                if (!Number(temp)) {
                    temp = 0;
                }
                arr.push(temp);
            }
        }
        var addNum = 18 - arr.length;
        while (addNum-- > 0) {
            arr.push(0);
        }
        return arr.join(',');
    };
    ToolsProvider.prototype.getArrayByFnData = function (fnData, fnID, startID, num) {
        var result = [];
        for (var i = 0; i < num; i++) {
            var data = fnData["F" + fnID + (startID + i)];
            result.push(data);
        }
        return result;
    };
    ToolsProvider.prototype.getArrayByOneFnData = function (fnData, fnID, startID) {
        var result = [];
        var data = fnData["F" + fnID + startID];
        if (data) {
            var temp = this.convertToBinary(data);
            result[0] = temp[0].toString();
            result[1] = temp[6].toString();
            result[2] = temp[5].toString();
            result[3] = temp[4].toString();
            result[4] = temp[3].toString();
            result[5] = temp[2].toString();
            result[6] = temp[1].toString();
        }
        // result.push(data);
        return result;
    };
    ToolsProvider.prototype.getNumberByArr = function (data) {
        var result = 0;
        if (!data)
            return result;
        var temp = [];
        temp[0] = data[0];
        temp[1] = data[6];
        temp[2] = data[5];
        temp[3] = data[4];
        temp[4] = data[3];
        temp[5] = data[2];
        temp[6] = data[1];
        var length = temp.length;
        for (var index = 0; index < length; index++) {
            var element = temp[index];
            if (element >= 1) {
                result += Math.pow(2, length - 1 - index);
            }
        }
        return result;
    };
    ToolsProvider.prototype.convertToBinary = function (num) {
        var result = [];
        while (num != 0) {
            result.push(num % 2);
            num = Math.floor(num / 2);
        }
        result.reverse();
        while (result.length < 7) {
            result.unshift(0);
        }
        return result;
    };
    ToolsProvider.prototype.presentAlarmAlert = function (data, title) {
        var alert = this.alertCtrl.create({
            title: title ? title : "\u62A5\u8B66\u4FE1\u606F<img />",
            // subTitle: ,
            cssClass: "alarm",
            message: "\n      <div class='message'>" + data + "</div>",
            buttons: ['关闭']
        });
        alert.present();
    };
    ToolsProvider.prototype.vibrate = function () {
        var state = this.getVibrate();
        if (state == true) {
            this.vibration.vibrate(1000);
        }
    };
    ToolsProvider.prototype.setVibrate = function (state) {
        this.storage.set("vibrate", state);
        this.vibrate();
    };
    ToolsProvider.prototype.getVibrate = function () {
        var data = this.storage.get("vibrate");
        if (data == null) {
            return true;
        }
        else {
            return data;
        }
    };
    ToolsProvider.prototype.getRegistrationID = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var registrationid = _this.storage.get("smarthomenew-registrationid");
            if (registrationid) {
                resolve(registrationid);
            }
            else {
                _this.jpush.getRegistrationID().then(function (res) {
                    _this.storage.set("smarthomenew-registrationid", res);
                    resolve(res);
                }, function (err) {
                    resolve("");
                });
            }
        });
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_7__jiguang_ionic_jpush__["a" /* JPush */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginRequestsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceRequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_enumdata__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socketHelper__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_model_variable__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginRequestsProvider = (function () {
    function LoginRequestsProvider(tools, http, events, storage, config, toastCtrl, socket) {
        this.tools = tools;
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.socket = socket;
    }
    /**
  * 登录
  * @param 用户名
  * @param 密码
  */
    LoginRequestsProvider.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tools.getRegistrationID().then(function (res) {
                var params = {
                    'txtUser': username,
                    'txtPwd': password,
                    'AppKey': '6363cbe1d9878f0821c50e26',
                    'RegistrationId': res,
                };
                _this.http.post("/EnergyAppLogin/LoginCheck", params).then(function (res) {
                    if (res["State"] == true) {
                        var userInfo = res["UserInfo"];
                        userInfo['txtUser'] = username;
                        userInfo['txtPwd'] = password;
                        _this.tools.setUserInfo(userInfo);
                        _this.events.publish('user:created', userInfo['username'], Date.now());
                        _this.socket.startSocket(); //启动websocket
                        __WEBPACK_IMPORTED_MODULE_8__providers_model_variable__["a" /* Variable */].socketObject = _this.socket;
                        //this.getTipAlarmList();
                        //获取震动状态
                        var vibrateState = _this.tools.getVibrate();
                        _this.events.publish("vibrate", vibrateState);
                        resolve(true);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: res["Msg"],
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        reject(false);
                    }
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    LoginRequestsProvider.prototype.autoLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userinfo = _this.storage.get(_this.config.userInfoSotrageName);
            if (userinfo == null) {
                reject();
            }
            else {
                var username = userinfo["txtUser"];
                var userpwd = userinfo["txtPwd"];
                _this.login(username, userpwd).then(function (res) {
                    resolve();
                }, function (err) {
                    reject();
                });
            }
        });
    };
    LoginRequestsProvider.prototype.removeUserInfo = function () {
        var _this = this;
        this.tools.getRegistrationID().then(function (res) {
            var params = {
                'RegistrationId': res,
            };
            _this.http.post("/EnergyAppLogin/RemoveLogin", params).then(function (res) { });
        });
        this.storage.remove(this.config.userInfoSotrageName); //
        //移除FnData
        __WEBPACK_IMPORTED_MODULE_8__providers_model_variable__["a" /* Variable */].ClearAll();
        this.socket.closeSocket();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* Nav */])
    ], LoginRequestsProvider.prototype, "nav", void 0);
    LoginRequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["z" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__socketHelper__["a" /* SocketHelpProvider */]])
    ], LoginRequestsProvider);
    return LoginRequestsProvider;
}());

var DeviceRequestsProvider = (function () {
    function DeviceRequestsProvider(tools, http) {
        this.tools = tools;
        this.http = http;
    }
    /**
  * 获取设备模式列表
  */
    DeviceRequestsProvider.prototype.getDeviceMode = function () {
        return this.http.postMain('/EnergyAppData/GetDeviceModeDataList', {}, false);
    };
    /**
  * 获取设备列表
  */
    DeviceRequestsProvider.prototype.getDeviceDataList = function () {
        return this.http.postMain('/EnergyAppData/GetDevicesDataList');
    };
    DeviceRequestsProvider.prototype.getDeviceTypeDataList = function () {
        return this.http.postMain("/EnergyAppData/GetDeviceTypeDataList", {}, false);
    };
    DeviceRequestsProvider.prototype.getFloorDataList = function () {
        return this.http.postMain("/EnergyAppData/GetFloorDataList", {}, false);
    };
    DeviceRequestsProvider.prototype.getRoomDataList = function () {
        return this.http.postMain("/EnergyAppData/GetRoomDataList", {}, false);
    };
    DeviceRequestsProvider.prototype.getDeviceDataListByRoomID = function (roomID) {
        return this.http.postMain('/EnergyAppData/GetDevicesDataListByRoomID', { "RoomID": roomID });
    };
    DeviceRequestsProvider.prototype.getDeviceDataListByTypeID = function (typeID) {
        return this.http.postMain('/EnergyAppData/GetDevicesDataListByTypeID', { "TypeID": typeID });
    };
    DeviceRequestsProvider.prototype.getWaterlevelMapChartData = function (StartTime, StopTime, type) {
        var temp = {};
        if (type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].FH) {
            temp = {
                index: '4',
                FnID: '50',
                dateType: 'day'
            };
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].WellPump) {
            temp = {
                index: '9',
                FnID: '52',
                dateType: ''
            };
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].Air) {
            temp = {
                index: '5',
                FnID: '50',
                dateType: 'day'
            };
        }
        var params = {
            MonitorID: 1,
            SortIndex: temp.index,
            StartTime: StartTime,
            StopTime: StopTime,
            DateType: temp.dateType,
            FnID: temp.FnID
        };
        return this.http.postMain('/EnergyAppData/GetLineChartData', params);
    };
    DeviceRequestsProvider.prototype.getEnergyChartData = function (data) {
        var index = '';
        if (data.Type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].EleFull) {
            index = '1,2,3';
        }
        else if (data.Type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].Ele) {
            index = '1';
        }
        else if (data.Type == __WEBPACK_IMPORTED_MODULE_6__model_enumdata__["a" /* EnumChartType */].Water) {
            index = '10';
        }
        var params = {
            MonitorID: 1,
            SortIndex: index,
            StartTime: data.StartTime,
            StopTime: data.StopTime,
            DateType: data.DateType,
            FnID: '52'
        };
        return this.http.postMain('/EnergyAppData/GetBarChartData', params);
    };
    DeviceRequestsProvider.prototype.getAlarmDataList = function (isLoading) {
        if (isLoading === void 0) { isLoading = true; }
        return this.http.postMain("/EnergyAppData/GetAlarmDataList", {}, isLoading);
    };
    DeviceRequestsProvider.prototype.getAlarmHistoryDataList = function (startTime, stopTime, alarmType) {
        var params = {
            StartTime: startTime,
            StopTime: stopTime,
            AlarmType: alarmType
        };
        return this.http.postMain("/EnergyAppData/GetAlarmHistoryDataList", params);
    };
    DeviceRequestsProvider.prototype.setAlarmState = function (id) {
        this.http.postMain("/EnergyAppData/SetAlarmState", { ID: id });
    };
    DeviceRequestsProvider.prototype.getAlarmTypeDataList = function () {
        return this.http.postMain("/EnergyAppData/GetAlarmType");
    };
    DeviceRequestsProvider.prototype.GetDeviceModeDetailDatas = function (modeID) {
        return this.http.postMain("/EnergyAppData/GetDeviceModeDetailDatas", { ModeID: modeID });
    };
    DeviceRequestsProvider.prototype.setModeDetail = function (mode, data) {
        var params = {
            'ModeID': mode.F_ID,
            'ModeName': mode.F_Name,
            'F_SecurityRun': mode.F_SecurityRun,
            'AgreementID': mode.F_AgreementID,
            'IsEdit': true,
            'Data': JSON.stringify(data)
        };
        return this.http.postMain("/EnergyAppData/SetModeDetail", params);
    };
    DeviceRequestsProvider.prototype.getWeatherInfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var oldData = _this.tools.storage.get("weather");
            var url = "https://free-api.heweather.com/s6/weather/now?parameters&location=auto_ip&key=bf803ac931bc48ac8249de2024199c64";
            _this.http.get(url).then(function (res) {
                var weatherInfo = res.HeWeather6[0];
                if (weatherInfo && weatherInfo.status == 'ok') {
                    var weather = {
                        temperature: weatherInfo.now.tmp,
                        humidity: weatherInfo.now.hum,
                        cond_txt: weatherInfo.now.cond_txt,
                        wind_dir: weatherInfo.now.wind_dir,
                        wind_sc: weatherInfo.now.wind_sc,
                        location: weatherInfo.basic.location,
                        pcpn: weatherInfo.now.pcpn,
                        weatherCode: weatherInfo.now.cond_code
                    };
                    if (!isNaN(weather.wind_sc)) {
                        weather.wind_sc = weather.wind_sc + "级";
                    }
                    var oldData_1 = _this.tools.storage.get("weather");
                    _this.tools.storage.set("weather", weather);
                    resolve(weather);
                }
                else {
                    if (oldData)
                        resolve(oldData);
                }
                ;
            });
        });
    };
    DeviceRequestsProvider.prototype.checkPassword = function (pwd) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = {
                'txtUser': _this.tools.getUserName(),
                'txtPwd': pwd
            };
            _this.http.post("/EnergyAppLogin/LoginCheck", params).then(function (res) {
                if (res["State"] == true) {
                    resolve(true);
                }
                else {
                    _this.tools.presentToast(res["Msg"]);
                }
            });
        });
    };
    DeviceRequestsProvider.prototype.setNewPassword = function (pwd, newpwd) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = {
                'txtUser': _this.tools.getUserName(),
                'txtPwd': pwd,
                'txtPwdNew': newpwd
            };
            _this.http.post("/EnergyAppLogin/PasswordSetting", params).then(function (res) {
                if (res.Success) {
                    resolve(true);
                }
                else {
                    _this.tools.presentToast("设置失败！");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DeviceRequestsProvider.prototype.getSpeechDataList = function (data) {
        return this.http.postMain("/EnergyAppData/GetSpeechDataList", { Data: data });
    };
    DeviceRequestsProvider.prototype.getDeviceIDtoTypeID = function () {
        return this.http.postMain("/EnergyAppData/GetDeviceIDtoTypeID");
    };
    DeviceRequestsProvider.prototype.getDeviceIDtoRoomaAndFloorID = function () {
        return this.http.postMain("/EnergyAppData/GetDeviceIDtoRoomaAndFloorID");
    };
    DeviceRequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], DeviceRequestsProvider);
    return DeviceRequestsProvider;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Variable; });
var Variable = (function () {
    function Variable() {
    }
    Variable.GetFnData = function (id, key) {
        if (this.FnData[id] != null) {
            if (key) {
                return this.FnData[id][key];
            }
            else {
                return this.FnData[id];
            }
        }
        else {
            if (key) {
                return '';
            }
            else {
                return {};
            }
        }
    };
    Variable.SetFnData = function (id, data) {
        this.FnData[id] = data;
    };
    Variable.ClearAll = function () {
        this.FnData = {};
    };
    Variable.FnData = {};
    return Variable;
}());

//# sourceMappingURL=variable.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketHelpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ws__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketHelpProvider = (function () {
    function SocketHelpProvider(tools, events, socket, loadingCtrl) {
        this.tools = tools;
        this.events = events;
        this.socket = socket;
        this.loadingCtrl = loadingCtrl;
        this.loading = null;
    }
    /**
       * 启动websocket
       */
    SocketHelpProvider.prototype.startSocket = function () {
        var _this = this;
        // this.events.publish("FnData:51");
        // this.events.publish("FnData:50");
        // this.events.publish("FnData:54");
        this.socket.createObservableSocket(this.tools.getUserName()).subscribe(function (res) {
            _this.socketMessageHandle(res);
        }, function (err) {
            setTimeout(function () {
                _this.startSocket();
            }, 1000);
        }, function () {
            setTimeout(function () {
                _this.startSocket();
            }, 1000);
        });
        // Variable.socketObject = this.socket;
    };
    SocketHelpProvider.prototype.closeSocket = function () {
        this.socket.ws.close();
        clearInterval(this.interval);
        for (var key in this.events["_channels"]) {
            if (this.events["_channels"].hasOwnProperty(key)) {
                if (key !== 'user:created' && key !== 'vibrate') {
                    delete this.events["_channels"][key];
                }
            }
        }
    };
    SocketHelpProvider.prototype.setDeviceState = function (id, name, state, speech) {
        var param = {
            Type: 'set',
            UserName: this.tools.getUserName(),
            MonitorID: 1,
            DeviceID: id,
            SetState: state
        };
        this.socket.sendMessage(param);
        this.tools.vibrate();
        this.presentLoading(name, "51");
        __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice = {
            id: id,
            state: state,
            name: name,
            speech: speech,
            type: 'device'
        };
    };
    SocketHelpProvider.prototype.initTTSconfig = function (data) {
        Baiduasrtts.initTTSconfig(function (e) { }, function (r) { });
        Baiduasrtts.synthesizeSpeech("" + data, function (e) { }, function (r) { });
    };
    SocketHelpProvider.prototype.speechDevice = function (controlData, success) {
        if (success === void 0) { success = true; }
        var statestr = "";
        if (controlData.speech) {
            if (controlData.type === 'model') {
                statestr = "打开";
            }
            else {
                switch (Number(controlData.state)) {
                    case 0: {
                        statestr = "关闭";
                        break;
                    }
                    case 1: {
                        statestr = "打开";
                        break;
                    }
                    case 2: {
                        statestr = "停止";
                        break;
                    }
                }
            }
            var message = "" + controlData.name + statestr + (success == true ? "成功" : "失败");
            this.initTTSconfig(message);
        }
    };
    SocketHelpProvider.prototype.setTimer = function (data, name) {
        if (name === void 0) { name = "定时"; }
        this.presentLoading(name);
        var controlData = this.tools.getSendControl(data);
        var param = {
            Type: 'set',
            UserName: this.tools.getUserName(),
            MonitorID: 1,
            FnID: 41,
            controlData: controlData
        };
        console.log(param);
        this.socket.sendMessage(param);
    };
    SocketHelpProvider.prototype.setMode = function (id, name, speech) {
        if (speech === void 0) { speech = false; }
        this.presentLoading(name);
        this.tools.vibrate();
        var param = {
            Type: 'set',
            UserName: this.tools.getUserName(),
            MonitorID: 1,
            FnID: 41,
            controlData: "3," + id,
            speech: speech
        };
        // console.log(param);
        this.socket.sendMessage(param);
        __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice = {
            id: '-2',
            state: id,
            name: name,
            speech: speech,
            type: 'model'
        };
    };
    SocketHelpProvider.prototype.setModeDetail = function (agreementID) {
        this.presentLoading("保存中...");
        var param = {
            Type: 'setmode',
            UserName: this.tools.getUserName(),
            MonitorID: 1,
            ControlData: agreementID
        };
        this.socket.sendMessage(param);
    };
    SocketHelpProvider.prototype.presentLoading = function (content, fnID) {
        var _this = this;
        this.dismissLoading();
        this.loading = this.loadingCtrl.create({
            content: content
        });
        this.loading.present();
        this.timeout = setTimeout(function () {
            var controlData = __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice;
            if (controlData) {
                _this.speechDevice(controlData, false);
            }
            _this.tools.presentToast("设置超时");
            _this.dismissLoading();
            //重新获取状态
            if (fnID) {
                _this.getFnData(fnID);
            }
            if (__WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice) {
                __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice = null;
            }
        }, 30000);
    };
    SocketHelpProvider.prototype.getFnData = function (fnID) {
        var param = {
            Type: 'get',
            UserName: this.tools.getUserName(),
            MonitorID: 1,
            FnID: fnID
        };
        this.socket.sendMessage(param);
    };
    SocketHelpProvider.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = null;
        clearTimeout(this.timeout);
        if (__WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice) {
            __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice = null;
        }
    };
    SocketHelpProvider.prototype.socketMessageHandle = function (data) {
        // console.log(data);
        switch (data.Type) {
            case 'get':
                {
                    var dealData = data.Data;
                    if (data.FnID == '51') {
                        this.getAuto(data.Data); //获取手自动状态
                        dealData = this.checkDeviceComplateState(dealData);
                        // this.getDeviceOpenNum(dealData);
                    }
                    __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].SetFnData(data.FnID, dealData);
                    this.events.publish("FnData:" + data.FnID, dealData);
                    break;
                }
            case 'set':
                {
                    switch (data.FnID) {
                        case 40://设备设置
                            {
                                break;
                            }
                        case 41://模式和定时设置
                            {
                                var controlData = __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice;
                                if (!data.Result) {
                                    this.tools.presentToast(data.Msg);
                                    this.speechDevice(controlData, false);
                                    this.dismissLoading();
                                }
                                else {
                                    if (controlData) {
                                        if (controlData.type === 'model') {
                                        }
                                        else {
                                            this.dismissLoading();
                                        }
                                    }
                                    else {
                                        this.dismissLoading();
                                    }
                                }
                                break;
                            }
                    }
                    // showSetInfo(data);
                    break;
                }
            case 'login':
                {
                    // unRefreshArr = {};
                    if (data.Result === true) {
                    }
                    break;
                }
            case 'alarm':
                {
                    // this.popupAlarmMessage(data.Data.F_AlarmText);
                    break;
                }
            case "setmode": {
                if (!data.Result) {
                    this.tools.presentToast(data.Msg);
                }
                this.dismissLoading();
                break;
            }
        }
        ;
    };
    /**
     * 私有函数
     */
    SocketHelpProvider.prototype.getAuto = function (data) {
        var auto = data['0'] == '0' ? true : false;
        __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].isAuto = auto;
        this.events.publish("FnData:isAuto", auto);
        // console.log("auto",auto);
        // if(auto){
        //     this.tools.presentToast("当前位手动模式，设备不可控");
        // }
    };
    SocketHelpProvider.prototype.checkDeviceComplateState = function (dealData) {
        var controlData = __WEBPACK_IMPORTED_MODULE_1__providers_model_variable__["a" /* Variable */].controlDevice;
        if (controlData) {
            if (controlData.state == dealData[controlData.id]) {
                this.dismissLoading();
                this.speechDevice(controlData);
            }
            else {
                dealData[controlData.id] = controlData.state;
            }
        }
        return dealData;
    };
    SocketHelpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ws__["a" /* WebSocketProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* LoadingController */]])
    ], SocketHelpProvider);
    return SocketHelpProvider;
}());

//# sourceMappingURL=socketHelper.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {observable} from "rxjs/symbol/observable";


var WebSocketProvider = (function () {
    function WebSocketProvider(config, loadingCtrl) {
        this.config = config;
        this.loadingCtrl = loadingCtrl;
    }
    WebSocketProvider.prototype.createObservableSocket = function (username) {
        var _this = this;
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.ws = new WebSocket(this.config.websocketUrl);
        this.ws.onopen = function (d) {
            var data = {
                type: 'login',
                UserName: username
            };
            _this.sendMessage(data);
            _this.dismissLoading();
        };
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observable) {
            _this.ws.onmessage = function (event) { return observable.next(JSON.parse(event.data)); };
            _this.ws.onerror = function (event) {
                _this.presentLoading();
                observable.error(event);
            };
            _this.ws.onclose = function (event) {
                _this.presentLoading();
                observable.complete();
            };
        });
    };
    WebSocketProvider.prototype.presentLoading = function () {
        if (this.loading) {
        }
        else {
            this.dismissLoading();
            this.loading = this.loadingCtrl.create({
                content: "连接中..."
            });
            this.loading.present();
        }
    };
    WebSocketProvider.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = null;
    };
    WebSocketProvider.prototype.sendMessage = function (message) {
        this.ws.send(JSON.stringify(message));
    };
    WebSocketProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* LoadingController */]])
    ], WebSocketProvider);
    return WebSocketProvider;
}());

//# sourceMappingURL=ws.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
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





// import { WellpumpqueryPage } from '../wellpumpquery/wellpumpquery';
// import { PopoverPage } from '../popover/popover';

var MessagePage = (function () {
    function MessagePage(navCtrl, http, device, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.device = device;
        this.popoverCtrl = popoverCtrl;
        this.typeDataList = [];
    }
    MessagePage.prototype.loadDataList = function () {
        var _this = this;
        this.device.getAlarmDataList().then(function (res) {
            _this.messagelists = res;
        });
    };
    MessagePage.prototype.ionViewDidEnter = function () {
        this.loadDataList();
        this.getAlarmTypeDataList();
    };
    MessagePage.prototype.setState = function (id) {
        this.device.setAlarmState(id);
        this.loadDataList();
    };
    MessagePage.prototype.getAlarmTypeDataList = function () {
        var _this = this;
        this.device.getAlarmTypeDataList().then(function (res) {
            _this.typeDataList = res;
            console.log(res);
        });
    };
    MessagePage.prototype.showPopover = function (myEvent) {
        var popoverList = [];
        this.typeDataList.forEach(function (element) {
            popoverList.push({
                name: element.F_Name,
                page: 'WellpumpqueryPage',
                type: __WEBPACK_IMPORTED_MODULE_4__providers_model_enumdata__["a" /* EnumChartType */].Message,
                data: element
            });
        });
        //   { name: '用电量查询', page: EnergyQueryPage, type: EnumChartType.Ele },
        //   { name: '电负荷查询', page: WellpumpqueryPage, type: EnumChartType.FH },
        //   { name: '空调负荷查询', page: WellpumpqueryPage, type: EnumChartType.Air },
        // ];
        var popover = this.popoverCtrl.create('PopoverPage', { list: popoverList });
        popover.present({
            ev: myEvent
        });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/message/message.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      消息\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of messagelists">\n      <div>\n        <span class="biaoqian color8" margin-right>报警</span>{{item.F_AlarmText}}\n        <p class="p">{{item.F_AlarmTimeStr}}</p>\n      </div>\n      <button ion-button clear small item-end (click)="setState(item.F_ID)">已阅</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/message/message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* PopoverController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_speechHelper__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jiguang_ionic_jpush__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ModePublicSettingPage } from '../mode-public-setting/mode-public-setting';
// import { ModeSettingPage } from '../mode-setting/mode-setting';




var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, modalCtrl, events, deviceRequest, alertCtrl, tools, speech, el, jpush, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.deviceRequest = deviceRequest;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
        this.speech = speech;
        this.el = el;
        this.jpush = jpush;
        this.device = device;
        this.modeDataList = [];
        this.weatherinfo = {};
        this.homeType = 'mode';
        this.oneData = { ud: 0, um: 0, uy: 0 };
        this.deviceRequest.getWeatherInfo().then(function (res) {
            // console.log(res);
            _this.weatherinfo = res;
        });
    }
    HomePage.prototype.scan = function () {
        this.speech.startSpeech();
    };
    HomePage.prototype.getEnergyDataFn50 = function (data) {
        if (data && data.F504) {
            this.power = data.F504;
        }
    };
    HomePage.prototype.getEnergyDataFn54 = function (data) {
        if (data && data.F541) {
            var f541Arr = data.F541.split(',');
            this.oneData = {
                ud: f541Arr[0],
                um: f541Arr[1],
                uy: f541Arr[2]
            };
        }
    };
    HomePage.prototype.fnDataSubscribe = function () {
        var _this = this;
        // console.log("fnDataSubscribe");
        this.modeID = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('51', '-2');
        this.events.subscribe("FnData:51", function (data) {
            // console.log("home-fn51");
            if (data) {
                _this.modeID = data['-2'];
            }
        });
        this.getEnergyDataFn50(__WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('50'));
        this.events.subscribe("FnData:50", function (res) {
            console.log("home-fn50");
            _this.getEnergyDataFn50(res);
        });
        this.getEnergyDataFn50(__WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].GetFnData('54'));
        this.events.subscribe("FnData:54", function (res) {
            _this.getEnergyDataFn54(res);
        });
    };
    HomePage.prototype.ionViewDidLeave = function () {
        // console.log("ionViewWillLeave");
        // this.events.unsubscribe("FnData:51", () => { });
        // this.events.unsubscribe("FnData:50", () => { });
        // this.events.unsubscribe("FnData:54", () => { });
    };
    HomePage.prototype.ionViewWillUnload = function () {
        // console.log("ionViewWillUnload");
    };
    HomePage.prototype.ionViewDidEnter = function () {
        // this.fnDataSubscribe();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var headerHeight = this.header._elementRef.nativeElement.clientHeight;
        var height = Number(headerHeight) + 150;
        this.el.nativeElement.querySelector('.scroll-content').style.paddingTop = height + "px";
        // this.scan();
        this.deviceRequest.getWeatherInfo().then(function (res) {
            _this.weatherinfo = res;
        });
        this.deviceRequest.getDeviceMode().then(function (res) {
            _this.modeDataList = res;
        }, function (err) { });
        this.fnDataSubscribe();
    };
    HomePage.prototype.goModePublicSetting = function () {
        this.navCtrl.push('ModePublicSettingPage');
    };
    HomePage.prototype.goModeSetting = function (mode) {
        this.navCtrl.push('ModeSettingPage', { mode: mode });
    };
    HomePage.prototype.setMode = function (id, name) {
        var auto = __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].isAuto;
        if (auto) {
            // alert("手动模式，不可控");
            // this.alertCtrl.create({
            //   title: '提示！',
            //   cssClass: "alarm",
            //   message:'手动模式，不可控！',
            //   buttons: ['OK']
            // }).present();
            this.tools.presentAlarmAlert("手动模式，不可控", "提示");
            return;
        }
        this.presentConfirm(name).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2__providers_model_variable__["a" /* Variable */].socketObject.setMode(id, name);
        });
    };
    HomePage.prototype.presentConfirm = function (name) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.alertCtrl.create({
                title: '确认',
                message: "\u8BBE\u4E3A " + name + "?",
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: '确认',
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    HomePage.prototype.scrollEvent = function (e) {
        if (e.scrollTop <= 200) {
            this.header._elementRef.nativeElement.style.backgroundColor = "rgba(71,105,163,0)";
            ;
            var opacity = e.scrollTop / 200; //设置滚动距离300的时候导航栏消失
            var color = "rgba(71,105,163," + opacity + ")";
            this.homeHeaderContent.nativeElement.style.backgroundColor = color;
        }
        else {
            this.header._elementRef.nativeElement.style.backgroundColor = "rgba(71,105,163,1)";
            ;
        }
    };
    HomePage.prototype.addLocalNotification = function () {
        if (this.device.platform == "Android") {
            this.jpush.addLocalNotification(0, "Hello JPush", "JPush", 1, 5000);
        }
        else {
            this.jpush.addLocalNotificationForIOS(1, "Hello JPush", 1, "localNoti1");
            this.jpush.getRegistrationID().then(function (res) {
                alert(res);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Header */]),
        __metadata("design:type", Object)
    ], HomePage.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("homeHeaderContent"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "homeHeaderContent", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-toolbar transparent>\n    <button ion-button icon-only menuToggle>\n      <ion-icon class="user"></ion-icon>\n\n    </button>\n    <ion-title>家居智慧能源管理</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="scan()" tappable end style="color:white">\n        <ion-icon name="barcode-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content (ionScroll)="scrollEvent($event)">\n\n  <div class="home-header">\n    <div #homeHeaderContent class="home-header-content">\n      <ion-row>\n        <ion-col col-6 text-left class="col-left">\n          <div class="city">{{weatherinfo.location}}</div>\n          <p no-margin>{{weatherinfo.temperature}}°C | {{weatherinfo.cond_txt}}</p>\n\n        </ion-col>\n        <!-- <ion-col col-6 text-right class=\'col-right\'> -->\n        <!-- <div class="header-right" float-right>111</div> -->\n        <!-- 功率:0.026kW\n              <p no-margin>日:0.6度</p>\n              <p no-margin>月:58.7度</p>\n              <p no-margin>年:145.4度</p> -->\n\n        <!-- </ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col class=\'col-right\'>\n          <img src="../../assets/home/power.png" />功率:{{power}}kW &nbsp; <img src="../../assets/home/energy.png " />\n          日/月/年:{{oneData.ud+" / "+oneData.um+" / "+oneData.uy+""}}\n\n        </ion-col>\n        <!-- <p></p> -->\n      </ion-row>\n\n\n\n    </div>\n    <!-- <div class="weather">\n      <p><span class="degree">{{weatherinfo.temperature}}°</span>{{weatherinfo.cond_txt}}</p>\n      <span class="city">{{weatherinfo.location}}</span>\n    </div>\n    <div class="weather-bottom ion-grid">\n      <ion-row>\n        <ion-col col-6>湿度：<span class="">{{weatherinfo.humidity}}%</span></ion-col>\n        <ion-col col-6>风速：<span class="">{{weatherinfo.wind_dir}}{{weatherinfo.wind_sc}}</span></ion-col>\n      </ion-row>\n    </div> -->\n  </div>\n  <ion-list no-padding no-margin>\n    <!-- <ion-item-group> -->\n    <ion-item-divider sticky no-padding style="background:white">\n      <ion-segment [(ngModel)]="homeType">\n        <ion-segment-button value="mode">\n          模式\n        </ion-segment-button>\n        <ion-segment-button value="setting">\n          设置\n        </ion-segment-button>\n      </ion-segment>\n    </ion-item-divider>\n\n    <ion-item-sliding no-padding no-margin>\n      <ion-item no-padding no-margin style="background-color:#f7f7f7">\n        <!-- {{homeType}} -->\n\n        <div [ngSwitch]="homeType">\n          <div *ngSwitchCase="\'mode\'">\n            <div class="home-main">\n\n              <ion-grid>\n\n                <ion-row>\n                  <ion-col col-6 *ngFor="let mode of modeDataList">\n                    <ion-card class="mode-card" [ngClass]="{\'mode-card-selected\': modeID==mode.F_AgreementID}">\n                      <ion-card-header no-padding>\n                        <div style="width: 25%;float: left;" *ngIf="modeID==mode.F_AgreementID">\n                          <div class="now">\n                            当前\n                          </div>\n                        </div>\n                        <button ion-button clear small float-right (click)="goModeSetting(mode)">\n                          <ion-icon name=\'settings\'></ion-icon>\n                        </button>\n                      </ion-card-header>\n                      <ion-card-content (click)="setMode(mode.F_AgreementID,mode.F_Name)">\n                        <img src="../assets/img/home/icon-mode/{{mode.F_Img}}">\n                        <h3 ion-text style="font-size: 1.6rem;">{{mode.F_Name}} </h3>\n                      </ion-card-content>\n                    </ion-card>\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n\n\n            </div>\n          </div>\n\n          <div *ngSwitchCase="\'setting\'" class="my-list">\n            <!-- <button ion-button (click)="addLocalNotification()">jpush</button> -->\n            <!-- <ion-list class="my-list"> -->\n            <ion-item (click)="goModePublicSetting()" no-padding>\n              <div item-start class="start c5">\n                <img src=\'../../assets/home/publicsetting.png\'>\n              </div>\n              模式公共设置\n              <ion-icon name="arrow-forward" item-end></ion-icon>\n            </ion-item>\n\n            <!-- </ion-list> -->\n          </div>\n\n\n\n        </div>\n\n      </ion-item>\n    </ion-item-sliding>\n\n    <!-- </ion-item-group> -->\n  </ion-list>\n\n  <!-- <ion-item>\n    <ion-label>Sam</ion-label>\n    <ion-toggle [(ngModel)]="deviceData[\'35\']"></ion-toggle>\n  </ion-item> -->\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools_speechHelper__["a" /* SpeechHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_6__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechHelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_variable__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Variable } from '../../providers/model/variable';




var SpeechHelperProvider = (function () {
    function SpeechHelperProvider(tools, events, loadingCtrl, device) {
        this.tools = tools;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.isfirst = true;
        try {
            if (Baiduasrtts) {
                Baiduasrtts.startSpeechRecognize(null, function (e) {
                }, function (r) {
                });
            }
        }
        catch (err) {
        }
    }
    SpeechHelperProvider.prototype.ngOnInit = function () {
    };
    SpeechHelperProvider.prototype.presentLoadingCustom = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: '语音识别中'
        });
        this.loading.present();
        this.timeout = setTimeout(function () {
            if (_this.loading != null) {
                _this.loading.dismiss();
                _this.initTTSconfig("语音识别失败！");
                _this.tools.presentToast("语音识别失败！");
            }
        }, 10000);
    };
    SpeechHelperProvider.prototype.dismissLoading = function () {
        if (this.loading != null) {
            this.loading.dismiss();
            this.loading = null;
            clearTimeout(this.timeout);
        }
    };
    SpeechHelperProvider.prototype.startSpeech = function () {
        this.startSpeechRecognize();
        // if (this.isfirst) {
        //   this.startSpeechRecognize();
        //     this.isfirst = false;
        // }
    };
    SpeechHelperProvider.prototype.startSpeechRecognize = function () {
        var _this = this;
        // 开启语音识别
        Baiduasrtts.startSpeechRecognize(null, function (e) {
        }, function (r) {
        });
        // 开启语音识别
        // 语音识别事件监听
        Baiduasrtts.addEventListener(function (res) {
            // res参数都带有一个type
            if (!res) {
                return;
            }
            switch (res.type) {
                case "asrReady": {
                    // 识别工作开始，开始采集及处理数据
                    // document.getElementById('v_status').innerHTML = "识别工作开始，开始采集及处理数据";
                    _this.presentLoadingCustom();
                    break;
                }
                case "asrBegin": {
                    // 检测到用户开始说话
                    // document.getElementById('v_status').innerHTML = "检测到用户开始说话"
                    //  alert("检测到用户开始说话");
                    break;
                }
                case "asrEnd": {
                    // 本地声音采集结束，等待识别结果返回并结束录音
                    // this.initTTSconfig(this.speakText);
                    // document.getElementById('v_status').innerHTML = "本地声音采集结束，等待识别结果返回并结束录音"
                    //  alert("本地声音采集结束，等待识别结果返回并结束录音");
                    break;
                }
                case "asrText": {
                    // 语音识别结果
                    // alert(JSON.stringify(res));
                    _this.speakText = res.message.results_recognition;
                    // alert(this.speakText);
                    break;
                }
                case "asrFinish": {
                    // 语音识别功能完成
                    _this.dismissLoading();
                    var rese = "" + _this.speakText;
                    _this.dealData(rese);
                    // Baiduasrtts.synthesizeSpeech(rese, (e) => { }, (r) => { });
                    // this.initTTSconfig(rese);
                    break;
                }
                case "asrCancel": {
                    // 语音识别取消
                    break;
                }
                default:
                    break;
            }
        }, function (err) {
            // document.getElementById('v_status').innerHTML = "未检测到语音识别数据";
            _this.dismissLoading();
            _this.tools.presentToast("未检测到语音数据");
            _this.initTTSconfig("未检测到语音数据");
        });
    };
    SpeechHelperProvider.prototype.dealData = function (data) {
        var _this = this;
        this.device.getSpeechDataList(data).then(function (res) {
            if (res.success) {
                var temp = res.data;
                switch (temp.type) {
                    case 'mode': {
                        __WEBPACK_IMPORTED_MODULE_4__model_variable__["a" /* Variable */].socketObject.setMode(temp.id, temp.name, true);
                        break;
                    }
                    case 'device': {
                        __WEBPACK_IMPORTED_MODULE_4__model_variable__["a" /* Variable */].socketObject.setDeviceState(temp.id, temp.name, temp.state, true);
                        break;
                    }
                }
            }
            else {
                var text = "" + res.message;
                _this.initTTSconfig(text);
            }
        });
    };
    SpeechHelperProvider.prototype.initTTSconfig = function (data) {
        Baiduasrtts.initTTSconfig(function (e) { }, function (r) { });
        Baiduasrtts.synthesizeSpeech(data, function (e) { }, function (r) { });
    };
    SpeechHelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_requests__["a" /* DeviceRequestsProvider */]])
    ], SpeechHelperProvider);
    return SpeechHelperProvider;
}());

//# sourceMappingURL=speechHelper.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigProvider = (function () {
    function ConfigProvider() {
        //api请求地址
        // public apiUrl = "http://192.168.1.113:806";
        this.apiUrl = "http://223.112.4.23:11000";
        //websokcet地址
        this.websocketUrl = "ws://223.112.4.23:53200";
        //用户信息localstorage存储名称
        this.userInfoSotrageName = 'userinfo';
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_title_my_title__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_loop_my_loop__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_runtime_my_runtime__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_time_my_time__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__my_title_my_title__["a" /* MyTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__my_loop_my_loop__["a" /* MyLoopComponent */],
                __WEBPACK_IMPORTED_MODULE_4__my_runtime_my_runtime__["a" /* MyRuntimeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__my_time_my_time__["a" /* MyTimeComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__my_title_my_title__["a" /* MyTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__my_loop_my_loop__["a" /* MyLoopComponent */],
                __WEBPACK_IMPORTED_MODULE_4__my_runtime_my_runtime__["a" /* MyRuntimeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__my_time_my_time__["a" /* MyTimeComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_websocket_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_websocket_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_websocket_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_vibration__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_ws__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_config_config__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_storage_storage__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_http_services_http_services__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_tools_chart__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_tools_socketHelper__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_server_socket_service__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_tools_speechHelper__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_message_message__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_room_room__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_device_device__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_energy_energy__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_components_module__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__jiguang_ionic_jpush__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_device__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//原生native






//自定义工厂










//新增页面







//组件

// @jiguang-ionic/jpush@1.0.0+


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_energy_energy__["a" /* EnergyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { backButtonText: '', tabsHideOnSubPages: 'true' }, {
                    links: [
                        { loadChildren: '../pages/barchart/barchart.module#BarchartPageModule', name: 'BarchartPage', segment: 'barchart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/door-setting/door-setting.module#DoorSettingPageModule', name: 'DoorSettingPage', segment: 'door-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/curtain-setting/curtain-setting.module#CurtainSettingPageModule', name: 'CurtainSettingPage', segment: 'curtain-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/lift-setting/lift-setting.module#LiftSettingPageModule', name: 'LiftSettingPage', segment: 'lift-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/pump-eastnorthpool-setting/pump-eastnorthpool-setting.module#PumpEastnorthpoolSettingPageModule', name: 'PumpEastnorthpoolSettingPage', segment: 'pump-eastnorthpool-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/pump-northcourt-setting/pump-northcourt-setting.module#PumpNorthcourtSettingPageModule', name: 'PumpNorthcourtSettingPage', segment: 'pump-northcourt-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/valve-eastcourt-setting/valve-eastcourt-setting.module#ValveEastcourtSettingPageModule', name: 'ValveEastcourtSettingPage', segment: 'valve-eastcourt-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/valve-eastnorthpool-setting/valve-eastnorthpool-setting.module#ValveEastnorthpoolSettingPageModule', name: 'ValveEastnorthpoolSettingPage', segment: 'valve-eastnorthpool-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/valve-eastpool-setting/valve-eastpool-setting.module#ValveEastpoolSettingPageModule', name: 'ValveEastpoolSettingPage', segment: 'valve-eastpool-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-setting/valve-northpool-setting/valve-northpool-setting.module#ValveNorthpoolSettingPageModule', name: 'ValveNorthpoolSettingPage', segment: 'valve-northpool-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/energy-query/energy-query.module#EnergyQueryPageModule', name: 'EnergyQueryPage', segment: 'energy-query', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/energy/energy.module#EnergyPageModule', name: 'EnergyPage', segment: 'energy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/linechart/linechart.module#LinechartPageModule', name: 'LinechartPage', segment: 'linechart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-history/message-history.module#MessageHistoryPageModule', name: 'MessageHistoryPage', segment: 'message-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mode-device-selected-setting/mode-device-selected-setting.module#ModeDeviceSelectedSettingPageModule', name: 'ModeDeviceSelectedSettingPage', segment: 'mode-device-selected-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mode-public-setting/mode-public-setting.module#ModePublicSettingPageModule', name: 'ModePublicSettingPage', segment: 'mode-public-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mode-setting/mode-setting.module#ModeSettingPageModule', name: 'ModeSettingPage', segment: 'mode-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room/room.module#RoomPageModule', name: 'RoomPage', segment: 'room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roomdevice/roomdevice.module#RoomdevicePageModule', name: 'RoomdevicePage', segment: 'roomdevice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/mode-airseasonson-timer/mode-airseasonson-timer.module#ModeAirseasonsonTimerPageModule', name: 'ModeAirseasonsonTimerPage', segment: 'mode-airseasonson-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/mode-light-jw-timer/mode-light-jw-timer.module#ModeLightJwTimerPageModule', name: 'ModeLightJwTimerPage', segment: 'mode-light-jw-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/mode-light-timer/mode-light-timer.module#ModeLightTimerPageModule', name: 'ModeLightTimerPage', segment: 'mode-light-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/pump-northcourt-timer/pump-northcourt-timer.module#PumpNorthcourtTimerPageModule', name: 'PumpNorthcourtTimerPage', segment: 'pump-northcourt-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/mode-curtain-timer/mode-curtain-timer.module#ModeCurtainTimerPageModule', name: 'ModeCurtainTimerPage', segment: 'mode-curtain-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/pump-eastnorthpool-timer/pump-eastnorthpool-timer.module#PumpEastnorthpoolTimerPageModule', name: 'PumpEastnorthpoolTimerPage', segment: 'pump-eastnorthpool-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/timer-pump/timer-pump.module#TimerPumpPageModule', name: 'TimerPumpPage', segment: 'timer-pump', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/valve-eastcourt-timer/valve-eastcourt-timer.module#ValveEastcourtTimerPageModule', name: 'ValveEastcourtTimerPage', segment: 'valve-eastcourt-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/valve-eastnorthpool-timer/valve-eastnorthpool-timer.module#ValveEastnorthpoolTimerPageModule', name: 'ValveEastnorthpoolTimerPage', segment: 'valve-eastnorthpool-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/valve-eastpool-timer/valve-eastpool-timer.module#ValveEastpoolTimerPageModule', name: 'ValveEastpoolTimerPage', segment: 'valve-eastpool-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellpump/wellpump.module#WellpumpPageModule', name: 'WellpumpPage', segment: 'wellpump', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer/valve-northpool-timer/valve-northpool-timer.module#ValveNorthpoolTimerPageModule', name: 'ValveNorthpoolTimerPage', segment: 'valve-northpool-timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wellpumpquery/wellpumpquery.module#WellpumpqueryPageModule', name: 'WellpumpqueryPage', segment: 'wellpumpquery', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_32__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_energy_energy__["a" /* EnergyPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_15__providers_ws__["a" /* WebSocketProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_tools_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_tools_requests__["b" /* LoginRequestsProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_tools_requests__["a" /* DeviceRequestsProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_21__providers_tools_chart__["a" /* chartToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_tools_socketHelper__["a" /* SocketHelpProvider */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_websocket_service__["WebSocketService"],
                __WEBPACK_IMPORTED_MODULE_23__providers_server_socket_service__["a" /* ServerSocket */],
                __WEBPACK_IMPORTED_MODULE_24__providers_tools_speechHelper__["a" /* SpeechHelperProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_33__jiguang_ionic_jpush__["a" /* JPush */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bm": 236,
	"./bm.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 246,
	"./de-at": 247,
	"./de-at.js": 247,
	"./de-ch": 248,
	"./de-ch.js": 248,
	"./de.js": 246,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-SG": 251,
	"./en-SG.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-il": 256,
	"./en-il.js": 256,
	"./en-nz": 257,
	"./en-nz.js": 257,
	"./eo": 258,
	"./eo.js": 258,
	"./es": 259,
	"./es-do": 260,
	"./es-do.js": 260,
	"./es-us": 261,
	"./es-us.js": 261,
	"./es.js": 259,
	"./et": 262,
	"./et.js": 262,
	"./eu": 263,
	"./eu.js": 263,
	"./fa": 264,
	"./fa.js": 264,
	"./fi": 265,
	"./fi.js": 265,
	"./fo": 266,
	"./fo.js": 266,
	"./fr": 267,
	"./fr-ca": 268,
	"./fr-ca.js": 268,
	"./fr-ch": 269,
	"./fr-ch.js": 269,
	"./fr.js": 267,
	"./fy": 270,
	"./fy.js": 270,
	"./ga": 271,
	"./ga.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./gom-latn": 274,
	"./gom-latn.js": 274,
	"./gu": 275,
	"./gu.js": 275,
	"./he": 276,
	"./he.js": 276,
	"./hi": 277,
	"./hi.js": 277,
	"./hr": 278,
	"./hr.js": 278,
	"./hu": 279,
	"./hu.js": 279,
	"./hy-am": 280,
	"./hy-am.js": 280,
	"./id": 281,
	"./id.js": 281,
	"./is": 282,
	"./is.js": 282,
	"./it": 283,
	"./it-ch": 284,
	"./it-ch.js": 284,
	"./it.js": 283,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ku": 292,
	"./ku.js": 292,
	"./ky": 293,
	"./ky.js": 293,
	"./lb": 294,
	"./lb.js": 294,
	"./lo": 295,
	"./lo.js": 295,
	"./lt": 296,
	"./lt.js": 296,
	"./lv": 297,
	"./lv.js": 297,
	"./me": 298,
	"./me.js": 298,
	"./mi": 299,
	"./mi.js": 299,
	"./mk": 300,
	"./mk.js": 300,
	"./ml": 301,
	"./ml.js": 301,
	"./mn": 302,
	"./mn.js": 302,
	"./mr": 303,
	"./mr.js": 303,
	"./ms": 304,
	"./ms-my": 305,
	"./ms-my.js": 305,
	"./ms.js": 304,
	"./mt": 306,
	"./mt.js": 306,
	"./my": 307,
	"./my.js": 307,
	"./nb": 308,
	"./nb.js": 308,
	"./ne": 309,
	"./ne.js": 309,
	"./nl": 310,
	"./nl-be": 311,
	"./nl-be.js": 311,
	"./nl.js": 310,
	"./nn": 312,
	"./nn.js": 312,
	"./pa-in": 313,
	"./pa-in.js": 313,
	"./pl": 314,
	"./pl.js": 314,
	"./pt": 315,
	"./pt-br": 316,
	"./pt-br.js": 316,
	"./pt.js": 315,
	"./ro": 317,
	"./ro.js": 317,
	"./ru": 318,
	"./ru.js": 318,
	"./sd": 319,
	"./sd.js": 319,
	"./se": 320,
	"./se.js": 320,
	"./si": 321,
	"./si.js": 321,
	"./sk": 322,
	"./sk.js": 322,
	"./sl": 323,
	"./sl.js": 323,
	"./sq": 324,
	"./sq.js": 324,
	"./sr": 325,
	"./sr-cyrl": 326,
	"./sr-cyrl.js": 326,
	"./sr.js": 325,
	"./ss": 327,
	"./ss.js": 327,
	"./sv": 328,
	"./sv.js": 328,
	"./sw": 329,
	"./sw.js": 329,
	"./ta": 330,
	"./ta.js": 330,
	"./te": 331,
	"./te.js": 331,
	"./tet": 332,
	"./tet.js": 332,
	"./tg": 333,
	"./tg.js": 333,
	"./th": 334,
	"./th.js": 334,
	"./tl-ph": 335,
	"./tl-ph.js": 335,
	"./tlh": 336,
	"./tlh.js": 336,
	"./tr": 337,
	"./tr.js": 337,
	"./tzl": 338,
	"./tzl.js": 338,
	"./tzm": 339,
	"./tzm-latn": 340,
	"./tzm-latn.js": 340,
	"./tzm.js": 339,
	"./ug-cn": 341,
	"./ug-cn.js": 341,
	"./uk": 342,
	"./uk.js": 342,
	"./ur": 343,
	"./ur.js": 343,
	"./uz": 344,
	"./uz-latn": 345,
	"./uz-latn.js": 345,
	"./uz.js": 344,
	"./vi": 346,
	"./vi.js": 346,
	"./x-pseudo": 347,
	"./x-pseudo.js": 347,
	"./yo": 348,
	"./yo.js": 348,
	"./zh-cn": 349,
	"./zh-cn.js": 349,
	"./zh-hk": 350,
	"./zh-hk.js": 350,
	"./zh-tw": 351,
	"./zh-tw.js": 351
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 529;

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EnumEnergyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnumDateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumChartType; });
var EnumEnergyType;
(function (EnumEnergyType) {
    EnumEnergyType["Ele"] = "ele";
    EnumEnergyType["Water"] = "water";
})(EnumEnergyType || (EnumEnergyType = {}));
;
var EnumDateType;
(function (EnumDateType) {
    EnumDateType["Year"] = "year";
    EnumDateType["Month"] = "month";
    EnumDateType["Day"] = "day";
    EnumDateType["Hour"] = "hour";
})(EnumDateType || (EnumDateType = {}));
;
var EnumChartType;
(function (EnumChartType) {
    EnumChartType["FH"] = "fh";
    EnumChartType["Ele"] = "ele";
    EnumChartType["Water"] = "water";
    EnumChartType["Air"] = "air";
    EnumChartType["EleFull"] = "elefull";
    EnumChartType["WellPump"] = "wp";
    EnumChartType["Message"] = "message";
})(EnumChartType || (EnumChartType = {}));
//# sourceMappingURL=enumdata.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the MyTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyTitleComponent = (function () {
    function MyTitleComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyTitleComponent.prototype, "name", void 0);
    MyTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-title',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-title/my-title.html"*/'<!-- Generated template for the MyTitleComponent component -->\n<ion-card-header>\n  {{name}}\n</ion-card-header>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-title/my-title.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyTitleComponent);
    return MyTitleComponent;
}());

//# sourceMappingURL=my-title.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLoopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the MyLoopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyLoopComponent = (function () {
    function MyLoopComponent() {
        /**
         * 自定义model变量
         */
        /**
         * 返回父组件变化后的值
         */
        this.type = 'week';
        this.name = '重复';
        this.isTrans = 1;
        this.myModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(MyLoopComponent.prototype, "myModel", {
        get: function () {
            return this.loop;
        },
        set: function (v) {
            if (this.isTrans == '1') {
                var temp = new Array();
                if (v) {
                    for (var i = 0; i < v.length; i++) {
                        if (Number(v[i]) == 1) {
                            temp.push(i);
                        }
                    }
                }
                this.loop = temp;
            }
            else {
                this.loop = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    MyLoopComponent.prototype.getWeekDataList = function () {
        return [
            { key: 0, value: '周日' },
            { key: 1, value: '周一' },
            { key: 2, value: '周二' },
            { key: 3, value: '周三' },
            { key: 4, value: '周四' },
            { key: 5, value: '周五' },
            { key: 6, value: '周六' },
        ];
    };
    MyLoopComponent.prototype.getMonthDataList = function () {
        var result = [];
        for (var i = 1; i <= 12; i++) {
            result.push({
                key: i,
                value: (i) + "月"
            });
        }
        return result;
    };
    MyLoopComponent.prototype.ngOnInit = function () {
        if (this.type == 'week') {
            this.dataList = this.getWeekDataList();
        }
        else if (this.type == 'month') {
            this.dataList = this.getMonthDataList();
        }
    };
    MyLoopComponent.prototype.getReturnData = function () {
        var num = 0;
        if (this.type == 'week') {
            num = 7;
        }
        else if (this.type == 'month') {
            num = 12;
        }
        var result = [];
        for (var i = 1; i <= num; i++) {
            result.push(0);
        }
        return result;
    };
    MyLoopComponent.prototype.change = function () {
        if (this.isTrans == '1') {
            var result = this.getReturnData();
            for (var key in this.loop) {
                if (this.loop.hasOwnProperty(key)) {
                    var element = this.loop[key];
                    result[element] = 1;
                }
            }
            ;
            this.myModelChange.emit(result);
        }
        else {
            this.myModelChange.emit(this.loop);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyLoopComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyLoopComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MyLoopComponent.prototype, "isTrans", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MyLoopComponent.prototype, "myModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MyLoopComponent.prototype, "myModelChange", void 0);
    MyLoopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-loop',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-loop/my-loop.html"*/'<!-- Generated template for the MyLoopComponent component -->\n<ion-item>\n  <ion-label>{{name}}</ion-label>\n  <ion-select [(ngModel)]="loop" okText="确定" cancelText="取消" multiple (ngModelChange)="change()">\n    <ion-option *ngFor="let item of dataList" [value]="item.key">{{item.value}}</ion-option>\n  </ion-select>\n</ion-item>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-loop/my-loop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyLoopComponent);
    return MyLoopComponent;
}());

//# sourceMappingURL=my-loop.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRuntimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tools_tools__ = __webpack_require__(27);
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
 * Generated class for the MyRuntimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyRuntimeComponent = (function () {
    function MyRuntimeComponent(tools) {
        this.tools = tools;
        /**
         * 自定义model变量
         */
        /**
         * 返回父组件变化后的值
         */
        this.name = "运行时长";
        this.myModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(MyRuntimeComponent.prototype, "myModel", {
        get: function () {
            return this.model;
        },
        set: function (v) {
            this.model = this.tools.getTimeStrByMin(v);
            ;
        },
        enumerable: true,
        configurable: true
    });
    ;
    MyRuntimeComponent.prototype.ngOnInit = function () {
    };
    MyRuntimeComponent.prototype.change = function () {
        this.myModelChange.emit(this.tools.getMinuteByTime(this.model));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyRuntimeComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyRuntimeComponent.prototype, "myModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MyRuntimeComponent.prototype, "myModelChange", void 0);
    MyRuntimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-runtime',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-runtime/my-runtime.html"*/'<!-- Generated template for the MyRuntimeComponent component -->\n<ion-item>\n  <ion-label>{{name}}</ion-label>\n  <ion-datetime displayFormat="H小时m分钟" pickerFormat="HH mm" [(ngModel)]="model" cancelText=\'取消\' doneText=\'确定\'\n  (ngModelChange)="change()">\n  </ion-datetime>\n</ion-item>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-runtime/my-runtime.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_tools_tools__["a" /* ToolsProvider */]])
    ], MyRuntimeComponent);
    return MyRuntimeComponent;
}());

//# sourceMappingURL=my-runtime.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tools_tools__ = __webpack_require__(27);
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
 * Generated class for the MyRuntimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyTimeComponent = (function () {
    function MyTimeComponent(tools) {
        this.tools = tools;
        this.myModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(MyTimeComponent.prototype, "myModel", {
        get: function () {
            return this.model;
        },
        set: function (v) {
            if (v) {
                this.model = this.tools.getTime(v[0], v[1]);
            }
            else {
                this.model = "00:00";
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    MyTimeComponent.prototype.ngOnInit = function () {
    };
    MyTimeComponent.prototype.change = function () {
        var splitArr = this.model.split(':');
        var hour = splitArr[0] ? splitArr[0] : 0;
        var minute = splitArr[1] ? splitArr[1] : 0;
        this.myModelChange.emit([hour, minute]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyTimeComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyTimeComponent.prototype, "myModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MyTimeComponent.prototype, "myModelChange", void 0);
    MyTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-time',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-time/my-time.html"*/'<!-- Generated template for the MyTimeComponent component -->\n<ion-item>\n  <ion-label>{{name}}</ion-label>\n  <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="model" cancelText=\'取消\' doneText=\'确定\'\n    (ngModelChange)="change()">\n  </ion-datetime>\n</ion-item>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/components/my-time/my-time.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_tools_tools__["a" /* ToolsProvider */]])
    ], MyTimeComponent);
    return MyTimeComponent;
}());

//# sourceMappingURL=my-time.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { PasswordPage } from '../pages/password/password';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, tools, loginRequest, events, modalCtrl, network, toastCtrl) {
        var _this = this;
        this.tools = tools;
        this.loginRequest = loginRequest;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        //  rootPage: any ;
        this.username = '';
        platform.ready().then(function () {
            statusBar.styleDefault();
            // splashScreen.hide();
            //开启网络状态监测
            if (platform.is('cordova')) {
                _this.startNetDetect();
            }
            //接受订阅用户名称
            events.subscribe('user:created', function (user, time) {
                _this.username = user;
            });
            events.subscribe("vibrate", function (res) {
                _this.vibrate = res;
            });
            //自动登录
            _this.autoLogin();
        });
        // 
    }
    MyApp.prototype.pushPassword = function () {
        this.modalCtrl.create('PasswordPage').present();
    };
    /**
     * 开启网络状态监测
     */
    MyApp.prototype.startNetDetect = function () {
        var _this = this;
        var toast = null;
        // watch network for a disconnection
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            toast = _this.toastCtrl.create({
                message: '请检查网络！',
                position: 'top'
            });
            toast.present();
        });
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            if (toast) {
                toast.dismiss();
                toast = null;
            }
        });
        //网络状态改变提示
        if (this.network.onchange) {
            this.network.onchange().subscribe(function (data) {
                var name = null;
                switch (_this.network.type) {
                    case 'wifi': {
                        name = 'wifi';
                        break;
                    }
                    case '4g': {
                        name = '4g';
                        break;
                    }
                    case 'cellular': {
                        name = 'cellular';
                        break;
                    }
                }
                if (name) {
                    _this.toastCtrl.create({
                        message: '切换到' + _this.network.type + '网络',
                        duration: 3000,
                        position: 'top'
                    }).present();
                }
            });
        }
    };
    /**
     * 自动登录
     */
    MyApp.prototype.autoLogin = function () {
        var _this = this;
        this.loginRequest.autoLogin().then(function (res) {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        }, function (err) {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.logout = function () {
        this.loginRequest.removeUserInfo();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.setVibrate = function () {
        this.tools.setVibrate(this.vibrate);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/app/app.html"*/'<ion-menu [content]="content" side="start" class="sidebar">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="user-avatar">\n              <img src="../../assets/imgs/user.png">\n            </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              {{username}}\n            </h2>\n            <span ion-text color="light">自定义</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose>\n              <ion-icon name="contact"></ion-icon>\n              个人资料\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              退出登录\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <ion-list class="user-list">\n      <ion-item (click)="pushPassword()">\n        <ion-icon name="cog" item-start color="primary"></ion-icon>\n        <ion-label color=\'primary\'>震动反馈</ion-label>\n        <ion-toggle [(ngModel)]="vibrate" (ngModelChange)=\'setVibrate()\'></ion-toggle>\n      </ion-item>\n      <button ion-item class="text-1x" (click)="pushPassword()">\n        <ion-icon name="lock" item-start color="primary"></ion-icon>\n        <span ion-text color="primary">修改密码</span>\n      </button>\n\n      <button ion-item menuClose class="text-1x">\n        <ion-icon name="alert" item-start color="primary"></ion-icon>\n        <span ion-text color="primary">关于</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_tools_requests__["b" /* LoginRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_queueing_subject__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_queueing_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_queueing_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_websocket_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_websocket_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_websocket_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// file: server-socket.service.ts




var ServerSocket = (function () {
    function ServerSocket(socketFactory, config) {
        this.socketFactory = socketFactory;
        this.config = config;
    }
    ServerSocket.prototype.connect = function () {
        if (this.outputStream)
            return this.outputStream;
        // Using share() causes a single websocket to be created when the first
        // observer subscribes. This socket is shared with subsequent observers
        // and closed when the observer count falls to zero.
        return this.outputStream = this.socketFactory.connect(this.config.websocketUrl, this.inputStream = new __WEBPACK_IMPORTED_MODULE_1_queueing_subject__["QueueingSubject"]()).share();
    };
    ServerSocket.prototype.send = function (message) {
        // If the websocket is not connected then the QueueingSubject will ensure
        // that messages are queued and delivered when the websocket reconnects.
        // A regular Subject can be used to discard messages sent when the websocket
        // is disconnected.
        this.inputStream.next(message);
    };
    ServerSocket.prototype.close = function () {
        this.inputStream.unsubscribe();
    };
    ServerSocket = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_websocket_service__["WebSocketService"], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], ServerSocket);
    return ServerSocket;
}());

//# sourceMappingURL=server-socket.service.js.map

/***/ })

},[502]);
//# sourceMappingURL=main.js.map