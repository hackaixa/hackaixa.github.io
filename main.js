(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apresentacao/apresentacao.component */ "./src/app/apresentacao/apresentacao.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_2__["ApresentacaoComponent"] },
    { path: 'trix', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'trix/:beaconId', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <img routerLink=\"/\" id=\"img-logo\" src=\"../../assets/images/logo.png\" />\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #26b;\n  text-align: center;\n  height: calc(80px - 1px);\n  border-bottom: 1px solid #1a4e90; }\n  #header #img-logo {\n    cursor: pointer;\n    outline: none;\n    width: 10%;\n    min-width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzZXIvUHJvamVjdHMvamVkaS14LWNoYXRjbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHlCQUFxQztFQUNyQyxpQ0FBMEMsRUFRN0M7RUFmRDtJQVVRLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLFdBQVU7SUFDVixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMyNmI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogY2FsYygjeyRoZWFkZXItaGVpZ2h0fSAtIDFweCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigjMjZiLCAxMCUpO1xuICAgICNpbWctbG9nbyB7XG4gICAgICAgIFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.mensagens = [];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apresentacao/apresentacao.component */ "./src/app/apresentacao/apresentacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_7__["ApresentacaoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apresentacao/apresentacao.component.html":
/*!**********************************************************!*\
  !*** ./src/app/apresentacao/apresentacao.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <img id=\"img-trix-stroke\" src=\"../../assets/images/trix-stroke.png\" />\n    <div id=\"content-text\">\n      <h2 id=\"txt-boas-vindas\">Olá, seja bem vindo!</h2>\n      <h4 id=\"txt-trix\">Eu sou a TRIX, assistente virtual da CAIXA.</h4>\n      <p>Estou aqui para tirar suas dúvidas</p>\n      <p>sobre benefícios sociais, como PIS,</p>\n      <p>Seguro Desemprego, Fundo de Garantia</p>\n      <p>por Tempo de Serviço e outros.</p>\n      <h2 id=\"txt-ajudar\">Como posso ajudar hoje?</h2>\n      <button routerLink=\"/trix\">Iniciar Conversa</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/apresentacao/apresentacao.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/apresentacao/apresentacao.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 162px;\n  margin-bottom: 32px;\n  position: relative; }\n  #content #img-trix-stroke {\n    position: absolute;\n    top: -30%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 300px; }\n  #content-text {\n    text-align: center;\n    background: white;\n    padding: 16px;\n    padding-top: 172px;\n    border-radius: 2px;\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n  #content-text #txt-boas-vindas {\n      color: #888; }\n  #content-text #txt-trix {\n      color: #444;\n      font-weight: normal;\n      margin-bottom: 16px; }\n  #content-text p {\n      color: #888; }\n  #content-text #txt-ajudar {\n      color: #26b;\n      margin-top: 32px;\n      margin-bottom: 24px; }\n  #content button {\n    transition: all 200ms;\n    border: 0;\n    border-radius: 2px;\n    cursor: pointer;\n    color: white;\n    font-size: 15px;\n    outline: none;\n    width: 100%;\n    padding: 8px;\n    background: #f72; }\n  #content button:hover {\n      background: #ff8d46; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzZXIvUHJvamVjdHMvamVkaS14LWNoYXRjbGllbnQvc3JjL2FwcC9hcHJlc2VudGFjYW8vYXByZXNlbnRhY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBZ0RyQjtFQXZERDtJQVNRLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsVUFBUztJQUNULG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsYUFBWSxFQUNmO0VBQ0Q7SUFDSSxtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLDhFQUFzRSxFQWlCekU7RUF2QkE7TUFRTyxZQUFXLEVBQ2Q7RUFUSjtNQVdPLFlBQVc7TUFDWCxvQkFBbUI7TUFDbkIsb0JBQW1CLEVBQ3RCO0VBZEo7TUFnQk8sWUFBVyxFQUNkO0VBakJKO01BbUJPLFlBQVc7TUFDWCxpQkFBZ0I7TUFDaEIsb0JBQW1CLEVBQ3RCO0VBckNUO0lBeUNRLHNCQUFxQjtJQUNyQixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osaUJBVndCLEVBYzNCO0VBdERMO01Bb0RZLG9CQUEyQyxFQUM5QyIsImZpbGUiOiJzcmMvYXBwL2FwcmVzZW50YWNhby9hcHJlc2VudGFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTYycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgI2ltZy10cml4LXN0cm9rZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMzAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAmLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTcycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbiAgICAgICAgI3R4dC1ib2FzLXZpbmRhcyB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgfVxuICAgICAgICAjdHh0LXRyaXgge1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgICAgICN0eHQtYWp1ZGFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgJGNvci1sYXJhbmphLWNsYXJvOiAjZjcyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29yLWxhcmFuamEtY2xhcm87XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkY29yLWxhcmFuamEtY2xhcm8sIDclKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/apresentacao/apresentacao.component.ts":
/*!********************************************************!*\
  !*** ./src/app/apresentacao/apresentacao.component.ts ***!
  \********************************************************/
/*! exports provided: ApresentacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoComponent", function() { return ApresentacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApresentacaoComponent = /** @class */ (function () {
    function ApresentacaoComponent() {
    }
    ApresentacaoComponent.prototype.ngOnInit = function () {
    };
    ApresentacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apresentacao',
            template: __webpack_require__(/*! ./apresentacao.component.html */ "./src/app/apresentacao/apresentacao.component.html"),
            styles: [__webpack_require__(/*! ./apresentacao.component.scss */ "./src/app/apresentacao/apresentacao.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApresentacaoComponent);
    return ApresentacaoComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div id=\"chat\">\n    <div id=\"chat-header\">\n      <div class=\"chat-pill\">\n        <img class=\"avatar\" src=\"../../assets/images/trix-stroke.png\" />\n        <div class=\"pill-text\">\n          <h2>Trix</h2>\n          <p>Assistente Virtual da Caixa</p>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"chat-mensagens\" class=\"speech-wrapper\">\n        <div class=\"bubble\">\n          <img class=\"trix-bolinha\" src=\"../../assets/images/trix-bolinha.png\" />\n          <div class=\"txt\">\n            <p class=\"name\">Trix</p>\n            <p class=\"message\">{{ saudacao() }}</p>\n            <span class=\"timestamp\">{{ today | date: \"shortTime\"}}</span>\n          </div>\n          <div class=\"bubble-arrow\"></div>\n        </div>\n\n      <ng-container *ngFor=\"let mensagem of mensagens\">\n        <div class=\"bubble\" [class.alt]=\"mensagem.tipo !== 'resposta'\">\n          <img\n            *ngIf=\"mensagem.tipo === 'resposta'\"\n            class=\"trix-bolinha\"\n            src=\"../../assets/images/trix-bolinha.png\"\n          />\n          <div class=\"txt\">\n            <p class=\"name\" [class.alt]=\"mensagem.tipo === 'resposta'\">\n              {{ mensagem.interlocutor }}\n            </p>\n            <p class=\"message\">{{ mensagem.texto }}</p>\n            <span class=\"timestamp\">{{\n              mensagem.hora | date: \"shortTime\"\n            }}</span>\n          </div>\n          <div\n            class=\"bubble-arrow\"\n            [class.alt]=\"mensagem.tipo !== 'resposta'\"\n          ></div>\n        </div>\n      </ng-container>\n    </div>\n\n    <div id=\"chat-input\">\n      <input\n        #chat_field\n        type=\"text\"\n        placeholder=\"Digite aqui sua mensagem\"\n        (keyup)=\"$event.keyCode === 13 ? sendMensagem(chat_field) : null\"\n      />\n      <button (click)=\"sendMensagem(chat_field)\">Enviar</button>\n    </div>\n  </div>\n</div>\n\n<div id=\"cortina\" *ngIf=\"showCortina\"></div>\n\n<app-login *ngIf=\"isLogin\" (closeLogin)=\"closeLogin($event)\" [metadata]=\"metadata\"></app-login>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cortina {\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent; }\n\n#content {\n  position: absolute;\n  width: 100%;\n  top: 80px;\n  height: calc(100vh - 80px);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #F3F3F5; }\n\n#chat {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n  width: 90%;\n  height: 70%;\n  margin-top: 120px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 4px; }\n\n#chat-header {\n  align-items: center;\n  height: 45px;\n  background-color: #E8EDF2;\n  border-bottom: 1px solid #d7dadd; }\n\n#chat-header .chat-pill {\n  position: relative;\n  display: flex;\n  border-radius: 47px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: -60px;\n  padding: 8px;\n  padding-left: 94px;\n  background-color: white;\n  text-align: left;\n  width: 176px;\n  margin-left: 50px;\n  font-size: 18px; }\n\n.chat-pill .pill-text p {\n  font-weight: 100;\n  font-size: 0.7em; }\n\n#chat-header .avatar {\n  position: absolute;\n  height: 120px;\n  top: -42px;\n  left: -24px; }\n\n#chat-mensagens {\n  padding-left: 86px;\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n#chat-mensagens::-webkit-scrollbar {\n    width: 8px; }\n\n#chat-mensagens::-webkit-scrollbar-track {\n    background: #e1e1e1; }\n\n#chat-mensagens::-webkit-scrollbar-thumb {\n    background: #777; }\n\n#chat-mensagens::-webkit-scrollbar-thumb:hover {\n    background: #666; }\n\n.speech-wrapper {\n  padding: 30px 40px; }\n\n.speech-wrapper .bubble {\n    position: relative;\n    width: 240px;\n    height: auto;\n    display: block;\n    background: #E8EDF2;\n    border-radius: 4px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    position: relative;\n    margin: 0 0 25px; }\n\n.speech-wrapper .bubble .trix-bolinha {\n      position: absolute;\n      width: 60px;\n      bottom: 0;\n      left: -70px; }\n\n.speech-wrapper .bubble.alt {\n      background: #b3e8ff;\n      align-self: flex-end;\n      border-radius: 4px 16px; }\n\n.speech-wrapper .bubble .txt {\n      padding: 8px 14px 24px;\n      text-align: left; }\n\n.speech-wrapper .bubble .txt .name {\n        font-weight: 600;\n        font-size: 12px;\n        margin: 0 0 4px;\n        color: #3498db; }\n\n.speech-wrapper .bubble .txt .name span {\n          font-weight: normal;\n          color: #b3b3b3; }\n\n.speech-wrapper .bubble .txt .name.alt {\n          color: #2ecc71; }\n\n.speech-wrapper .bubble .txt .message {\n        font-size: 12px;\n        margin: 0;\n        color: #2b2b2b; }\n\n.speech-wrapper .bubble .txt .timestamp {\n        font-size: 11px;\n        position: absolute;\n        bottom: 8px;\n        right: 10px;\n        text-transform: uppercase;\n        color: #999; }\n\n.speech-wrapper .bubble .bubble-arrow {\n      position: absolute;\n      width: 0;\n      bottom: 42px;\n      left: -16px;\n      height: 0; }\n\n.speech-wrapper .bubble .bubble-arrow.alt {\n        right: -2px;\n        bottom: 40px;\n        left: auto; }\n\n.speech-wrapper .bubble .bubble-arrow:after {\n      content: '';\n      position: absolute;\n      border: 0 solid transparent;\n      border-top: 9px solid #E8EDF2;\n      border-radius: 0 20px 0;\n      width: 15px;\n      height: 30px;\n      -webkit-transform: rotate(145deg);\n              transform: rotate(145deg); }\n\n.speech-wrapper .bubble .bubble-arrow.alt:after {\n      display: none; }\n\n.speech-divider {\n  padding: 5px 5px; }\n\n#chat-input {\n  display: flex;\n  border-top: 1px solid #d7dadd;\n  background: #F6F6F6; }\n\n#chat-input input {\n    outline: none;\n    width: 100%;\n    background: transparent;\n    border: none;\n    padding: 20px; }\n\n#chat-input button {\n    transition: all 200ms;\n    cursor: pointer;\n    outline: none;\n    background-color: #FF811C;\n    border: 1px solid #f27515;\n    color: #ffff;\n    padding: 0 15px; }\n\n#chat-input button:hover {\n      background-color: #e86700;\n      border-color: #c95e0b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzZXIvUHJvamVjdHMvamVkaS14LWNoYXRjbGllbnQvc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcHJhc2VyL1Byb2plY3RzL2plZGkteC1jaGF0Y2xpZW50L3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUTtFQUNSLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsVUNmZ0I7RURnQmhCLDJCQUF1QztFQUN2QyxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QiwrQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLDhFQUFzRTtFQUN0RSxtQkFBa0IsRUFFckI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4RUFBNkU7RUFDN0Usa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsV0FBVTtFQUNWLFlBQVcsRUFDWjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osZUFBYztFQUNkLGNBQWE7RUFDYix1QkFBc0I7RUFLeEIsV0FBVztFQUtYLFlBQVk7RUFLWixxQkFBcUIsRUFJdEI7O0FBeEJEO0lBT00sV0FBVSxFQUNiOztBQVJIO0lBWU0sb0JBQW1CLEVBQ3RCOztBQWJIO0lBaUJNLGlCQUFnQixFQUNuQjs7QUFsQkg7SUFzQk0saUJBQWdCLEVBQ25COztBQUdIO0VBQ0UsbUJBQWtCLEVBZ0ZuQjs7QUFqRkQ7SUFHSSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGFBQVk7SUFDWixlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQiw4RUFBcUU7SUFDckUsbUJBQWtCO0lBQ2xCLGlCQUFnQixFQXFFakI7O0FBaEZIO01BYU0sbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxVQUFTO01BQ1QsWUFBVyxFQUNaOztBQWpCTDtNQW1CTSxvQkFBbUI7TUFDbkIscUJBQW9CO01BQ3BCLHdCQUF1QixFQUN4Qjs7QUF0Qkw7TUF3Qk0sdUJBQXNCO01BQ3RCLGlCQUFnQixFQTJCakI7O0FBcERMO1FBMkJRLGlCQUFnQjtRQUNoQixnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsZUFBYyxFQVFmOztBQXRDUDtVQWdDVSxvQkFBbUI7VUFDbkIsZUFBYyxFQUNmOztBQWxDVDtVQW9DVSxlQUFjLEVBQ2Y7O0FBckNUO1FBd0NRLGdCQUFlO1FBQ2YsVUFBUztRQUNULGVBQWMsRUFDZjs7QUEzQ1A7UUE2Q1EsZ0JBQWU7UUFDZixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLFlBQVc7UUFDWCwwQkFBeUI7UUFDekIsWUFBVyxFQUNaOztBQW5EUDtNQXNETSxtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLGFBQVk7TUFDWixZQUFXO01BQ1gsVUFBUyxFQU1WOztBQWhFTDtRQTREUSxZQUFXO1FBQ1gsYUFBWTtRQUNaLFdBQVUsRUFDWDs7QUEvRFA7TUFrRU0sWUFBVztNQUNYLG1CQUFrQjtNQUNsQiw0QkFBMkI7TUFDM0IsOEJBQTZCO01BQzdCLHdCQUF1QjtNQUN2QixZQUFXO01BQ1gsYUFBWTtNQUNaLGtDQUF5QjtjQUF6QiwwQkFBeUIsRUFDMUI7O0FBMUVMO01BNEVNLGNBQWEsRUFHZDs7QUFJTDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0Isb0JBQW1CLEVBcUJwQjs7QUF4QkQ7SUFLSSxjQUFhO0lBQ2IsWUFBVztJQUNYLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osY0FBYSxFQUNkOztBQVZIO0lBWUksc0JBQXFCO0lBQ3JCLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QiwwQkFBeUI7SUFDekIsYUFBWTtJQUNaLGdCQUFlLEVBS2hCOztBQXZCSDtNQW9CTSwwQkFBc0M7TUFDdEMsc0JBQWtDLEVBQ25DIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiNjb3J0aW5hIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0Y1O1xufVxuXG4jY2hhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMiksMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIFxufVxuXG4jY2hhdC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEVERjI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkYWRkO1xufVxuXG4jY2hhdC1oZWFkZXIgLmNoYXQtcGlsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNDdweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNzZweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNoYXQtcGlsbCAucGlsbC10ZXh0IHAge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4jY2hhdC1oZWFkZXIgLmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdG9wOiAtNDJweDtcbiAgbGVmdDogLTI0cHg7XG59XG5cbiNjaGF0LW1lbnNhZ2VucyB7XG4gICAgcGFkZGluZy1sZWZ0OiA4NnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDhweDtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTsgXG4gIH1cbiAgXG4gIC8qIEhhbmRsZSAqL1xuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNzc3OyBcbiAgfVxuICBcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM2NjY7IFxuICB9XG59XG5cbi5zcGVlY2gtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgLmJ1YmJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0U4RURGMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMCAyNXB4O1xuICAgIC50cml4LWJvbGluaGEge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAtNzBweDtcbiAgICB9XG4gICAgJi5hbHQge1xuICAgICAgYmFja2dyb3VuZDogI2IzZThmZjtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDE2cHg7XG4gICAgfVxuICAgIC50eHQge1xuICAgICAgcGFkZGluZzogOHB4IDE0cHggMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgICAgICBjb2xvcjogIzM0OThkYjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBjb2xvcjogI2IzYjNiMztcbiAgICAgICAgfVxuICAgICAgICAmLmFsdCB7XG4gICAgICAgICAgY29sb3I6ICMyZWNjNzE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xuICAgICAgfVxuICAgICAgLnRpbWVzdGFtcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgIH1cbiAgICAuYnViYmxlLWFycm93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgYm90dG9tOiA0MnB4O1xuICAgICAgbGVmdDogLTE2cHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICAmLmFsdCB7XG4gICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICAgIC5idWJibGUtYXJyb3c6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wOiA5cHggc29saWQgI0U4RURGMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDVkZWcpO1xuICAgIH1cbiAgICAuYnViYmxlLWFycm93LmFsdDphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlWSgtMSk7XG4gICAgICAvLyBib3JkZXItdG9wLWNvbG9yOiAjYjNlOGZmO1xuICAgIH1cbiAgfVxufVxuXG4uc3BlZWNoLWRpdmlkZXIge1xuICBwYWRkaW5nOiA1cHggNXB4O1xufVxuXG4jY2hhdC1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDdkYWRkO1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MTFDO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMjc1MTU7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjRkY4MTFDLCAxMCUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oI2YyNzUxNSwgMTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIiRoZWFkZXItaGVpZ2h0OiA4MHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mensagens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mensagens.service */ "./src/app/landing/mensagens.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(mensagemService, route) {
        this.mensagemService = mensagemService;
        this.route = route;
        this.mensagens = [];
        this.nomeCliente = 'Você';
        this.nomeBot = 'Trix';
        this.isLogin = false;
        this.showCortina = false;
        this.contextos = [];
        this.today = Date.now();
        this.beaconId = this.route.snapshot.paramMap.get("beaconId");
    }
    LandingComponent.prototype.sendMensagem = function (campo) {
        var _this = this;
        var textoPergunta = campo.value;
        if (textoPergunta !== '') {
            this.addPergunta(textoPergunta);
            this.mensagemService.sendMensagem(textoPergunta, this.contextos).subscribe(function (res) {
                _this.contextos = res.contextos;
                _this.metadata = res.metadata;
                if (res.mensagem[0] === 'LOGIN_NECESSARIO') {
                    _this.addResposta('Para essa solicitação, você será direcionado à tela de login. Aguarde...');
                    _this.showCortina = true;
                    setTimeout(function () { _this.isLogin = true; _this.showCortina = false; }, 2000);
                }
                else {
                    res.mensagem.forEach(function (el) {
                        _this.addResposta(el);
                    });
                }
                var element = document.getElementById('chat-mensagens');
                _this.scrollTo(element, element.scrollHeight, 500);
            });
        }
        this.limpaCampo(campo);
        campo.focus();
    };
    LandingComponent.prototype.saudacao = function () {
        var unidades = {
            '0647': 'na Agência Capital',
            '0001': 'na Agêncua Planalto',
            '9999': 'no Sindicato dos Bancários',
        };
        var mensagemDefault = 'Olá eu sou a Trix, a assistente virtual da Caixa. Caso você queira falar sobre o PIS ou benefícios socias é só me falar.';
        var mensagemPersonalizada = "Ol\u00E1 eu sou a Trix, a assistente virtual da Caixa. Vi que voc\u00EA est\u00E1 " + unidades[this.beaconId] + " e posso te ajudar com alguns servi\u00E7os da Caixa por aqui. Caso voc\u00EA queira falar sobre o PIS ou benef\u00EDcios socias \u00E9 s\u00F3 me falar.";
        return (this.beaconId !== null) ? mensagemPersonalizada : mensagemDefault;
    };
    LandingComponent.prototype.addPergunta = function (textoPergunta) {
        var pergunta = {
            tipo: 'pergunta',
            interlocutor: this.nomeCliente,
            texto: textoPergunta,
            hora: Date.now(),
        };
        this.mensagens.push(pergunta);
    };
    LandingComponent.prototype.addResposta = function (textoResposta) {
        var resposta = {
            tipo: 'resposta',
            interlocutor: this.nomeBot,
            texto: textoResposta,
            hora: Date.now(),
        };
        this.mensagens.push(resposta);
    };
    LandingComponent.prototype.limpaCampo = function (campo) {
        campo.value = '';
    };
    LandingComponent.prototype.scrollTo = function (element, to, duration) {
        var start = element.scrollTop;
        var change = to - start;
        var increment = 20;
        var currentTime = 0;
        var easeInOutQuad = this.easeInOutQuad;
        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    LandingComponent.prototype.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    LandingComponent.prototype.closeLogin = function (retornoLogin) {
        this.isLogin = false;
        if (!retornoLogin.login) {
            this.addResposta('Lamento, mas você não foi autenticado. Posso ajudar em algo mais?');
        }
        else {
            this.resposdePergunta(retornoLogin);
        }
    };
    LandingComponent.prototype.resposdePergunta = function (retornoLogin) {
        var _this = this;
        this.mensagemService.buscaApiSocial(retornoLogin).subscribe(function (res) {
            if (_this.metadata.intentName === 'PIS - Consulta Valor') {
                if (res.dados_consulta_servicos_sociais.dados_pis.beneficios.beneficio[0]) {
                    var valorPis = res.dados_consulta_servicos_sociais.dados_pis.beneficios.beneficio[0];
                    _this.addResposta("A situa\u00E7\u00E3o do seu PIS \u00E9 \"" + valorPis.situacao + "\" e o valor para receber \u00E9 " + valorPis.valor);
                }
                else {
                    _this.addResposta('Você não possui PIS para receber.');
                }
            }
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_mensagens_service__WEBPACK_IMPORTED_MODULE_2__["MensagensService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/mensagens.service.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/mensagens.service.ts ***!
  \**********************************************/
/*! exports provided: MensagensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensService", function() { return MensagensService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensagensService = /** @class */ (function () {
    function MensagensService(http) {
        this.http = http;
        this.url_sendMensagem = 'https://trix-server.herokuapp.com/mensagem';
        this.url_social = 'https://api.caixa.gov.br:8443/sandbox/servicos-sociais/v1/consulta?NIS=13056725312';
    }
    MensagensService.prototype.sendMensagem = function (mensagem, contextos) {
        return this.http.post(this.url_sendMensagem, { mensagem: mensagem, contextos: contextos }, { withCredentials: true, });
    };
    MensagensService.prototype.buscaApiSocial = function (retornoLogin) {
        var accessToken = retornoLogin.accessToken;
        return this.http.get(this.url_social, {
            headers: {
                apikey: 'l7xx3e4479b454a04307acc6ee5e1258f9e6',
                Authorization: "bearer " + accessToken,
            }
        });
    };
    MensagensService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MensagensService);
    return MensagensService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div id=\"bloco-inputs\">\n\n    <div id=\"entradas\">\n        <div class=\"bloco-input\">\n            <i class=\"fas fa-user-circle\"></i>\n            <input #usuario placeholder=\"usuario\">\n        </div>\n        <div class=\"bloco-input\">\n            <i class=\"fas fa-key\"></i>\n            <input #senha placeholder=\"senha\" type=\"password\">\n        </div>\n    </div>\n    <button (click)=\"login(usuario.value, senha.value)\">Entrar</button>\n  </div>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  padding: 16px;\n  position: fixed;\n  top: 80px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #26a;\n  border-top: 1px solid #2b80d5; }\n\n#bloco-inputs {\n  width: 60%;\n  max-width: 500px;\n  min-width: 300px; }\n\n#bloco-inputs button {\n    margin-top: 32px;\n    transition: all 200ms;\n    border: 0;\n    border-radius: 12px;\n    cursor: pointer;\n    color: white;\n    font-size: 18px;\n    outline: none;\n    width: 100%;\n    padding: 16px;\n    background: #fa2; }\n\n#bloco-inputs button:hover {\n      background: #ffb846;\n      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.bloco-input {\n  display: flex;\n  align-items: stretch; }\n\n.bloco-input i {\n    transition: all 200ms;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 16px 24px;\n    background: #fa2;\n    border-right: 1px solid #ffbe55;\n    color: white;\n    font-size: 24px; }\n\n.bloco-input input {\n    color: #444;\n    width: 100%;\n    font-size: 18px;\n    outline: none;\n    padding: 24px;\n    border: 0;\n    background: white; }\n\n.bloco-input:first-of-type {\n    border-bottom: 1px solid #666; }\n\n#entradas {\n  transition: all 200ms;\n  border-radius: 12px;\n  overflow: hidden;\n  background: transparent; }\n\n#entradas:hover {\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzZXIvUHJvamVjdHMvamVkaS14LWNoYXRjbGllbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9wcmFzZXIvUHJvamVjdHMvamVkaS14LWNoYXRjbGllbnQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixVQ0xnQjtFRE1oQixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLDhCQUF3QyxFQUMzQzs7QUFFRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBbUJuQjs7QUF0QkQ7SUFLUSxpQkFBZ0I7SUFFaEIsc0JBQXFCO0lBQ3JCLFVBQVM7SUFDVCxvQkFBbUI7SUFDbkIsZ0JBQWU7SUFDZixhQUFZO0lBQ1osZ0JBQWU7SUFDZixjQUFhO0lBQ2IsWUFBVztJQUNYLGNBQWE7SUFDYixpQkFWd0IsRUFlM0I7O0FBckJMO01Ba0JZLG9CQUEyQztNQUMzQyw4RUFBc0UsRUFDekU7O0FBSVQ7RUFDSSxjQUFhO0VBQ2IscUJBQW9CLEVBeUJ2Qjs7QUEzQkQ7SUFJUSxzQkFBcUI7SUFDckIsWUFBVztJQUNYLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsZ0NBQTBDO0lBQzFDLGFBQVk7SUFDWixnQkFBZSxFQUNsQjs7QUFkTDtJQWdCUSxZQUFXO0lBQ1gsWUFBVztJQUNYLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLGNBQWE7SUFDYixVQUFTO0lBQ1Qsa0JBQWlCLEVBQ3BCOztBQXZCTDtJQXlCUSw4QkFBNkIsRUFDaEM7O0FBR0w7RUFDSSxzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQix3QkFBdUIsRUFJMUI7O0FBUkQ7SUFNUSw4RUFBc0UsRUFDekUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4jY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMjZhO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGVuKCMyNmEsIDEwJSk7XG59XG5cbiNibG9jby1pbnB1dHMge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgICRjb3ItbGFyYW5qYS1jbGFybzogI2ZhMjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29yLWxhcmFuamEtY2xhcm87XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkY29yLWxhcmFuamEtY2xhcm8sIDclKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMiksMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ibG9jby1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYTI7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0ZW4oI2ZhMiwgMTAlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xuICAgIH1cbn1cblxuI2VudHJhZGFzIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xuICAgIH1cbn1cbiIsIiRoZWFkZXItaGVpZ2h0OiA4MHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.closeLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.login = function (usuario, senha) {
        var _this = this;
        this.loginService.login(usuario, senha, this.metadata).subscribe(function (res) {
            _this.closeLogin.emit(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "metadata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "closeLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url_login = 'https://trix-server.herokuapp.com/auth';
    }
    LoginService.prototype.login = function (usuario, senha, metadata) {
        return this.http.post(this.url_login, {
            usuario: usuario, senha: senha, metadata: metadata,
        }, { withCredentials: true, });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/praser/Projects/jedi-x-chatclient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map