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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-reviews></app-reviews>\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reviews_reviews_component__ = __webpack_require__("./src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reviews_review_details_review_details_component__ = __webpack_require__("./src/app/reviews/review-details/review-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__reviews_review_details_review_details_component__["a" /* ReviewDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/review.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReviewStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus[ReviewStatus["New"] = 0] = "New";
    ReviewStatus[ReviewStatus["Regular"] = 1] = "Regular";
    ReviewStatus[ReviewStatus["Edit"] = 2] = "Edit";
    ReviewStatus[ReviewStatus["Deleted"] = 3] = "Deleted";
})(ReviewStatus || (ReviewStatus = {}));
var Review = /** @class */ (function () {
    function Review(spec) {
        this.status = spec.status ? spec.status : ReviewStatus.New;
        this.name = spec.name;
        this.comment = spec.comment;
        this.sourceImg = spec.sourceImg;
    }
    Review.prototype.clear = function () {
        this.name = '';
        this.comment = '';
        this.sourceImg = '';
    };
    return Review;
}());



/***/ }),

/***/ "./src/app/reviews/review-details/review-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <div class=\"edit-item\" *ngIf=\"review.status == ReviewStatus.New || review.status == ReviewStatus.Edit\">\n    <form #reviewForm=\"ngForm\" (submit)=\"addReview()\">\n      <div class=\"edit-details\"><input #inptName=\"ngModel\" name=\"name\" placeholder=\"name\" [(ngModel)]=\"review.name\" required></div>\n      <div><textarea #inptCommente=\"ngModel\" cols=\"30\" rows=\"4\" name=\"comment\" placeholder=\"comment\" [(ngModel)]=\"review.comment\" required></textarea></div>\n      <div class=\"edit-button\">\n        <button type=\"submit\" [disabled]=\"!reviewForm.form.valid\">{{review.status == ReviewStatus.New? 'Add' : 'Edit'}}</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"regular\" *ngIf=\"review.status == ReviewStatus.Regular\">\n    <div class=\"image\">\n      <img class=\"bounds\" [src]=\"review.sourceImg\"/>\n    </div>\n    <div class=\"details\">\n      <div class=\"name\">{{review.name}}</div>\n      <div class=\"comment\">{{review.comment}}</div>\n    </div>\n    <div class=\"icons\">\n      <i class=\"material-icons\" (click)=\"editReview();\">edit</i>\n      <i class=\"material-icons\">delete</i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/review-details/review-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".item {\n  border: 1px solid #8080804d;\n  -webkit-box-shadow: 2px 2px 5px #88888873;\n  box-shadow: 2px 2px 2px #88888826;\n  padding: 5px;\n  margin: 5px; }\n\ndiv.edit-item input, div.edit-item textarea {\n  border: 1px solid #80808038; }\n\ndiv.edit-item input {\n  width: calc(100% - 5px); }\n\ndiv.edit-item textarea {\n  width: calc(100% - 10px); }\n\ndiv.edit-item .ng-valid[required], div.edit-item .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\ndiv.edit-item .ng-invalid[required], div.edit-item .ng-invalid.required {\n  border-left: 5px solid #f22634;\n  /* red */ }\n\ndiv.edit-item div.edit-details {\n  margin-bottom: 5px; }\n\ndiv.edit-item div.edit-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\ndiv.edit-item div.edit-button button {\n    background-color: #0078e766;\n    color: white;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer; }\n\ndiv.edit-item div.edit-button button:disabled {\n      cursor: default;\n      background-color: #6c767f66; }\n\ndiv.regular {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\ndiv.regular .image {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%; }\n\ndiv.regular .image img.bounds {\n      width: 40px;\n      height: 40px; }\n\ndiv.regular .details {\n    -ms-flex-preferred-size: 60%;\n        flex-basis: 60%; }\n\ndiv.regular .details .name {\n      font-weight: bold; }\n\ndiv.regular .details .comment {\n      color: #0000006e; }\n\ndiv.regular .icons {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%;\n    cursor: pointer; }\n\ndiv.regular .icons i {\n      color: #0000006b; }\n"

/***/ }),

/***/ "./src/app/reviews/review-details/review-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review__ = __webpack_require__("./src/app/review.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewDetailsComponent = /** @class */ (function () {
    function ReviewDetailsComponent() {
        this.addEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.editStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ReviewStatus = __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */];
    }
    ReviewDetailsComponent.prototype.ngOnInit = function () {
    };
    ReviewDetailsComponent.prototype.addReview = function () {
        this.addEdit.emit(this.review);
    };
    ReviewDetailsComponent.prototype.editReview = function () {
        this.editStatus.emit(this.review);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */])
    ], ReviewDetailsComponent.prototype, "review", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ReviewDetailsComponent.prototype, "addEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ReviewDetailsComponent.prototype, "editStatus", void 0);
    ReviewDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-review-details',
            template: __webpack_require__("./src/app/reviews/review-details/review-details.component.html"),
            styles: [__webpack_require__("./src/app/reviews/review-details/review-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewDetailsComponent);
    return ReviewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews-list\">\n  <h1>\n    user reviews\n  </h1>\n  <ul>\n    <li *ngFor=\"let review of reviewsList\">\n      <app-review-details [review]=\"review\"\n                          (addEdit)=\"addEditReview($event)\"\n                          (editStatus)=\"editStatusReview($event)\"></app-review-details>\n    </li>\n  </ul>\n  <app-review-details *ngIf=\"!editState\" [review]=\"newReview\"\n                      (addEdit)=\"addEditReview($event)\"></app-review-details>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.scss":
/***/ (function(module, exports) {

module.exports = ".reviews-list {\n  width: 100%;\n  max-width: 350px; }\n  .reviews-list h1 {\n    text-align: center;\n    color: #0078e766; }\n  .reviews-list ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review__ = __webpack_require__("./src/app/review.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dudadev_random_img__ = __webpack_require__("./node_modules/@dudadev/random-img/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dudadev_random_img___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dudadev_random_img__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
        this.editState = false;
        this.reviewsList = new Array();
        this.newReview = new __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */]({ name: '', comment: '' });
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent.prototype.addEditReview = function (review) {
        if (review.status === __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Edit) {
            review.status = __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Regular;
        }
        else {
            this.addNewReview();
        }
        this.editState = this.reviewsList.find(function (x) { return x.status === __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Edit; }) !== undefined;
    };
    ReviewsComponent.prototype.editStatusReview = function (review) {
        // reset statuses of all the list
        this.reviewsList.forEach(function (otherReview) { return otherReview.status = __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Regular; });
        // set the current edited review
        review.status = __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Edit;
        this.editState = true;
    };
    ReviewsComponent.prototype.addNewReview = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__dudadev_random_img__().then(function (avatarURL) {
            _this.reviewsList.push(new __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */]({ name: _this.newReview.name, comment: _this.newReview.comment, status: __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Regular, sourceImg: avatarURL }));
            _this.newReview.clear();
        })
            .catch(function (e) { return console.log(e); });
    };
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-reviews',
            template: __webpack_require__("./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__("./src/app/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map