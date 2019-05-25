webpackJsonp([15],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
            ],
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordPage = (function () {
    function PasswordPage(navCtrl, viewCtrl, device, login, tools, menu, app) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.device = device;
        this.login = login;
        this.tools = tools;
        this.menu = menu;
        this.app = app;
    }
    PasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordPage.prototype.complate = function () {
        var _this = this;
        if (!this.password) {
            this.tools.presentToast("原密码不能位空！");
            return null;
        }
        if (!this.newPassword) {
            this.tools.presentToast("新密码不能位空！");
            return null;
        }
        this.device.checkPassword(this.password).then(function (res) {
            if (_this.password === _this.newPassword) {
                _this.tools.presentToast("新密码不能与原密码一致！");
            }
            else {
                if (_this.newPassword === _this.confirmPassword) {
                    _this.device.setNewPassword(_this.password, _this.newPassword).then(function (res) {
                        _this.dismiss();
                        _this.login.removeUserInfo();
                        _this.menu.close();
                        // this.navCtrl.setRoot(LoginPage);
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    });
                }
                else {
                    _this.tools.presentToast("新密码两次输入不一致！");
                }
            }
        });
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/password/password.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      修改密码\n    </ion-title>\n    <!-- <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <h3 item-start>原密码</h3>\n      <ion-input type="password" value="" [(ngModel)]="password" item-end text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <h3 item-start>新密码</h3>\n      <ion-input type="password" value="" [(ngModel)]="newPassword" item-end text-right></ion-input>\n    </ion-item>\n    <ion-item>\n      <h3 item-start>确认密码</h3>\n      <ion-input type="password" value="" [(ngModel)]="confirmPassword" item-end text-right></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 text-center><button ion-button outline medium block (click)="dismiss()">取消</button></ion-col>\n      <ion-col col-6 text-center><button ion-button medium block (click)="complate()">确 认</button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/zhoubo/Project/SmartHomeNew3.1/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["a" /* DeviceRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_requests__["b" /* LoginRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=15.js.map