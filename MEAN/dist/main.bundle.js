webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__intro_intro_component__ = __webpack_require__("./src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__color_color_component__ = __webpack_require__("./src/app/color/color.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'header', component: __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */] },
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_8__intro_intro_component__["a" /* IntroComponent */] },
    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__["a" /* LoginFormComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__color_color_component__["a" /* ColorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_11__users_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/color/color.component.html":
/***/ (function(module, exports) {

module.exports = "<div (mousemove)=\"sendColor(arrayColors[selectedColor])\">\r\n            <span [style.background]=\"arrayColors[selectedColor]\" [cpToggle]=\"true\" [cpDialogDisplay]=\"'inline'\"\r\n                  [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'btn btn-primary btn-xs'\"\r\n                  [(colorPicker)]=\"arrayColors[selectedColor]\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/color/color.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  width: 150px;\n  margin-bottom: 16px; }\n\n.cmyk-text {\n  float: left;\n  width: 72px;\n  height: 72px;\n  font-weight: bolder;\n  line-height: 72px;\n  text-align: center;\n  text-shadow: 1px 1px 2px #bbb; }\n\n.color-box {\n  width: 100px;\n  height: 25px;\n  margin: 16px auto;\n  cursor: pointer; }\n\n.change-me {\n  cursor: pointer;\n  font-size: 30px;\n  font-weight: bolder; }\n"

/***/ }),

/***/ "./src/app/color/color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorComponent = /** @class */ (function () {
    function ColorComponent(_sensorService, user) {
        this._sensorService = _sensorService;
        this.user = user;
        this.previousColor = null;
        this.arrayColors = {
            color: '#2883e9',
        };
        this.selectedColor = 'color1';
    }
    ColorComponent.prototype.sendColor = function (color) {
        if (color === undefined) {
            return;
        }
        if (this.previousColor !== color) {
            this.previousColor = color;
            console.log(color);
            this._sensorService.emit('mode ' + this.user.username, {
                msg: color
            });
        }
    };
    ColorComponent.prototype.ngOnInit = function () {
        // this._sensorService.on('******', (data: any) => {
        //   console.log(data.msg);
        // });
    };
    ColorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-color',
            template: __webpack_require__("./src/app/color/color.component.html"),
            styles: [__webpack_require__("./src/app/color/color.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */]])
    ], ColorComponent);
    return ColorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <nav>\r\n    <a routerLink=\"/header\" routerLinkActive=\"active\">Header Component</a>\r\n    <a routerLink=\"/intro\" routerLinkActive=\"active\">Intro Component</a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row text-center d-flex flex-column\">\r\n    <nav>\r\n      <a routerLink=\"/intro\" routerLinkActive=\"active\">About Project</a>\r\n    </nav>\r\n    <div>\r\n      <span>Last command: {{UIdata}}</span><br>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center color control\">\r\n      <app-color></app-color>\r\n    </div>\r\n    <div class=\"col-md-4 col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center control\">\r\n      <div class=\"d-flex  justify-content-center align-self-center\">\r\n        <table>\r\n          <tr>\r\n            <td><span class=\"rainbow_1\">Brightness</span></td>\r\n            <td>\r\n              <mat-slider thumbLabel tickInterval=\"1\" min=\"0\" max=\"255\" step=\"1\" value=\"205\"\r\n                          (change)=\"sliderB($event)\"></mat-slider>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><span class=\"rainbow_2\">Speed</span></td>\r\n            <td class=\"alternative_1\">\r\n              <mat-slider thumbLabel tickInterval=\"1\" min=\"-30\" max=\"30\" step=\"1\" value=\"15\"\r\n                          (change)=\"sliderS($event)\"></mat-slider>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><span class=\"rainbow_3\">Width</span></td>\r\n            <td class=\"alternative_2\">\r\n              <mat-slider thumbLabel tickInterval=\"1\" min=\"0\" max=\"10\" step=\"1\" value=\"15\"\r\n                          (change)=\"sliderW($event)\"></mat-slider>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center align-self-center control\">\r\n      <mat-radio-group (change)=\"setMode($event)\">\r\n        <div>\r\n          <mat-radio-button value=\"M1\"><span style=\"color: white\">White</span></mat-radio-button>\r\n        </div>\r\n        <div class=\"alternative_1\">\r\n          <mat-radio-button value=\"M2\"><span style=\"color: yellow\">Yellow</span></mat-radio-button>\r\n        </div>\r\n        <div class=\"alternative_2\">\r\n          <mat-radio-button value=\"M3\"><span style=\"color: red\">R</span><span style=\"color: orange\">a</span><span\r\n            style=\"color: yellow\">i</span><span style=\"color: green\">n</span><span\r\n            style=\"color: blue\">b</span><span style=\"color: indigo\">o</span><span style=\"color: violet\">w</span>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div>\r\n          <mat-radio-button value=\"M4\">\r\n            <span style=\"color: red\">R</span><span style=\"color: orange\">a</span><span\r\n            style=\"color: yellow\">i</span><span style=\"color: green\">n</span><span\r\n            style=\"color: blue\">b</span><span style=\"color: indigo\">o</span><span style=\"color: violet\">w</span>\r\n            <span> blinks</span>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div class=\"alternative_1\">\r\n          <mat-radio-button value=\"M5\"><span style=\"color: green\">Snake</span></mat-radio-button>\r\n        </div>\r\n        <div class=\"alternative_2\">\r\n          <mat-radio-button value=\"M6\"><span style=\"color: indigo\">C</span><span style=\"color: red\">o</span><span\r\n            style=\"color: green\">n</span><span style=\"color: yellow\">f</span><span\r\n            style=\"color: blue\">e</span><span style=\"color: gold\">t</span><span style=\"color: fuchsia\">t</span><span\r\n            style=\"color: violet\">i</span></mat-radio-button>\r\n        </div>\r\n      </mat-radio-group>\r\n      <mat-slide-toggle (change)=\"setMode($event)\"></mat-slide-toggle>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "* {\n  color: white;\n  font-size: 20px; }\n\ninput {\n  color: black; }\n\nbutton {\n  background-color: white;\n  color: black; }\n\na {\n  text-decoration: none;\n  background: none; }\n\n.control {\n  margin-top: 50px; }\n\n.rainbow_1 {\n  /* Chrome, Safari, Opera */\n  -webkit-animation: rainbow_1 12s infinite;\n  /* Internet Explorer */\n  /* Standar Syntax */\n  animation: rainbow_1 12s infinite; }\n\n/* Chrome, Safari, Opera */\n\n@-webkit-keyframes rainbow_1 {\n  20% {\n    color: red; }\n  40% {\n    color: yellow; }\n  60% {\n    color: green; }\n  80% {\n    color: blue; }\n  100% {\n    color: orange; } }\n\n/* Internet Explorer */\n\n/* Standar Syntax */\n\n@keyframes rainbow_1 {\n  5% {\n    color: red; }\n  35% {\n    color: yellow; }\n  65% {\n    color: green; }\n  85% {\n    color: blue; }\n  0% {\n    color: orange; } }\n\n.rainbow_2 {\n  /* Chrome, Safari, Opera */\n  -webkit-animation: rainbow_2 12s infinite;\n  /* Internet Explorer */\n  /* Standar Syntax */\n  animation: rainbow_2 12s infinite; }\n\n/* Chrome, Safari, Opera */\n\n@-webkit-keyframes rainbow_2 {\n  20% {\n    color: green; }\n  40% {\n    color: blue; }\n  60% {\n    color: orange; }\n  80% {\n    color: red; }\n  100% {\n    color: yellow; } }\n\n/* Internet Explorer */\n\n/* Standar Syntax */\n\n@keyframes rainbow_2 {\n  5% {\n    color: green; }\n  35% {\n    color: blue; }\n  65% {\n    color: orange; }\n  85% {\n    color: red; }\n  0% {\n    color: yellow; } }\n\n.rainbow_3 {\n  /* Chrome, Safari, Opera */\n  -webkit-animation: rainbow_3 12s infinite;\n  /* Internet Explorer */\n  /* Standar Syntax */\n  animation: rainbow_3 12s infinite; }\n\n/* Chrome, Safari, Opera */\n\n@-webkit-keyframes rainbow_3 {\n  20% {\n    color: indigo; }\n  40% {\n    color: red; }\n  60% {\n    color: blue; }\n  80% {\n    color: chartreuse; }\n  100% {\n    color: orange; } }\n\n/* Internet Explorer */\n\n/* Standar Syntax */\n\n@keyframes rainbow_3 {\n  5% {\n    color: indigo; }\n  35% {\n    color: red; }\n  65% {\n    color: blue; }\n  85% {\n    color: chartreuse; }\n  0% {\n    color: orange; } }\n\n@media screen and (max-width: 500px) {\n  div {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_sensorService, user) {
        this._sensorService = _sensorService;
        this.user = user;
    }
    HeaderComponent.prototype.setMode = function (e) {
        if (e.checked === true) {
            this.UIdata = 'on';
        }
        else if (e.checked === false) {
            this.UIdata = 'off';
        }
        else {
            this.UIdata = e.value;
        }
        this._sensorService.emit('mode ' + this.user.username, {
            msg: this.UIdata
        });
    };
    // change event on mouse-move after testing
    HeaderComponent.prototype.sliderB = function (e) {
        if (this.UIdata !== e.value) {
            this.UIdata = 'B' + e.value;
            this._sensorService.emit('mode ' + this.user.username, {
                msg: this.UIdata
            });
        }
    };
    HeaderComponent.prototype.sliderS = function (e) {
        if (this.UIdata !== e.value) {
            this.UIdata = 'S' + e.value;
            this._sensorService.emit('mode ' + this.user.username, {
                msg: this.UIdata
            });
        }
    };
    HeaderComponent.prototype.sliderW = function (e) {
        if (this.UIdata !== e.value) {
            this.UIdata = 'W' + e.value;
            this._sensorService.emit('mode ' + this.user.username, {
                msg: this.UIdata
            });
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?'
        });
        this._sensorService.on('Server_asking', function (data) {
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!'
            });
            _this._sensorService.on('Server_response', function (_data) {
                console.log(_data.msg);
            });
        });
        this._sensorService.on('Current mode', function (data) {
            _this.UIdata = data.msg;
        });
        this._sensorService.emit('Last mode ' + this.user.username, {
            msg: 'Give me data'
        });
        this._sensorService.on('Last mode', function (data) {
            console.log(data.msg);
            _this.UIdata = data.msg;
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <nav>\r\n    <a routerLink=\"/header\" routerLinkActive=\"active\">Strip control</a>\r\n  </nav>\r\n  <p>\r\n    About<br>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/intro/intro.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroComponent = /** @class */ (function () {
    function IntroComponent(_sensorService) {
        this._sensorService = _sensorService;
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?'
        });
        this._sensorService.on('Server_asking', function (data) {
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!'
            });
            _this._sensorService.on('Server_response', function (_data) {
                console.log(_data.msg);
            });
        });
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form container-fluid\">\r\n  <h1>Welcome</h1>\r\n  <form (submit)=\"loginUser($event)\" autocomplete=\"off\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Username\" type=\"text\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Password\" type=\"password\">\r\n    </mat-form-field>\r\n    <div class=\"input\">\r\n      <button mat-button type=\"submit\" value=\"Login\">Login</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-top: 170px; }\n\nform {\n  width: 100%;\n  margin: auto;\n  min-width: 150px;\n  max-width: 400px; }\n\nmat-form-field {\n  width: 100%;\n  margin: auto; }\n\nbutton {\n  color: #fff;\n  border: none;\n  font-size: 1.3rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 11px;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-transition: 1s;\n  transition: 1s; }\n\nbutton:hover {\n    background: rgba(0, 0, 255, 0.5);\n    -webkit-transition: 1s background;\n    transition: 1s background; }\n\ninput {\n  color: white;\n  width: 99%;\n  margin: auto;\n  -webkit-transition: 1s;\n  transition: 1s;\n  padding-top: 10px;\n  padding-left: 1%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\ninput:focus {\n    border-color: black; }\n\ninput:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {\n    -webkit-transition: background-color 5000s ease-in-out 0s;\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: white !important; }\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n  -webkit-text-fill-color: white !important; }\n\nh1 {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, _sensorService, user) {
        this.router = router;
        this._sensorService = _sensorService;
        this.user = user;
        this.users = [];
    }
    LoginFormComponent.prototype.loginUser = function (e) {
        console.log(e.target.elements);
        var userName = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        if ((userName === this.users[0].username && password === this.users[0].pass) ||
            (userName === this.users[1].username && password === this.users[1].pass)) {
            this.router.navigate(['/header']);
            this.user.setUserLoggedIn(userName);
        }
        else {
            alert('Incorrect username or password');
        }
    };
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sensorService.emit('users_data', {
            msg: 'Requesting users data'
        });
        this._sensorService.on('receive_users', function (data) {
            _this.users = data.msg;
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UserService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSlideToggleModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSlideToggleModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function (_username) {
        this.isUserLoggedIn = true;
        this.username = _username;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map