(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demo/refresher/refresher.module": [
		"./src/app/demo/refresher/refresher.module.ts",
		"demo-refresher-refresher-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<tmac-app>-->\n  <!--<tmac-appbar >-->\n    <!--<ng-container start>-->\n      <!--<i (click)=\"toggleMenu()\" class=\"fa fa-bars\"></i>-->\n    <!--</ng-container>-->\n    <!--<ng-container title>-->\n        <!--一事通办公-->\n    <!--</ng-container>-->\n    <!--<ng-container end>-->\n      <!--<i class=\"fa fa-search\"></i>-->\n    <!--</ng-container>-->\n    <!--<ng-container bottom>-->\n      <!--<tmac-tabbar [tmacTabViews]=\"tabViews\">-->\n        <!--<tmac-tab (click)=\"tabViews.changeViewByIndex(0)\">-->\n            <!--<i class=\"fa fa-user\"></i>-->\n          <!--tab1-->\n        <!--</tmac-tab>-->\n        <!--<tmac-tab (click)=\"tabViews.changeViewByIndex(1)\">-->\n          <!--<i class=\"fa fa-home\"></i>-->\n          <!--tab2-->\n        <!--</tmac-tab >-->\n        <!--<tmac-tab (click)=\"tabViews.changeViewByIndex(2)\">-->\n          <!--<i class=\"fa fa-edit\"></i>-->\n          <!--tab3-->\n        <!--</tmac-tab>-->\n        <!--<tmac-tab (click)=\"tabViews.changeViewByIndex(3)\">-->\n          <!--<i class=\"fa fa-edit\"></i>-->\n          <!--tab4-->\n        <!--</tmac-tab>-->\n      <!--</tmac-tabbar>-->\n    <!--</ng-container>-->\n  <!--</tmac-appbar>-->\n\n  <!--<tmac-appbody>-->\n    <!--<tmac-tab-views  #tabViews [activeIndex]=\"2\" (onIndexChange)=\"onViewChange($event)\">-->\n      <!--<tmac-tab-view >-->\n        <!--<tmac-list-view>-->\n          <!--<tmac-list-view-item>-->\n            <!--<ng-container leading>-->\n              <!--<img style=\"width: 40px;padding: 4px 0\" src=\"https://avatars0.githubusercontent.com/u/22913282?v=4&s=120\" alt=\"\">-->\n            <!--</ng-container>-->\n            <!--<ng-container content=\"\">-->\n              <!--<div>-->\n                <!--架构之路-->\n                <!--<div style=\"font-size: 12px;opacity: 0.6\">账号:zazaaa1</div>-->\n              <!--</div>-->\n            <!--</ng-container>-->\n          <!--</tmac-list-view-item>-->\n          <!--<tmac-list-view-divider></tmac-list-view-divider>-->\n          <!--<tmac-list-view-item>-->\n            <!--<ng-container leading>-->\n              <!--<i class=\"fa fa-user-o\"></i>-->\n            <!--</ng-container>-->\n            <!--<ng-container content=\"\">-->\n              <!--我的-->\n            <!--</ng-container>-->\n          <!--</tmac-list-view-item>-->\n          <!--<tmac-list-view-item>-->\n            <!--<ng-container leading>-->\n              <!--<i class=\"fa fa-user-o\"></i>-->\n            <!--</ng-container>-->\n            <!--<ng-container content=\"\">-->\n              <!--我的-->\n            <!--</ng-container>-->\n          <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item><tmac-list-view-item>-->\n          <!--<ng-container leading>-->\n            <!--<i class=\"fa fa-user-o\"></i>-->\n          <!--</ng-container>-->\n          <!--<ng-container content=\"\">-->\n            <!--我的-->\n          <!--</ng-container>-->\n        <!--</tmac-list-view-item>-->\n\n          <!--<tmac-list-view-item>-->\n            <!--<ng-container leading>-->\n              <!--<i class=\"fa fa-edit\"></i>-->\n            <!--</ng-container>-->\n            <!--<ng-container content=\"\">-->\n              <!--钱包-->\n            <!--</ng-container>-->\n            <!--<ng-container ending>-->\n              <!--<i class=\"fa fa-angle-right\"></i>-->\n            <!--</ng-container>-->\n          <!--</tmac-list-view-item>-->\n\n        <!--</tmac-list-view>      </tmac-tab-view>-->\n\n      <!--<tmac-tab-view >-->\n        <!--<img src=\"/assets/images/ica-slidebox-img-2.png\" alt=\"\">-->\n      <!--</tmac-tab-view>-->\n\n      <!--<tmac-tab-view >-->\n        <!--<img src=\"/assets/images/ica-slidebox-img-3.png\" alt=\"\">-->\n      <!--</tmac-tab-view>-->\n\n      <!--<tmac-tab-view >-->\n        <!--<img src=\"/assets/images/ica-slidebox-img-4.png\" alt=\"\">-->\n      <!--</tmac-tab-view>-->\n    <!--</tmac-tab-views>-->\n\n  <!--</tmac-appbody>-->\n<!--</tmac-app>-->\n<tmac-side-menu>\n  <app-side-menu></app-side-menu>\n</tmac-side-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tmac-tab-view img {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGNvZGVfcmVwb3NpdG9yeVxcZWFzeXR1bmVcXHRtYWMtbW9iaWxlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0bWFjLXRhYi12aWV3e1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tmac_mobile_service_tmac_action_sheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tmac-mobile/service/tmac-action-sheet.service */ "./src/app/tmac-mobile/service/tmac-action-sheet.service.ts");
/* harmony import */ var _tmac_mobile_service_tmac_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tmac-mobile/service/tmac-side-menu.service */ "./src/app/tmac-mobile/service/tmac-side-menu.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(actionSheetService, sideMenuService) {
        this.actionSheetService = actionSheetService;
        this.sideMenuService = sideMenuService;
        this.title = 'tmac-mobile';
        // this.actionSheetService.builder()
        //   .title('选择')
        //   .button('男生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .button('女生','fa fa-home')
        //   .enableBackdropDismiss(true)
        //   .cancelButton('取消','fa fa-close')
        //   .present();
    }
    AppComponent.prototype.onViewChange = function ($event) {
    };
    AppComponent.prototype.toggleMenu = function () {
        this.sideMenuService.toggleById();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tmac_mobile_service_tmac_action_sheet_service__WEBPACK_IMPORTED_MODULE_2__["TmacActionSheetService"],
            _tmac_mobile_service_tmac_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["TmacSideMenuService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _test_listview_demo_listview_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test/listview-demo/listview-demo.component */ "./src/app/test/listview-demo/listview-demo.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _test_listview_demo_listview_demo_component__WEBPACK_IMPORTED_MODULE_9__["ListviewDemoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_8__["ROUTER_CONFIG"]),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: ROUTER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIG", function() { return ROUTER_CONFIG; });
/* harmony import */ var _test_listview_demo_listview_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/listview-demo/listview-demo.component */ "./src/app/test/listview-demo/listview-demo.component.ts");

var ROUTER_CONFIG = [
    { path: '', pathMatch: 'full', redirectTo: '/refresher/basic' },
    { path: 'listview', component: _test_listview_demo_listview_demo_component__WEBPACK_IMPORTED_MODULE_0__["ListviewDemoComponent"] },
    { path: 'refresher', loadChildren: './demo/refresher/refresher.module#RefresherModule' },
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tmac_mobile_tmac_mobile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tmac-mobile/tmac-mobile.module */ "./src/app/tmac-mobile/tmac-mobile.module.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/share/side-menu/side-menu.component.ts");





var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tmac_mobile_tmac_mobile_module__WEBPACK_IMPORTED_MODULE_3__["TmacMobileModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tmac_mobile_tmac_mobile_module__WEBPACK_IMPORTED_MODULE_3__["TmacMobileModule"],
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/share/side-menu/side-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/share/side-menu/side-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<tmac-appbody>\n  <tmac-list-view>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <img style=\"width: 40px;padding: 4px 0\" src=\"https://avatars0.githubusercontent.com/u/22913282?v=4&s=120\" alt=\"\">\n      </ng-container>\n      <ng-container content=\"\">\n        <div>\n          架构之路\n          <div style=\"font-size: 12px;opacity: 0.6\">账号:zazaaa1</div>\n        </div>\n      </ng-container>\n    </tmac-list-view-item>\n    <tmac-list-view-divider></tmac-list-view-divider>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-user-o\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        我的\n      </ng-container>\n    </tmac-list-view-item>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-user-o\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        我的\n      </ng-container>\n    </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item>\n\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-edit\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        钱包\n      </ng-container>\n      <ng-container ending>\n        <i class=\"fa fa-angle-right\"></i>\n      </ng-container>\n    </tmac-list-view-item>\n\n  </tmac-list-view>\n</tmac-appbody>\n"

/***/ }),

/***/ "./src/app/share/side-menu/side-menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/share/side-menu/side-menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/share/side-menu/side-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/share/side-menu/side-menu.component.ts ***!
  \********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/share/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/share/side-menu/side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/test/listview-demo/listview-demo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/test/listview-demo/listview-demo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tmac-app>\n<tmac-appbar >\n  <ng-container start>\n  <i (click)=\"toggleMenu()\" class=\"fa fa-bars\"></i>\n  </ng-container>\n  <ng-container title>\n  一事通办公\n  </ng-container>\n  <ng-container end>\n  <i class=\"fa fa-search\"></i>\n  </ng-container>\n</tmac-appbar>\n\n<tmac-appbody>\n  <tmac-list-view>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <img style=\"width: 40px;padding: 4px 0\" src=\"https://avatars0.githubusercontent.com/u/22913282?v=4&s=120\" alt=\"\">\n      </ng-container>\n      <ng-container content=\"\">\n        <div>\n          架构之路\n          <div style=\"font-size: 12px;opacity: 0.6\">账号:zazaaa1</div>\n        </div>\n      </ng-container>\n    </tmac-list-view-item>\n    <tmac-list-view-divider></tmac-list-view-divider>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-user-o\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        我的\n      </ng-container>\n    </tmac-list-view-item>\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-user-o\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        我的\n      </ng-container>\n    </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item><tmac-list-view-item>\n    <ng-container leading>\n      <i class=\"fa fa-user-o\"></i>\n    </ng-container>\n    <ng-container content=\"\">\n      我的\n    </ng-container>\n  </tmac-list-view-item>\n\n    <tmac-list-view-item>\n      <ng-container leading>\n        <i class=\"fa fa-edit\"></i>\n      </ng-container>\n      <ng-container content=\"\">\n        钱包\n      </ng-container>\n      <ng-container ending>\n        <i class=\"fa fa-angle-right\"></i>\n      </ng-container>\n    </tmac-list-view-item>\n\n  </tmac-list-view>\n</tmac-appbody>\n</tmac-app>\n"

/***/ }),

/***/ "./src/app/test/listview-demo/listview-demo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/test/listview-demo/listview-demo.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvbGlzdHZpZXctZGVtby9saXN0dmlldy1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/listview-demo/listview-demo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/test/listview-demo/listview-demo.component.ts ***!
  \***************************************************************/
/*! exports provided: ListviewDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewDemoComponent", function() { return ListviewDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListviewDemoComponent = /** @class */ (function () {
    function ListviewDemoComponent() {
    }
    ListviewDemoComponent.prototype.ngOnInit = function () {
    };
    ListviewDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listview-demo',
            template: __webpack_require__(/*! ./listview-demo.component.html */ "./src/app/test/listview-demo/listview-demo.component.html"),
            styles: [__webpack_require__(/*! ./listview-demo.component.scss */ "./src/app/test/listview-demo/listview-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListviewDemoComponent);
    return ListviewDemoComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appbar-wrapper\">\n  <div class=\"appbar-start\">\n    <ng-content select=\"[start]\"></ng-content>\n  </div>\n  <div class=\"appbar-title\">\n    <ng-content select=\"[title]\"></ng-content>\n  </div>\n  <div class=\"appbar-end\">\n    <ng-content select=\"[end]\"></ng-content>\n  </div>\n\n</div>\n<div class=\"appbar-wrapper\">\n    <ng-content select=\"[bottom]\"></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC9hcHAtYmFyL3RtYWMtYXBwLWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.ts ***!
  \*************************************************************************/
/*! exports provided: TmacAppBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacAppBarComponent", function() { return TmacAppBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");




var TmacAppBarComponent = /** @class */ (function () {
    function TmacAppBarComponent(elementRef, renderer, tmacGlobalConfig, tmaCssService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.tmaCssService.renderComponentClass(renderer, 'tmac-appbar', this.elementRef);
    }
    TmacAppBarComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.configData.backgroundColor);
    };
    Object.defineProperty(TmacAppBarComponent.prototype, "configData", {
        get: function () {
            return {
                backgroundColor: this.tmacGlobalConfig.colorsMap[this.backgroundColor] || this.backgroundColor
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TmacAppBarComponent.prototype, "backgroundColor", void 0);
    TmacAppBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-appbar',
            template: __webpack_require__(/*! ./tmac-app-bar.component.html */ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.html"),
            styles: [__webpack_require__(/*! ./tmac-app-bar.component.scss */ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_3__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_2__["TmaCssService"]])
    ], TmacAppBarComponent);
    return TmacAppBarComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-body/tmac-app-body.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-content\" #scrollContent >\n  <ng-content></ng-content>\n</div>\n<ng-content select=\"tmac-refresher\"></ng-content>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-body/tmac-app-body.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC9hcHAtYm9keS90bWFjLWFwcC1ib2R5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-body/tmac-app-body.component.ts ***!
  \***************************************************************************/
/*! exports provided: TmacAppBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacAppBodyComponent", function() { return TmacAppBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacAppBodyComponent = /** @class */ (function () {
    function TmacAppBodyComponent(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        // 内容正在滑动
        this.scrolling = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // 滑动结束
        this.scrollEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // 开始滑动
        this.scrollStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TmacAppBodyComponent.prototype.ngOnInit = function () {
    };
    TmacAppBodyComponent.prototype.ngAfterContentInit = function () {
        this.initContentHeight();
    };
    TmacAppBodyComponent.prototype.initContentHeight = function () {
        var parent = this.elementRef.nativeElement.parentElement;
        for (var _i = 0, _a = parent.childNodes; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.tagName === 'TMAC-APPBAR') {
                this._top = child.clientHeight;
            }
            if (child.tagName === 'TMAC-FOOTER') {
                this._bottom = child.clientHeight;
            }
        }
        if (this._top) {
            this.renderer2.setStyle(this._scrollContent.nativeElement, 'marginTop', this._top + "px");
        }
        if (this._bottom) {
            this.renderer2.setStyle(this._scrollContent.nativeElement, 'marginTop', this._bottom + "px");
        }
    };
    Object.defineProperty(TmacAppBodyComponent.prototype, "scrollElement", {
        get: function () {
            return this._scrollContent.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TmacAppBodyComponent.prototype, "_scrollContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacAppBodyComponent.prototype, "scrolling", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacAppBodyComponent.prototype, "scrollEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacAppBodyComponent.prototype, "scrollStart", void 0);
    TmacAppBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-appbody',
            template: __webpack_require__(/*! ./tmac-app-body.component.html */ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.html"),
            styles: [__webpack_require__(/*! ./tmac-app-body.component.scss */ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TmacAppBodyComponent);
    return TmacAppBodyComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-modal/tmac-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-modal/tmac-modal.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC9hcHAtbW9kYWwvdG1hYy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app-modal/tmac-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: TmacModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacModalComponent", function() { return TmacModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacModalComponent = /** @class */ (function () {
    function TmacModalComponent() {
    }
    TmacModalComponent.prototype.ngOnInit = function () {
    };
    TmacModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-modal',
            template: __webpack_require__(/*! ./tmac-modal.component.html */ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.html"),
            styles: [__webpack_require__(/*! ./tmac-modal.component.scss */ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacModalComponent);
    return TmacModalComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/app/app.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app/app.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app/app.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/app/app.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tmac-mobile/component/app/app.component.ts ***!
  \************************************************************/
/*! exports provided: TmacAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacAppComponent", function() { return TmacAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacAppComponent = /** @class */ (function () {
    function TmacAppComponent() {
    }
    TmacAppComponent.prototype.ngOnInit = function () {
    };
    TmacAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/tmac-mobile/component/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/tmac-mobile/component/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacAppComponent);
    return TmacAppComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tmac-modal>\n  <tmac-backdrop *ngIf=\"context?.showBackdrop\" (click)=\"bdClick()\"></tmac-backdrop>\n  <div class=\"action-sheet-wrapper\">\n    <div [@slideAnimation]=\"state\" class=\"action-sheet-container\">\n      <div class=\"actionsheet-group\">\n        <div class=\"action-sheet-title\" >{{context?.title}}</div>\n\n        <div (click)=\"onButtonClick(button)\" class=\"action-sheet-item\" *ngFor=\"let button of context?.buttons\">\n          <div class=\"action-sheet-item-icon\">\n            <i class=\"{{button?.icon}}\"></i>\n          </div>\n          <div  class=\"action-sheet-item-msg\">\n            {{button?.text}}\n          </div>\n        </div>\n\n      </div>\n      <div class=\"actionsheet-group\" (click)=\"onCancelButtonClick(context?.cancelButton)\">\n        <div class=\"action-sheet-title\" >\n          <i class=\"{{context?.cancelButton?.icon}}\"></i>\n          {{context?.cancelButton?.text}}\n        </div>\n      </div>\n    </div>\n  </div>\n</tmac-modal>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWFjdGlvbi1zaGVldHMvdG1hYy1hY3Rpb24tc2hlZXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TmacActionSheetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacActionSheetsComponent", function() { return TmacActionSheetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");






var TmacActionSheetsComponent = /** @class */ (function () {
    function TmacActionSheetsComponent(platformLocation, elementRef, renderer, tmacGlobalConfig, tmaCssService) {
        this.platformLocation = platformLocation;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.state = 'slideFromBottom';
        this.tmaCssService.renderComponentClass(renderer, 'tmac-tabbar', this.elementRef);
    }
    TmacActionSheetsComponent.prototype.ngOnInit = function () {
    };
    TmacActionSheetsComponent.prototype.ngOnDestroy = function () {
        this.state = 'slideToBottom';
    };
    TmacActionSheetsComponent.prototype.bdClick = function () {
        if (this.context.enableBackdropDismiss) {
            this.cancel('dismiss by backdrop');
        }
    };
    TmacActionSheetsComponent.prototype.onButtonClick = function (button) {
        this.ok(button);
    };
    TmacActionSheetsComponent.prototype.onCancelButtonClick = function (button) {
        this.cancel(button);
    };
    TmacActionSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-action-sheets',
            template: __webpack_require__(/*! ./tmac-action-sheets.component.html */ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('slideFromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(0px, 0px, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('slideToBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(0px, 100%, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(0px, 100%, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void  => slideFromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('slideFromBottom  => slideToBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('slideFromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(0px, 0px, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('slideToLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(-100%, 0, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'transform': 'translate3d(-100%, 0, 0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void  => slideFromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('slideFromLeft  => slideToLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('slideToLeft  => slideFromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s')),
                ])
            ],
            styles: [__webpack_require__(/*! ./tmac-action-sheets.component.scss */ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_4__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_5__["TmaCssService"]])
    ], TmacActionSheetsComponent);
    return TmacActionSheetsComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWJhY2tkcm9wL3RtYWMtYmFja2Ryb3AuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.ts ***!
  \********************************************************************************/
/*! exports provided: TmacBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacBackdropComponent", function() { return TmacBackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacBackdropComponent = /** @class */ (function () {
    function TmacBackdropComponent() {
    }
    TmacBackdropComponent.prototype.ngOnInit = function () {
    };
    TmacBackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-backdrop',
            template: __webpack_require__(/*! ./tmac-backdrop.component.html */ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.html"),
            styles: [__webpack_require__(/*! ./tmac-backdrop.component.scss */ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacBackdropComponent);
    return TmacBackdropComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-button/tmac-button.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tmac-button works!\n</p>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-button/tmac-button.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWJ1dHRvbi90bWFjLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-button/tmac-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: TmacButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacButtonComponent", function() { return TmacButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacButtonComponent = /** @class */ (function () {
    function TmacButtonComponent() {
    }
    TmacButtonComponent.prototype.ngOnInit = function () {
    };
    TmacButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tmac-button',
            template: __webpack_require__(/*! ./tmac-button.component.html */ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.html"),
            styles: [__webpack_require__(/*! ./tmac-button.component.scss */ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacButtonComponent);
    return TmacButtonComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-indicator-pan\">\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWluZGljYXRvci90bWFjLWluZGljYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TmacIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacIndicatorComponent", function() { return TmacIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacIndicatorComponent = /** @class */ (function () {
    function TmacIndicatorComponent() {
    }
    TmacIndicatorComponent.prototype.ngOnInit = function () {
    };
    TmacIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-indicator',
            template: __webpack_require__(/*! ./tmac-indicator.component.html */ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.html"),
            styles: [__webpack_require__(/*! ./tmac-indicator.component.scss */ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacIndicatorComponent);
    return TmacIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-list-view-divider-inner\">\n<ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWxpc3Qtdmlldy1kaXZpZGVyL3RtYWMtbGlzdC12aWV3LWRpdmlkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TmacListViewDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacListViewDividerComponent", function() { return TmacListViewDividerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacListViewDividerComponent = /** @class */ (function () {
    function TmacListViewDividerComponent() {
    }
    TmacListViewDividerComponent.prototype.ngOnInit = function () {
    };
    TmacListViewDividerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-list-view-divider',
            template: __webpack_require__(/*! ./tmac-list-view-divider.component.html */ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.html"),
            styles: [__webpack_require__(/*! ./tmac-list-view-divider.component.scss */ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacListViewDividerComponent);
    return TmacListViewDividerComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-list-view-item \">\n  <div class=\"tmac-list-view-item-leading\">\n    <ng-content select=\"[leading]\"></ng-content>\n  </div>\n  <div class=\"tmac-list-view-item-body\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n  <div class=\"tmac-list-view-item-ending\">\n    <ng-content select=\"[ending]\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWxpc3Qtdmlldy1pdGVtL3RtYWMtbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TmacListViewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacListViewItemComponent", function() { return TmacListViewItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacListViewItemComponent = /** @class */ (function () {
    function TmacListViewItemComponent() {
    }
    TmacListViewItemComponent.prototype.ngOnInit = function () {
    };
    TmacListViewItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-list-view-item',
            template: __webpack_require__(/*! ./tmac-list-view-item.component.html */ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.html"),
            styles: [__webpack_require__(/*! ./tmac-list-view-item.component.scss */ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacListViewItemComponent);
    return TmacListViewItemComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-list-view-inner\">\n  <div class=\"tmac-list-view-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLWxpc3Qtdmlldy90bWFjLWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TmacListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacListViewComponent", function() { return TmacListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-body/tmac-app-body.component */ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.ts");





var TmacListViewComponent = /** @class */ (function () {
    function TmacListViewComponent(elementRef, renderer, tmacGlobalConfig, appBodyComponent, tmaCssService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.appBodyComponent = appBodyComponent;
        this.tmaCssService = tmaCssService;
        this.tmaCssService.renderComponentClass(renderer, 'tmac-list-view', this.elementRef);
    }
    TmacListViewComponent.prototype.ngOnInit = function () {
    };
    TmacListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-list-view',
            template: __webpack_require__(/*! ./tmac-list-view.component.html */ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.html"),
            styles: [__webpack_require__(/*! ./tmac-list-view.component.scss */ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"],
            _app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_4__["TmacAppBodyComponent"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__["TmaCssService"]])
    ], TmacListViewComponent);
    return TmacListViewComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-refresher-content-icon\">\n  <tmac-indicator *ngIf=\"refresherComponent.state === 'fresh'\"></tmac-indicator>\n  <i class=\"fa fa-arrow-up\" *ngIf=\"refresherComponent.state === 'ready'\"></i>\n  <i class=\"fa fa-arrow-down\" *ngIf=\"refresherComponent.state === 'pulling'\"></i>\n  <i class=\"fa fa-check\" *ngIf=\"refresherComponent.state === 'complete'\"></i>\n</div>\n<div class=\"tmac-reshresher-content-label\">\n  {{refreshText}}\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXJlZnJlc2hlci1jb250ZW50L3RtYWMtcmVmcmVzaGVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TmacRefresherContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacRefresherContentComponent", function() { return TmacRefresherContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _tmac_refresher_tmac_refresher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tmac-refresher/tmac-refresher.component */ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.ts");





var TmacRefresherContentComponent = /** @class */ (function () {
    function TmacRefresherContentComponent(elementRef, renderer, tmacGlobalConfig, tmaCssService, refresherComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.refresherComponent = refresherComponent;
        this.tmaCssService.renderComponentClass(renderer, 'tmac-refresher-content', this.elementRef);
    }
    TmacRefresherContentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TmacRefresherContentComponent.prototype, "refreshText", {
        get: function () {
            if (this.refresherComponent) {
                if (this.refresherComponent.state === 'pulling') {
                    return '下拉刷新';
                }
                if (this.refresherComponent.state === 'ready') {
                    return '释放立即刷新';
                }
                if (this.refresherComponent.state === 'fresh') {
                    return '正在刷新...';
                }
                if (this.refresherComponent.state === 'complete') {
                    return '刷新成功';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    TmacRefresherContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-refresher-content',
            template: __webpack_require__(/*! ./tmac-refresher-content.component.html */ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.html"),
            styles: [__webpack_require__(/*! ./tmac-refresher-content.component.scss */ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__["TmaCssService"],
            _tmac_refresher_tmac_refresher_component__WEBPACK_IMPORTED_MODULE_4__["TmacRefresherComponent"]])
    ], TmacRefresherContentComponent);
    return TmacRefresherContentComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXJlZnJlc2hlci90bWFjLXJlZnJlc2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TmacRefresherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacRefresherComponent", function() { return TmacRefresherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-body/tmac-app-body.component */ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var TmacRefresherComponent = /** @class */ (function () {
    function TmacRefresherComponent(elementRef, renderer, tmacGlobalConfig, tmaCssService, appBodyComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.appBodyComponent = appBodyComponent;
        this.translatedY = 0;
        this.state = 'hidden';
        this.maxPull = 200; // 最大的拉动距离
        this.minPull = 40; // 拉动多少距离便会触动刷新
        this.transition = 300; // 滑动动画的时间
        this.pullSpeed = 0.5; // 滑动速度
        this.enable = true; // 滑动速度
        this.completeDelay = 400; // 滑动速度
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tmaCssService.renderComponentClass(renderer, 'tmac-refresher', this.elementRef);
    }
    TmacRefresherComponent.prototype.ngOnInit = function () {
    };
    TmacRefresherComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // 初始化top
        this.renderer.setStyle(this.elementRef.nativeElement, 'top', this.appBodyComponent._top + "px");
        this.touchStartSubscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.appBodyComponent.scrollElement, 'touchstart')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function ($event) { return $event.targetTouches[0]; }))
            .subscribe(function (touch) {
            if (_this.enable && _this.canStartMove()) {
                _this.prevY = touch.pageY;
                _this.renderTransition(0);
            }
        });
        this.touchMoveSubscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.appBodyComponent.scrollElement, 'touchmove')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function ($event) { return $event.targetTouches[0]; }))
            .subscribe(function (touch) {
            if (_this.enable && _this.canStartMove() && _this.prevY) {
                _this.translatedY += (touch.pageY - _this.prevY) * _this.pullSpeed;
                if (_this.translatedY > 0 && _this.translatedY < _this.minPull) {
                    _this.changeState('pulling');
                }
                if (_this.translatedY > _this.minPull) {
                    _this.changeState('ready');
                }
                _this.renderTransition(0);
                _this.renderTranslated(_this.translatedY);
                _this.prevY = touch.pageY;
            }
        });
        this.touchEndSubscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.appBodyComponent.scrollElement, 'touchend')
            .subscribe((function () {
            if (_this.enable && _this.canStartMove() && _this.prevY) {
                if (_this.translatedY < _this.minPull) {
                    _this.translatedY = 0;
                    _this.renderTranslated(_this.translatedY);
                    _this.renderTransition(_this.transition);
                    _this.changeState('hidden');
                }
                if (_this.translatedY > _this.minPull) {
                    _this.translatedY = _this.minPull;
                    _this.renderTranslated(_this.translatedY);
                    _this.renderTransition(_this.transition);
                    _this.changeState('fresh');
                    _this.onRefresh.emit(_this);
                }
            }
            _this.prevY = null;
        }));
    };
    TmacRefresherComponent.prototype.ngOnDestroy = function () {
        if (this.touchStartSubscribe) {
            this.touchStartSubscribe.unsubscribe();
        }
        if (this.touchMoveSubscribe) {
            this.touchMoveSubscribe.unsubscribe();
        }
        if (this.touchEndSubscribe) {
            this.touchEndSubscribe.unsubscribe();
        }
    };
    // 只有scroll在顶部的时候，才能监听滑动
    TmacRefresherComponent.prototype.canStartMove = function () {
        return this.appBodyComponent.scrollElement.scrollTop === 0;
    };
    TmacRefresherComponent.prototype.renderTranslated = function (translatedY) {
        if (translatedY > this.maxPull) {
            translatedY = this.maxPull;
        }
        if (translatedY < 0) {
            translatedY = 0;
        }
        this.renderer.setStyle(this.appBodyComponent.scrollElement, 'transform', "translate3d(0px, " + translatedY + "px, 0px)");
    };
    TmacRefresherComponent.prototype.renderTransition = function (transition) {
        this.renderer.setStyle(this.appBodyComponent.scrollElement, 'transition', transition + "ms");
    };
    // 关闭刷新
    TmacRefresherComponent.prototype.complete = function () {
        var _this = this;
        this.changeState('complete');
        var timerSubscripe = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.completeDelay).subscribe(function () {
            _this.renderTransition(_this.transition);
            _this.renderTranslated(0);
            _this.translatedY = 0;
            _this.changeState('hidden');
            timerSubscripe.unsubscribe();
        });
    };
    // 禁止使用
    TmacRefresherComponent.prototype.disable = function (enable) {
        this.enable = enable;
    };
    // 修改状态
    TmacRefresherComponent.prototype.changeState = function (state) {
        this.state = state;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TmacRefresherComponent.prototype, "maxPull", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TmacRefresherComponent.prototype, "minPull", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TmacRefresherComponent.prototype, "transition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TmacRefresherComponent.prototype, "pullSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TmacRefresherComponent.prototype, "enable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TmacRefresherComponent.prototype, "completeDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacRefresherComponent.prototype, "onRefresh", void 0);
    TmacRefresherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-refresher',
            template: __webpack_require__(/*! ./tmac-refresher.component.html */ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.html"),
            styles: [__webpack_require__(/*! ./tmac-refresher.component.scss */ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__["TmaCssService"],
            _app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_4__["TmacAppBodyComponent"]])
    ], TmacRefresherComponent);
    return TmacRefresherComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tmac-backdrop *ngIf=\"isShow\"  (click)=\"onDbClick()\"></tmac-backdrop>\r\n<div #innerMenu (panstart)=\"onPanStart($event)\" (panmove)=\"onPanMove($event)\" (panend)=\"onPanEnd($event)\"\r\n     [ngStyle]=\"{'transform':transformStyle,'transition-duration':transformDurationStyle}\" class=\"tmac-menu-inner\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXNpZGUtbWVudS90bWFjLXNpZGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TmacSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacSideMenuComponent", function() { return TmacSideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _service_tmac_side_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/tmac-side-menu.service */ "./src/app/tmac-mobile/service/tmac-side-menu.service.ts");






var TmacSideMenuComponent = /** @class */ (function () {
    function TmacSideMenuComponent(platformLocation, elementRef, renderer, tmacGlobalConfig, tmacSideMenuService, tmaCssService) {
        this.platformLocation = platformLocation;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmacSideMenuService = tmacSideMenuService;
        this.tmaCssService = tmaCssService;
        this.prevX = 0;
        this.movedX = 0;
        this.transformStyle = 'translate3d(-100%, 0, 0px)';
        this.transformDurationStyle = '0ms';
        this.enableBackdropDismiss = true;
        this.isShow = false;
        this.tmacSideMenuService.register(this);
        this.tmaCssService.renderComponentClass(renderer, 'tmac-tabbar', this.elementRef);
    }
    TmacSideMenuComponent.prototype.ngOnInit = function () {
        if (this.isShow) {
            this.show();
        }
    };
    TmacSideMenuComponent.prototype.ngOnDestroy = function () {
    };
    TmacSideMenuComponent.prototype.onPanStart = function ($event) {
        $event.preventDefault();
        this.prevX = $event.center.x;
        this.startEvent = $event;
    };
    TmacSideMenuComponent.prototype.onPanMove = function ($event) {
        $event.preventDefault();
        var range = $event.center.x - this.prevX;
        this.changeTransformStyle(range);
        this.prevX = $event.center.x;
    };
    TmacSideMenuComponent.prototype.onPanEnd = function ($event) {
        $event.preventDefault();
        this.prevX = null;
        // 如果是快速移动，则直接滑动
        var globalMovedX = this.startEvent.center.x - $event.center.x;
        if (globalMovedX > 10 && ($event.timeStamp - this.startEvent.timeStamp) < 300) {
            this.hide();
            return;
        }
        //
        // 根据移动的x距离，判断结束时候的index
        if (Math.abs(this.movedX) < this.getTabViewWidth() / 2) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    TmacSideMenuComponent.prototype.changeTransformStyle = function (range) {
        this.movedX = this.movedX + range;
        if (this.movedX >= this.maxX) {
            this.movedX = this.maxX;
        }
        this.transformStyle = "translate3d(" + this.movedX + "px, 0px, 0px)";
    };
    TmacSideMenuComponent.prototype.getTabViewWidth = function () {
        return this.InnerMenu.nativeElement.clientWidth;
    };
    Object.defineProperty(TmacSideMenuComponent.prototype, "maxX", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmacSideMenuComponent.prototype, "minX", {
        get: function () {
            return this.elementRef.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    TmacSideMenuComponent.prototype.toggle = function () {
        if (!this.isShow) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    TmacSideMenuComponent.prototype.onDbClick = function () {
        if (this.enableBackdropDismiss) {
            this.hide();
        }
    };
    TmacSideMenuComponent.prototype.show = function () {
        this.transformStyle = 'translate3d(0, 0, 0px)';
        this.transformDurationStyle = '300ms';
        this.isShow = true;
    };
    TmacSideMenuComponent.prototype.hide = function () {
        this.transformStyle = 'translate3d(-100%, 0, 0px)';
        this.transformDurationStyle = '300ms';
        this.isShow = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('innerMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TmacSideMenuComponent.prototype, "InnerMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TmacSideMenuComponent.prototype, "enableBackdropDismiss", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TmacSideMenuComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TmacSideMenuComponent.prototype, "isShow", void 0);
    TmacSideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-side-menu',
            template: __webpack_require__(/*! ./tmac-side-menu.component.html */ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.html"),
            styles: [__webpack_require__(/*! ./tmac-side-menu.component.scss */ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_3__["TmacGlobalConfig"],
            _service_tmac_side_menu_service__WEBPACK_IMPORTED_MODULE_5__["TmacSideMenuService"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_4__["TmaCssService"]])
    ], TmacSideMenuComponent);
    return TmacSideMenuComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-tab-view-zoom\">\n<ng-content></ng-content>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXRhYi12aWV3L3RtYWMtdGFiLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: TmacTabViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacTabViewComponent", function() { return TmacTabViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacTabViewComponent = /** @class */ (function () {
    function TmacTabViewComponent() {
    }
    TmacTabViewComponent.prototype.ngOnInit = function () {
    };
    TmacTabViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-tab-view',
            template: __webpack_require__(/*! ./tmac-tab-view.component.html */ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.html"),
            styles: [__webpack_require__(/*! ./tmac-tab-view.component.scss */ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacTabViewComponent);
    return TmacTabViewComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmac-tab-views-container\">\n  <div (panstart)=\"onPanStart($event)\" (panmove)=\"onPanMove($event)\" (panend)=\"onPanEnd($event)\"\n       #tabViewWrapper\n       [ngStyle]=\"{'transform':transformStyle,'transition-duration':transformDurationStyle}\"\n       class=\"tmac-tab-view-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXRhYi12aWV3cy90bWFjLXRhYi12aWV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TmacTabViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacTabViewsComponent", function() { return TmacTabViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _tmac_tab_view_tmac_tab_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tmac-tab-view/tmac-tab-view.component */ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.ts");





var TmacTabViewsComponent = /** @class */ (function () {
    function TmacTabViewsComponent(elementRef, renderer, tmacGlobalConfig, tmaCssService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.transformStyle = 'translate3d(0px, 0px, 0px)';
        this.transformDurationStyle = '0ms';
        this.prevX = 0;
        this.movedX = 0;
        this.activeIndex = 0;
        this.onIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onViewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tmaCssService.renderComponentClass(renderer, 'tmac-tab-views', this.elementRef);
    }
    TmacTabViewsComponent.prototype.ngOnInit = function () {
    };
    TmacTabViewsComponent.prototype.ngAfterViewInit = function () {
        this.changeViewByIndex(this.activeIndex);
    };
    TmacTabViewsComponent.prototype.changeViewByIndex = function (index) {
        this.movedX = -(index * this.getTabViewWidth());
        this.changeTransformStyle(0);
        this.activeIndex = index;
    };
    TmacTabViewsComponent.prototype.onPanStart = function ($event) {
        $event.preventDefault();
        this.prevX = $event.center.x;
        this.startEvent = $event;
    };
    TmacTabViewsComponent.prototype.onPanMove = function ($event) {
        $event.preventDefault();
        var range = $event.center.x - this.prevX;
        this.changeTransformStyle(range);
        this.prevX = $event.center.x;
    };
    TmacTabViewsComponent.prototype.onPanEnd = function ($event) {
        $event.preventDefault();
        this.prevX = null;
        // 如果是快速移动，则直接滑动
        var globalMovedX = this.startEvent.center.x - $event.center.x;
        if (Math.abs(globalMovedX) > 10 && ($event.timeStamp - this.startEvent.timeStamp) < 300) {
            var movedIndexX_1 = this.movedX % this.getTabViewWidth();
            var range_1;
            if (globalMovedX < 0) {
                range_1 = -movedIndexX_1;
            }
            else {
                range_1 = -this.getTabViewWidth() - movedIndexX_1;
                if ((this.movedX + range_1) <= this.minX) {
                    range_1 = -movedIndexX_1;
                }
            }
            this.changeTransformStyle(range_1);
            return;
        }
        // 根据移动的x距离，判断结束时候的index
        var movedIndexX = this.movedX % this.getTabViewWidth();
        var range;
        if (Math.abs(movedIndexX) < this.getTabViewWidth() / 2) {
            range = -movedIndexX;
        }
        else {
            range = -this.getTabViewWidth() - movedIndexX;
        }
        this.changeTransformStyle(range);
    };
    TmacTabViewsComponent.prototype.changeTransformStyle = function (range) {
        this.movedX = this.movedX + range;
        if (this.movedX >= this.maxX) {
            this.movedX = this.maxX;
        }
        if (this.movedX <= this.minX) {
            this.movedX = this.minX;
        }
        this.transformStyle = "translate3d(" + this.movedX + "px, 0px, 0px)";
        if (Math.abs(range) < 10) {
            this.transformDurationStyle = '0ms';
        }
        else {
            this.transformDurationStyle = '300ms';
        }
        this.indexChangeSubscribe();
        this.viewChangeSubscribe();
    };
    TmacTabViewsComponent.prototype.getTabViewWidth = function () {
        return this.elementRef.nativeElement.clientWidth;
    };
    TmacTabViewsComponent.prototype.getTabViewsCount = function () {
        return this.tabViews.length;
    };
    Object.defineProperty(TmacTabViewsComponent.prototype, "maxX", {
        get: function () {
            return this.getTabViewWidth() / 2 - 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmacTabViewsComponent.prototype, "minX", {
        get: function () {
            return -(this.getTabViewWidth() * (this.getTabViewsCount() - 1) + this.getTabViewWidth() / 2 - 10);
        },
        enumerable: true,
        configurable: true
    });
    TmacTabViewsComponent.prototype.indexChangeSubscribe = function () {
        var nowIndex = -(this.movedX / this.getTabViewWidth());
        if (nowIndex % 1 === 0 && this.activeIndex !== nowIndex) {
            this.activeIndex = nowIndex;
            this.onIndexChange.emit(this.activeIndex);
        }
    };
    TmacTabViewsComponent.prototype.viewChangeSubscribe = function () {
        var percent = Math.abs(this.movedX) / (this.getTabViewWidth() * this.tabViews.length);
        this.onViewChange.emit(percent);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabViewWrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TmacTabViewsComponent.prototype, "TabViewWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tmac_tab_view_tmac_tab_view_component__WEBPACK_IMPORTED_MODULE_4__["TmacTabViewComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TmacTabViewsComponent.prototype, "tabViews", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TmacTabViewsComponent.prototype, "activeIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacTabViewsComponent.prototype, "onIndexChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TmacTabViewsComponent.prototype, "onViewChange", void 0);
    TmacTabViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-tab-views',
            template: __webpack_require__(/*! ./tmac-tab-views.component.html */ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.html"),
            styles: [__webpack_require__(/*! ./tmac-tab-views.component.scss */ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__["TmaCssService"]])
    ], TmacTabViewsComponent);
    return TmacTabViewsComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.html":
/*!************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"tab-button\" href=\"#\">\n  <ng-content></ng-content>\n</a>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXRhYi90bWFjLXRhYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.ts ***!
  \**********************************************************************/
/*! exports provided: TmacTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacTabComponent", function() { return TmacTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacTabComponent = /** @class */ (function () {
    function TmacTabComponent() {
    }
    TmacTabComponent.prototype.ngOnInit = function () {
    };
    TmacTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-tab',
            template: __webpack_require__(/*! ./tmac-tab.component.html */ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.html"),
            styles: [__webpack_require__(/*! ./tmac-tab.component.scss */ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacTabComponent);
    return TmacTabComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabbar\">\n  <ng-content></ng-content>\n</div>\n<div class=\"line-container\">\n  <div [ngStyle]=\"{'width':lineWidth || 0,'transform':transformStyle,'transition-duration':transformDurationStyle}\" class=\"line\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RtYWMtbW9iaWxlL2NvbXBvbmVudC90bWFjLXRhYmJhci90bWFjLXRhYmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.ts ***!
  \****************************************************************************/
/*! exports provided: TmacTabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacTabbarComponent", function() { return TmacTabbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _tmac_tab_tmac_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tmac-tab/tmac-tab.component */ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.ts");
/* harmony import */ var _tmac_tab_views_tmac_tab_views_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tmac-tab-views/tmac-tab-views.component */ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.ts");






var TmacTabbarComponent = /** @class */ (function () {
    function TmacTabbarComponent(elementRef, renderer, tmacGlobalConfig, tmaCssService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmaCssService = tmaCssService;
        this.transformStyle = '0';
        this.transformDurationStyle = '0ms';
        this.prevPercent = 0;
        this.tmaCssService.renderComponentClass(renderer, 'tmac-tabbar', this.elementRef);
    }
    TmacTabbarComponent.prototype.ngOnInit = function () {
    };
    TmacTabbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.tmacTabViews) {
            this.tmacTabViews.onViewChange.subscribe(function (percent) {
                _this.transformStyle = "translate3d(" + percent * _this.elementRef.nativeElement.clientWidth + "px, 0px, 0px)";
                if (Math.abs(percent - _this.prevPercent) > 0.1) {
                    _this.transformDurationStyle = '300ms';
                }
                _this.prevPercent = percent;
            });
        }
        else {
            throw new Error('please input tabViews');
        }
    };
    TmacTabbarComponent.prototype.ngAfterContentInit = function () {
    };
    Object.defineProperty(TmacTabbarComponent.prototype, "lineWidth", {
        get: function () {
            if (this.tmacTabViews && this.tmacTabViews.tabViews) {
                return this.elementRef.nativeElement.clientWidth / this.tmacTabViews.tabViews.length + 'px';
            }
            else {
                return '0';
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tmac_tab_tmac_tab_component__WEBPACK_IMPORTED_MODULE_4__["TmacTabComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TmacTabbarComponent.prototype, "tabViews", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tmac_tab_views_tmac_tab_views_component__WEBPACK_IMPORTED_MODULE_5__["TmacTabViewsComponent"])
    ], TmacTabbarComponent.prototype, "tmacTabViews", void 0);
    TmacTabbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmac-tabbar',
            template: __webpack_require__(/*! ./tmac-tabbar.component.html */ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tmac-tabbar.component.scss */ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"],
            _service_tma_css_service__WEBPACK_IMPORTED_MODULE_3__["TmaCssService"]])
    ], TmacTabbarComponent);
    return TmacTabbarComponent;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/config/tmac-global-config.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/tmac-mobile/config/tmac-global-config.service.ts ***!
  \******************************************************************/
/*! exports provided: TmacGlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacGlobalConfig", function() { return TmacGlobalConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/common.constants */ "./src/app/tmac-mobile/constant/common.constants.ts");



var TmacGlobalConfig = /** @class */ (function () {
    function TmacGlobalConfig() {
        this.colorsMap = {
            'secondary': '#32db64',
            'danger': '#f53d3d',
            'dark': '#222',
            'light': '#f4f4f4',
            'default': '#f4f4f4',
            'primary': '#327eff',
        };
        this.autoTheme = true; // 根据手机平台，自动切换主题（md与ios），默认是true
    }
    TmacGlobalConfig.prototype.registerConfig = function () {
        this.localPlatform = this.getLocalPlatform();
        if (this.autoTheme) {
            this.platform = this.localPlatform;
        }
        else {
            this.platform = this.platform || _constant_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].MD;
        }
    };
    Object.defineProperty(TmacGlobalConfig.prototype, "isMd", {
        get: function () {
            return this.platform === _constant_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].MD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmacGlobalConfig.prototype, "isIos", {
        get: function () {
            return this.platform === _constant_common_constants__WEBPACK_IMPORTED_MODULE_2__["CommonConstants"].IOS;
        },
        enumerable: true,
        configurable: true
    });
    // 判断当前是安卓还是ios
    TmacGlobalConfig.prototype.getLocalPlatform = function () {
        var userAgent = navigator.userAgent;
        var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
        var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            return 'md';
        }
        if (isiOS) {
            return 'ios';
        }
    };
    TmacGlobalConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacGlobalConfig);
    return TmacGlobalConfig;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/constant/common.constants.ts":
/*!**********************************************************!*\
  !*** ./src/app/tmac-mobile/constant/common.constants.ts ***!
  \**********************************************************/
/*! exports provided: CommonConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonConstants", function() { return CommonConstants; });
var CommonConstants = /** @class */ (function () {
    function CommonConstants() {
    }
    CommonConstants.MD = 'md';
    CommonConstants.IOS = 'ios';
    return CommonConstants;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/gesture/hammer.ts":
/*!***********************************************!*\
  !*** ./src/app/tmac-mobile/gesture/hammer.ts ***!
  \***********************************************/
/*! exports provided: DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, Hammer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_HORIZONTAL", function() { return DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_VERTICAL", function() { return DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hammer", function() { return Hammer; });
/* tslint:disable */
var win = window;
var doc = document;
/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = doc.createElement('div');
var TYPE_FUNCTION = 'function';
var round = Math.round;
var abs = Math.abs;
var now = Date.now;
/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}
/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}
/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;
    if (!obj) {
        return;
    }
    if (obj.forEach) {
        obj.forEach(iterator, context);
    }
    else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    }
    else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}
/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype, childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
        Object.assign(childP, properties);
    }
}
/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}
/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}
/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}
/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
        target.addEventListener(type, handler, false);
    });
}
/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
        target.removeEventListener(type, handler, false);
    });
}
/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}
/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}
/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    }
    else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}
/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}
/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }
    if (sort) {
        if (!key) {
            results = results.sort();
        }
        else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key] ? 1 : 0;
            });
        }
    }
    return results;
}
/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;
        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}
/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}
/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}
var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';
var COMPUTE_INTERVAL = 25;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];
/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function (ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };
    this.init();
}
Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function () { },
    /**
     * bind the events
     */
    init: function () {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    /**
     * unbind the events
     */
    destroy: function () {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};
/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
        Type = inputClass;
    }
    else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    }
    else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    }
    else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    }
    else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}
/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
        manager.session = {};
    }
    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;
    // compute scale, rotation etc
    computeInputData(manager, input);
    // emit secret event
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
}
/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }
    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    }
    else if (pointersLength === 1) {
        session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
    computeIntervalInputData(session, input);
    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}
function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };
        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}
/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);
        session.lastInterval = input;
    }
    else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}
/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }
    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}
/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;
    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }
    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }
    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}
/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}
/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
    return Math.sqrt((x * x) + (y * y));
}
/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}
/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}
/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}
var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput(_manager, _handler) {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state
    Input.apply(this, arguments);
}
inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];
        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }
        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }
        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }
        if (eventType & INPUT_END) {
            this.pressed = false;
        }
        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});
var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};
// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};
var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
// IE10 has prefixed support, and case-sensitive
if (win.MSPointerEvent && !win.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}
/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = (this.manager.session.pointerEvents = []);
}
inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;
        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        }
        else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }
        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }
        // update the event in the store
        store[storeIndex] = ev;
        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });
        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});
var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
}
inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }
        if (!this.started) {
            return;
        }
        var touches = normalizeSingleTouches.call(this, ev, type);
        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }
        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});
/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
}
var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput(_manager, _handler) {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
}
inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }
        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});
/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;
    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }
    var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
    // get target touches from touches
    targetTouches = allTouches.filter(function (touch) {
        return hasParent(touch.target, target);
    });
    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }
    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }
        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }
    if (!changedTargetTouches.length) {
        return;
    }
    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}
/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}
inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH), isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        }
        else if (isMouse && !this.mouse.allow) {
            return;
        }
        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }
        this.callback(manager, inputEvent, inputData);
    },
    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});
var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}
TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function (value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }
        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },
    /**
     * just re-set the touchAction value
     */
    update: function () {
        this.set(this.manager.options.touchAction);
    },
    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function () {
        var actions = [];
        each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },
    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function (input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;
        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }
        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;
            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }
        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }
        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },
    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function (srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};
/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }
    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }
    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
}
/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;
/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = Object.assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;
    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
}
Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},
    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function (options) {
        Object.assign(this.options, options);
        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },
    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }
        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },
    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },
    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }
        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },
    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },
    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function () {
        return this.requireFail.length > 0;
    },
    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function (otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },
    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function (input) {
        var self = this;
        var state = this.state;
        function emit(event) {
            self.manager.emit(event, input);
        }
        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
        emit(self.options.event); // simple 'eventName' events
        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }
        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },
    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function (input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },
    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function () {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },
    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function (inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = Object.assign({}, inputData);
        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }
        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }
        this.state = this.process(inputDataClone);
        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },
    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function (_inputData) { },
    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function () { },
    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function () { }
};
/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    }
    else if (state & STATE_ENDED) {
        return 'end';
    }
    else if (state & STATE_CHANGED) {
        return 'move';
    }
    else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}
/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    }
    else if (direction == DIRECTION_UP) {
        return 'up';
    }
    else if (direction == DIRECTION_LEFT) {
        return 'left';
    }
    else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}
/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}
/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}
inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },
    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function (input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function (input) {
        var state = this.state;
        var eventType = input.eventType;
        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);
        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        }
        else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            }
            else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});
/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
}
inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },
    getTouchAction: function () {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },
    directionTest: function (input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;
        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            }
            else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function (input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },
    emit: function (input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;
        var direction = directionStr(input.direction);
        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});
/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function (input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});
/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
}
inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251,
        threshold: 9 // a minimal movement is ok, but keep it low
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_AUTO];
    },
    process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;
        this._input = input;
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        }
        else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        }
        else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },
    reset: function () {
        clearTimeout(this._timer);
    },
    emit: function (input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }
        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        }
        else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});
/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});
/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },
    getTouchAction: function () {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function (input) {
        var direction = this.options.direction;
        var velocity;
        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        }
        else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        }
        else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }
        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function (input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }
        this.manager.emit(this.options.event, input);
    }
});
/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);
    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
}
inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_MANIPULATION];
    },
    process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;
        this.reset();
        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }
            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
                this.count = 1;
            }
            else {
                this.count += 1;
            }
            this._input = input;
            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                }
                else {
                    this._timer = setTimeoutContext(function () {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },
    failTimeout: function () {
        this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },
    reset: function () {
        clearTimeout(this._timer);
    },
    emit: function () {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});
/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, _defaults.preset);
    return new Manager(element, options);
}
/**
 * default settings
 * @namespace
 */
var _defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,
    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,
    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,
    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,
    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,
    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],
    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};
var STOP = 1;
var FORCED_STOP = 2;
/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = Object.assign({}, _defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}
Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function (options) {
        Object.assign(this.options, options);
        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },
    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function (force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },
    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function (inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }
        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);
        var recognizer;
        var recognizers = this.recognizers;
        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;
        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }
        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];
            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
            !curRecognizer || recognizer == curRecognizer || // 2
                recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            }
            else {
                recognizer.reset();
            }
            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },
    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function (recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }
        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },
    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function (recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }
        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }
        this.recognizers.push(recognizer);
        recognizer.manager = this;
        this.touchAction.update();
        return recognizer;
    },
    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function (recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }
        recognizer = this.get(recognizer);
        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);
            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }
        return this;
    },
    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function (events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },
    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function (events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function (event) {
            if (!handler) {
                delete handlers[event];
            }
            else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },
    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function (event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }
        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }
        data.type = event;
        data.preventDefault = function () {
            data.srcEvent.preventDefault();
        };
        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },
    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function () {
        this.element && toggleCssProps(this, false);
        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};
/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    each(manager.options.cssProps, function (value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}
/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = doc.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}
Object.assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});
win.Hammer = Hammer;



/***/ }),

/***/ "./src/app/tmac-mobile/service/create-component.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tmac-mobile/service/create-component.service.ts ***!
  \*****************************************************************/
/*! exports provided: TmacCreateComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacCreateComponentService", function() { return TmacCreateComponentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.service */ "./src/app/tmac-mobile/service/nav.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var TmacCreateComponentService = /** @class */ (function () {
    function TmacCreateComponentService(factory, injector, platformLocation, navService, appRef) {
        this.factory = factory;
        this.injector = injector;
        this.platformLocation = platformLocation;
        this.navService = navService;
        this.appRef = appRef;
    }
    TmacCreateComponentService.prototype.createCompontnt = function (Container, dismiss, context, pushState) {
        var _this = this;
        var id = this.makeID();
        var component = this.factory
            .resolveComponentFactory(Container)
            .create(this.injector);
        this.appRef.attachView(component.hostView);
        var cancel = function (any) {
            _this.platformLocation.back();
            dismiss.error(any);
        };
        var ok = function (any) {
            _this.platformLocation.back();
            dismiss.emit(any);
        };
        component.instance.cancel = cancel;
        component.instance.ok = ok;
        component.instance.id = id;
        component.instance.context = context;
        component.instance.destroySelf = function () {
            _this.destroy(component);
        };
        document.body.appendChild(component.hostView.rootNodes[0]);
        if (pushState) {
            this.navService.pushState(component);
        }
        return component;
    };
    TmacCreateComponentService.prototype.destroy = function (com) {
        var _this = this;
        if (com.instance && com.instance.ngOnDestroy) {
            com.instance.ngOnDestroy();
            var timerSubscribe_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(300).subscribe(function () {
                _this.appRef.detachView(com.hostView);
                timerSubscribe_1.unsubscribe();
            });
            return;
        }
        this.appRef.detachView(com.hostView);
    };
    TmacCreateComponentService.prototype.makeID = function () {
        return Math.random().toString(16).substr(2, 8);
    };
    TmacCreateComponentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"],
            _nav_service__WEBPACK_IMPORTED_MODULE_2__["TmacNavService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], TmacCreateComponentService);
    return TmacCreateComponentService;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/service/nav.service.ts":
/*!****************************************************!*\
  !*** ./src/app/tmac-mobile/service/nav.service.ts ***!
  \****************************************************/
/*! exports provided: TmacNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacNavService", function() { return TmacNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TmacNavService = /** @class */ (function () {
    function TmacNavService(platformLocation) {
        this.platformLocation = platformLocation;
        this.dynamicComponents = [];
    }
    TmacNavService.prototype.registerNav = function () {
        var _this = this;
        this.platformLocation.onPopState(function (state) {
            if (_this.dynamicComponents.length > 0) {
                var component = _this.dynamicComponents.pop();
                if (component && component.instance.destroySelf) {
                    component.instance.destroySelf();
                }
            }
        });
    };
    TmacNavService.prototype.pushState = function (components) {
        this.platformLocation.pushState(null, null, this.platformLocation.pathname);
        this.dynamicComponents.push(components);
    };
    TmacNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]])
    ], TmacNavService);
    return TmacNavService;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/service/tma-css.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tmac-mobile/service/tma-css.service.ts ***!
  \********************************************************/
/*! exports provided: TmaCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmaCssService", function() { return TmaCssService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");



var TmaCssService = /** @class */ (function () {
    function TmaCssService(globalConfig) {
        this.globalConfig = globalConfig;
    }
    // 渲染组件的css
    TmaCssService.prototype.renderComponentClass = function (render, componentName, element) {
        this.generateClassByConfigAndPlatform(componentName).forEach(function (cssClass) { return render.addClass(element.nativeElement, cssClass); });
    };
    // 根据当前平台以及配置，生成组件的class
    TmaCssService.prototype.generateClassByConfigAndPlatform = function (componentName) {
        var platform = this.globalConfig.platform;
        return [componentName, componentName + "-" + platform];
    };
    TmaCssService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_2__["TmacGlobalConfig"]])
    ], TmaCssService);
    return TmaCssService;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/service/tmac-action-sheet.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/tmac-mobile/service/tmac-action-sheet.service.ts ***!
  \******************************************************************/
/*! exports provided: TmacActionSheetService, TmacActionSheetBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacActionSheetService", function() { return TmacActionSheetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacActionSheetBuilder", function() { return TmacActionSheetBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-component.service */ "./src/app/tmac-mobile/service/create-component.service.ts");
/* harmony import */ var _component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/tmac-action-sheets/tmac-action-sheets.component */ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.ts");




var TmacActionSheetService = /** @class */ (function () {
    function TmacActionSheetService(createComponentService) {
        this.createComponentService = createComponentService;
    }
    TmacActionSheetService.prototype.builder = function () {
        return new TmacActionSheetBuilder(this);
    };
    TmacActionSheetService.prototype.show = function (option) {
        var dimiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createComponentService.createCompontnt(_component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_3__["TmacActionSheetsComponent"], dimiss, option, true);
        return dimiss;
    };
    TmacActionSheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_create_component_service__WEBPACK_IMPORTED_MODULE_2__["TmacCreateComponentService"]])
    ], TmacActionSheetService);
    return TmacActionSheetService;
}());

var TmacActionSheetBuilder = /** @class */ (function () {
    function TmacActionSheetBuilder(tmacActionSheetService) {
        this.tmacActionSheetService = tmacActionSheetService;
        this._showBackdrop = true;
        this._enableBackdropDismiss = true;
        this._title = '选择';
        this._cancelButton = {
            text: '取消',
            role: 'cancel',
            icon: 'fa fa-close',
        };
        this._buttons = [];
    }
    TmacActionSheetBuilder.prototype.showBackdrop = function (backdrop) {
        this._showBackdrop = backdrop;
        return this;
    };
    TmacActionSheetBuilder.prototype.enableBackdropDismiss = function (enableBackdropDismiss) {
        this._enableBackdropDismiss = enableBackdropDismiss;
        return this;
    };
    TmacActionSheetBuilder.prototype.title = function (title) {
        this._title = title;
        return this;
    };
    TmacActionSheetBuilder.prototype.cancelButton = function (text, icon, role) {
        this._cancelButton = {
            text: text,
            icon: icon,
            role: role,
        };
        return this;
    };
    TmacActionSheetBuilder.prototype.button = function (text, icon, role) {
        this._buttons.push({
            text: text,
            icon: icon,
            role: role,
        });
        return this;
    };
    TmacActionSheetBuilder.prototype.buttons = function (buttons) {
        this._buttons = this._buttons.concat(buttons);
        return this;
    };
    TmacActionSheetBuilder.prototype.present = function () {
        this.tmacActionSheetService.show(this.generateDefaultOption());
    };
    TmacActionSheetBuilder.prototype.generateDefaultOption = function () {
        return {
            title: this._title,
            enableBackdropDismiss: this._enableBackdropDismiss,
            buttons: this._buttons || [],
            cancelButton: this._cancelButton,
            showBackdrop: this._showBackdrop,
        };
    };
    return TmacActionSheetBuilder;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/service/tmac-global.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tmac-mobile/service/tmac-global.service.ts ***!
  \************************************************************/
/*! exports provided: TmacGlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacGlobalService", function() { return TmacGlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gesture_hammer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gesture/hammer */ "./src/app/tmac-mobile/gesture/hammer.ts");



var TmacGlobalService = /** @class */ (function () {
    function TmacGlobalService() {
    }
    // 注册手势事件
    TmacGlobalService.prototype.registerGesture = function () {
        Object(_gesture_hammer__WEBPACK_IMPORTED_MODULE_2__["Hammer"])(window, {});
    };
    TmacGlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacGlobalService);
    return TmacGlobalService;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/service/tmac-side-menu.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/tmac-mobile/service/tmac-side-menu.service.ts ***!
  \***************************************************************/
/*! exports provided: TmacSideMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacSideMenuService", function() { return TmacSideMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TmacSideMenuService = /** @class */ (function () {
    function TmacSideMenuService() {
        this.sidemenus = [];
    }
    TmacSideMenuService.prototype.register = function (sidemenu) {
        this.sidemenus.push(sidemenu);
    };
    TmacSideMenuService.prototype.toggleById = function (id) {
        var sideMenu;
        if (!id) {
            sideMenu = this.sidemenus[this.sidemenus.length - 1];
        }
        else {
            sideMenu = this.sidemenus.find(function (sideMenu) { return sideMenu.id === id; });
        }
        if (sideMenu) {
            sideMenu.toggle();
        }
    };
    TmacSideMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TmacSideMenuService);
    return TmacSideMenuService;
}());



/***/ }),

/***/ "./src/app/tmac-mobile/tmac-mobile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tmac-mobile/tmac-mobile.module.ts ***!
  \***************************************************/
/*! exports provided: TmacMobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmacMobileModule", function() { return TmacMobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_tmac_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/tmac-global.service */ "./src/app/tmac-mobile/service/tmac-global.service.ts");
/* harmony import */ var _component_app_bar_tmac_app_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/app-bar/tmac-app-bar.component */ "./src/app/tmac-mobile/component/app-bar/tmac-app-bar.component.ts");
/* harmony import */ var _component_app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/app-body/tmac-app-body.component */ "./src/app/tmac-mobile/component/app-body/tmac-app-body.component.ts");
/* harmony import */ var _component_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/app/app.component */ "./src/app/tmac-mobile/component/app/app.component.ts");
/* harmony import */ var _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/tmac-global-config.service */ "./src/app/tmac-mobile/config/tmac-global-config.service.ts");
/* harmony import */ var _service_tma_css_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/tma-css.service */ "./src/app/tmac-mobile/service/tma-css.service.ts");
/* harmony import */ var _component_tmac_tab_views_tmac_tab_views_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/tmac-tab-views/tmac-tab-views.component */ "./src/app/tmac-mobile/component/tmac-tab-views/tmac-tab-views.component.ts");
/* harmony import */ var _component_tmac_tab_view_tmac_tab_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/tmac-tab-view/tmac-tab-view.component */ "./src/app/tmac-mobile/component/tmac-tab-view/tmac-tab-view.component.ts");
/* harmony import */ var _component_tmac_tab_tmac_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/tmac-tab/tmac-tab.component */ "./src/app/tmac-mobile/component/tmac-tab/tmac-tab.component.ts");
/* harmony import */ var _component_tmac_tabbar_tmac_tabbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/tmac-tabbar/tmac-tabbar.component */ "./src/app/tmac-mobile/component/tmac-tabbar/tmac-tabbar.component.ts");
/* harmony import */ var _component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/tmac-action-sheets/tmac-action-sheets.component */ "./src/app/tmac-mobile/component/tmac-action-sheets/tmac-action-sheets.component.ts");
/* harmony import */ var _service_nav_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/nav.service */ "./src/app/tmac-mobile/service/nav.service.ts");
/* harmony import */ var _component_app_modal_tmac_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/app-modal/tmac-modal.component */ "./src/app/tmac-mobile/component/app-modal/tmac-modal.component.ts");
/* harmony import */ var _component_tmac_backdrop_tmac_backdrop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/tmac-backdrop/tmac-backdrop.component */ "./src/app/tmac-mobile/component/tmac-backdrop/tmac-backdrop.component.ts");
/* harmony import */ var _component_tmac_button_tmac_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/tmac-button/tmac-button.component */ "./src/app/tmac-mobile/component/tmac-button/tmac-button.component.ts");
/* harmony import */ var _component_tmac_side_menu_tmac_side_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/tmac-side-menu/tmac-side-menu.component */ "./src/app/tmac-mobile/component/tmac-side-menu/tmac-side-menu.component.ts");
/* harmony import */ var _component_tmac_list_view_tmac_list_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/tmac-list-view/tmac-list-view.component */ "./src/app/tmac-mobile/component/tmac-list-view/tmac-list-view.component.ts");
/* harmony import */ var _component_tmac_list_view_item_tmac_list_view_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/tmac-list-view-item/tmac-list-view-item.component */ "./src/app/tmac-mobile/component/tmac-list-view-item/tmac-list-view-item.component.ts");
/* harmony import */ var _component_tmac_list_view_divider_tmac_list_view_divider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/tmac-list-view-divider/tmac-list-view-divider.component */ "./src/app/tmac-mobile/component/tmac-list-view-divider/tmac-list-view-divider.component.ts");
/* harmony import */ var _component_tmac_refresher_tmac_refresher_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/tmac-refresher/tmac-refresher.component */ "./src/app/tmac-mobile/component/tmac-refresher/tmac-refresher.component.ts");
/* harmony import */ var _component_tmac_refresher_content_tmac_refresher_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/tmac-refresher-content/tmac-refresher-content.component */ "./src/app/tmac-mobile/component/tmac-refresher-content/tmac-refresher-content.component.ts");
/* harmony import */ var _component_tmac_indicator_tmac_indicator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/tmac-indicator/tmac-indicator.component */ "./src/app/tmac-mobile/component/tmac-indicator/tmac-indicator.component.ts");

























var TmacMobileModule = /** @class */ (function () {
    function TmacMobileModule(tmaGlobalService, tmacNavService, tmacGlobalConfig) {
        this.tmaGlobalService = tmaGlobalService;
        this.tmacNavService = tmacNavService;
        this.tmacGlobalConfig = tmacGlobalConfig;
        this.tmacNavService.registerNav();
        this.tmaGlobalService.registerGesture();
        this.tmacGlobalConfig.registerConfig();
    }
    TmacMobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_app_bar_tmac_app_bar_component__WEBPACK_IMPORTED_MODULE_4__["TmacAppBarComponent"],
                _component_app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_5__["TmacAppBodyComponent"],
                _component_app_app_component__WEBPACK_IMPORTED_MODULE_6__["TmacAppComponent"],
                _component_tmac_tab_views_tmac_tab_views_component__WEBPACK_IMPORTED_MODULE_9__["TmacTabViewsComponent"],
                _component_tmac_tab_view_tmac_tab_view_component__WEBPACK_IMPORTED_MODULE_10__["TmacTabViewComponent"],
                _component_tmac_tab_tmac_tab_component__WEBPACK_IMPORTED_MODULE_11__["TmacTabComponent"],
                _component_tmac_tabbar_tmac_tabbar_component__WEBPACK_IMPORTED_MODULE_12__["TmacTabbarComponent"],
                _component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_13__["TmacActionSheetsComponent"],
                _component_app_modal_tmac_modal_component__WEBPACK_IMPORTED_MODULE_15__["TmacModalComponent"],
                _component_tmac_backdrop_tmac_backdrop_component__WEBPACK_IMPORTED_MODULE_16__["TmacBackdropComponent"],
                _component_tmac_button_tmac_button_component__WEBPACK_IMPORTED_MODULE_17__["TmacButtonComponent"],
                _component_tmac_side_menu_tmac_side_menu_component__WEBPACK_IMPORTED_MODULE_18__["TmacSideMenuComponent"],
                _component_tmac_list_view_tmac_list_view_component__WEBPACK_IMPORTED_MODULE_19__["TmacListViewComponent"],
                _component_tmac_list_view_item_tmac_list_view_item_component__WEBPACK_IMPORTED_MODULE_20__["TmacListViewItemComponent"],
                _component_tmac_list_view_divider_tmac_list_view_divider_component__WEBPACK_IMPORTED_MODULE_21__["TmacListViewDividerComponent"],
                _component_tmac_refresher_tmac_refresher_component__WEBPACK_IMPORTED_MODULE_22__["TmacRefresherComponent"],
                _component_tmac_refresher_content_tmac_refresher_content_component__WEBPACK_IMPORTED_MODULE_23__["TmacRefresherContentComponent"],
                _component_tmac_indicator_tmac_indicator_component__WEBPACK_IMPORTED_MODULE_24__["TmacIndicatorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [_service_tma_css_service__WEBPACK_IMPORTED_MODULE_8__["TmaCssService"]],
            exports: [
                _component_app_bar_tmac_app_bar_component__WEBPACK_IMPORTED_MODULE_4__["TmacAppBarComponent"],
                _component_app_body_tmac_app_body_component__WEBPACK_IMPORTED_MODULE_5__["TmacAppBodyComponent"],
                _component_app_app_component__WEBPACK_IMPORTED_MODULE_6__["TmacAppComponent"],
                _component_tmac_tab_views_tmac_tab_views_component__WEBPACK_IMPORTED_MODULE_9__["TmacTabViewsComponent"],
                _component_tmac_tab_view_tmac_tab_view_component__WEBPACK_IMPORTED_MODULE_10__["TmacTabViewComponent"],
                _component_tmac_tabbar_tmac_tabbar_component__WEBPACK_IMPORTED_MODULE_12__["TmacTabbarComponent"],
                _component_tmac_tab_tmac_tab_component__WEBPACK_IMPORTED_MODULE_11__["TmacTabComponent"],
                _component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_13__["TmacActionSheetsComponent"],
                _component_app_modal_tmac_modal_component__WEBPACK_IMPORTED_MODULE_15__["TmacModalComponent"],
                _component_tmac_backdrop_tmac_backdrop_component__WEBPACK_IMPORTED_MODULE_16__["TmacBackdropComponent"],
                _component_tmac_side_menu_tmac_side_menu_component__WEBPACK_IMPORTED_MODULE_18__["TmacSideMenuComponent"],
                _component_tmac_list_view_tmac_list_view_component__WEBPACK_IMPORTED_MODULE_19__["TmacListViewComponent"],
                _component_tmac_list_view_item_tmac_list_view_item_component__WEBPACK_IMPORTED_MODULE_20__["TmacListViewItemComponent"],
                _component_tmac_list_view_divider_tmac_list_view_divider_component__WEBPACK_IMPORTED_MODULE_21__["TmacListViewDividerComponent"],
                _component_tmac_refresher_tmac_refresher_component__WEBPACK_IMPORTED_MODULE_22__["TmacRefresherComponent"],
                _component_tmac_refresher_content_tmac_refresher_content_component__WEBPACK_IMPORTED_MODULE_23__["TmacRefresherContentComponent"],
                _component_tmac_indicator_tmac_indicator_component__WEBPACK_IMPORTED_MODULE_24__["TmacIndicatorComponent"]
            ],
            entryComponents: [_component_tmac_action_sheets_tmac_action_sheets_component__WEBPACK_IMPORTED_MODULE_13__["TmacActionSheetsComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_tmac_global_service__WEBPACK_IMPORTED_MODULE_3__["TmacGlobalService"],
            _service_nav_service__WEBPACK_IMPORTED_MODULE_14__["TmacNavService"],
            _config_tmac_global_config_service__WEBPACK_IMPORTED_MODULE_7__["TmacGlobalConfig"]])
    ], TmacMobileModule);
    return TmacMobileModule;
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

module.exports = __webpack_require__(/*! F:\code_repository\easytune\tmac-mobile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map