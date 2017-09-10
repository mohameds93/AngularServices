import {Component,OnInit} from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'
import {FormGroup,FormBuilder,Validators } from '@angular/forms'
import{ AuthenticationService} from '../AVLServices/authentication.service'

@Component({
    templateUrl: 'src/Views/login.component.html',
    providers: [AuthenticationService]
})


export class LoginComponent implements OnInit{
    loading = false;
    returnUrl: string;
    loginfrm: FormGroup;
        constructor( private fb: FormBuilder, private authenticationService: AuthenticationService
            ,private route: ActivatedRoute,private router: Router){}

ngOnInit(){
         this.loginfrm = this.fb.group({
            username: ['',Validators.required],
            password: ['', Validators.required],
         });
        this.authenticationService.logout();

        // // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

login(){
    debugger;
      this.loading = true;
      console.log(this.loginfrm.get('username').value)
        this.authenticationService.login(this.loginfrm.get('username').value, this.loginfrm.get('password').value)
            .subscribe(
                data =>  {
                    debugger;
                   this.router.navigate(['welcome']);
                },
                error => {
                  //      this.alertService.error('Username or password is incorrect');
                    this.loading = false;
                });
}




}
