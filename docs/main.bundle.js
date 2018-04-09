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

module.exports = "<div [ngSwitch]=\"review.status\" class=\"item\">\n  <div class=\"edit-item\" *ngSwitchCase=\"ReviewStatus.New\">\n    <div class=\"edit-details\"><input #inptName placeholder=\"name\" [(ngModel)]=\"review.name\"></div>\n    <div><textarea #inptComment cols=\"30\" rows=\"4\" placeholder=\"comment\" [(ngModel)]=\"review.comment\"></textarea></div>\n    <div class=\"edit-button\">\n      <button (click)=\"addReview(inptName.value, inptComment.value)\">Add</button>\n    </div>\n  </div>\n  <div class=\"edit-item\" *ngSwitchCase=\"ReviewStatus.Edit\">\n    <div class=\"edit-details\"><input #inptName placeholder=\"name\" [(ngModel)]=\"review.name\"></div>\n    <div><textarea #inptComment cols=\"30\" rows=\"4\" placeholder=\"comment\" [(ngModel)]=\"review.comment\"></textarea></div>\n    <div class=\"edit-button\">\n      <button (click)=\"editReview(review, ReviewStatus.Regular);\">Edit</button>\n    </div>\n  </div>\n  <div class=\"regular\" *ngSwitchCase=\"ReviewStatus.Regular\">\n    <div class=\"image\">\n      <img class=\"bounds\" [src]=\"review.sourceImg\"/>\n    </div>\n    <div class=\"details\">\n      <div class=\"name\">{{review.name}}</div>\n      <div class=\"comment\">{{review.comment}}</div>\n    </div>\n    <div class=\"icons\">\n      <i class=\"material-icons\" (click)=\"editReview(review, ReviewStatus.Edit);\">edit</i>\n      <i class=\"material-icons\">delete</i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/review-details/review-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".item {\n  border: 1px solid #80808080;\n  -webkit-box-shadow: 2px 2px 5px #88888873;\n          box-shadow: 2px 2px 5px #88888873;\n  padding: 5px;\n  margin: 10px; }\n\ndiv.edit-item input, div.edit-item textarea {\n  width: 90%;\n  border: 1px solid #80808038; }\n\ndiv.edit-item div.edit-details {\n  margin-bottom: 5px; }\n\ndiv.edit-item div.edit-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\ndiv.edit-item div.edit-button button {\n    background-color: #0078e766;\n    color: white;\n    border: none;\n    border-radius: 2px; }\n\ndiv.regular {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\ndiv.regular .image {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%; }\n\ndiv.regular .image img.bounds {\n      width: 40px;\n      height: 40px; }\n\ndiv.regular .details {\n    -ms-flex-preferred-size: 60%;\n        flex-basis: 60%; }\n\ndiv.regular .details .name {\n      font-weight: bold; }\n\ndiv.regular .details .comment {\n      color: #0000006e; }\n\ndiv.regular .icons {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%; }\n\ndiv.regular .icons i {\n      color: #0000006b; }\n"

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
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ReviewStatus = __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */];
    }
    ReviewDetailsComponent.prototype.ngOnInit = function () {
    };
    ReviewDetailsComponent.prototype.addReview = function (name, comment) {
        this.add.emit({ name: name, comment: comment });
    };
    ReviewDetailsComponent.prototype.editReview = function (review, status) {
        debugger;
        review.status = status;
        this.edit.emit(review.status === __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Edit);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */])
    ], ReviewDetailsComponent.prototype, "review", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ReviewDetailsComponent.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ReviewDetailsComponent.prototype, "edit", void 0);
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

module.exports = "<div class=\"reviews-list\">\n  <h1>\n    user reviews\n  </h1>\n  <ul>\n    <li *ngFor=\"let review of reviewsList\">\n      <app-review-details [review]=\"review\"\n      (edit)=\"editReview($event)\"></app-review-details>\n    </li>\n  </ul>\n  <app-review-details *ngIf=\"!editState\" [review]=\"newReview\"\n                      (add)=\"addReview($event)\"></app-review-details>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.scss":
/***/ (function(module, exports) {

module.exports = ".reviews-list {\n  width: 300px; }\n  .reviews-list h1 {\n    text-align: center;\n    color: #0078e766; }\n  .reviews-list ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
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


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
        this.editState = false;
        this.reviewsList = new Array();
        this.newReview = new __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */]({ name: '', comment: '' });
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent.prototype.addReview = function (review) {
        // debugger
        /*const imgGen = require('@dudadev/random-img');
        imgGen().then(avatarURL => {
          this.newReview.clear();
          this.reviewsList.push(
            new Review({name: review.name, comment: review.comment, status: ReviewStatus.Regular, sourceImg: avatarURL}));
        });*/
        this.newReview.clear();
        this.reviewsList.push(new __WEBPACK_IMPORTED_MODULE_1__review__["a" /* Review */]({ name: review.name, comment: review.comment, status: __WEBPACK_IMPORTED_MODULE_1__review__["b" /* ReviewStatus */].Regular, sourceImg: '' }));
    };
    ReviewsComponent.prototype.editReview = function (editState) {
        this.editState = editState;
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