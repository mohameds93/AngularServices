import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import {AuthenticationService} from './AVLServices/authentication.service'
import{ DetailCodeService} from './AVLServices/detailcode.service'
import {UserService} from './AVLServices/user.service'
import {ZoneService} from './AVLServices/zonesService'


import {LoginComponent} from './Components/login.component'

import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export * from './AVLServices/authentication.service'
export * from './AVLServices/detailcode.service'
export * from './AVLServices/user.service'
export * from './AVLServices/zonesService'


export * from './Components/login.component'

@NgModule({
  imports: [
    CommonModule,BrowserModule,HttpModule
  ],
  declarations: [ SampleComponent, SampleDirective, SamplePipe,LoginComponent
  ],
  exports: [
    SampleComponent, SampleDirective,  SamplePipe,LoginComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService,AuthenticationService,DetailCodeService,UserService,ZoneService]
    };
  }
}
