import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DetailCode} from '../Models/lookups/DetailCode';
import {Global} from '../shared/global'
@Injectable()
export class DetailCodeService{
    constructor(private _http: Http) { }
    
    apiURL = Global.SystemCodeWebAPIBaseUrl+'api/DetailCode/';
    actionURL='';
GetMasterCodeByMultiCode(code:string): Observable<DetailCode[]>{
   this.actionURL= this.apiURL+'GetMasterCodeByMultiCode?masterCode=';
    return this._http.get(this.actionURL+code)
    .map((respone:Response)=><DetailCode[]>respone.json())
    .catch(this.handleError);

}


  private handleError(error: Response) {
      debugger;
      //console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}