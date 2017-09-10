"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var global_1 = require("../shared/global");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.apiURL = global_1.Global.UserNamagementWebAPIBaseUrl + 'api/User/';
        this.actionURL = '';
    }
    // add user and returns inserted user Id
    UserService.prototype.Add = function (model) {
        debugger;
        this.actionURL = this.apiURL + 'AddUser';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.actionURL, model, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.GetById = function (Id) {
        debugger;
        this.actionURL = this.apiURL + 'GetUserDetails?id=';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.actionURL + Id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.Update = function (model) {
        this.actionURL = this.apiURL + 'UpdateUser';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.actionURL, model, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.Delete = function (Id) {
        this.actionURL = this.apiURL + 'DeleteUser?id=';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.actionURL + Id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        debugger;
        //console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map