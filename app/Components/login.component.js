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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var authentication_service_1 = require("../AVLServices/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(fb, authenticationService, route, router) {
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginfrm = this.fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
        this.authenticationService.logout();
        // // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        debugger;
        this.loading = true;
        console.log(this.loginfrm.get('username').value);
        this.authenticationService.login(this.loginfrm.get('username').value, this.loginfrm.get('password').value)
            .subscribe(function (data) {
            debugger;
            _this.router.navigate(['welcome']);
        }, function (error) {
            //      this.alertService.error('Username or password is incorrect');
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Views/login.component.html',
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map