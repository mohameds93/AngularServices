import { Component } from '@angular/core';

@Component({
    
     selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1>
           <div>
        <nav class='navbar navbar-inverse'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/login']">Logout</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
        </div>
     `
})
export class AppComponent { }
