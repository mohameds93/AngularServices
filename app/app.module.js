"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_mdf_validation_messages_1 = require("ng2-mdf-validation-messages");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var platform_browser_1 = require("@angular/platform-browser");
var authentication_service_1 = require("./AVLServices/authentication.service");
var detailcode_service_1 = require("./AVLServices/detailcode.service");
var user_service_1 = require("./AVLServices/user.service");
var zonesService_1 = require("./AVLServices/zonesService");
var app_component_1 = require("./app.component");
var login_component_1 = require("./Components/login.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [ng2_mdf_validation_messages_1.Ng2MDFValidationMessagesModule, platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, authentication_service_1.AuthenticationService, detailcode_service_1.DetailCodeService, user_service_1.UserService, zonesService_1.ZoneService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map