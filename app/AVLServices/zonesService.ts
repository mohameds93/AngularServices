import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {zone}from '../Models/lookups/zone';
import {zoneDto} from '../Models/dto/zoneDto'
import {Global} from '../shared/global'
@Injectable()
export class ZoneService{
    constructor(private _http: Http) { }
 
    apiURL = Global.TrackingWebAPIUrl + 'api/Zone/';
    actionURL ='';

        
 Add(model:zoneDto): Observable<any>{
         debugger;
        this.actionURL = this.apiURL + 'AddZone';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.actionURL,model,options)
        .map((response:Response) => <any>response.json())
        .catch(this.handleError);

       }

 Update(model:zoneDto): Observable<any>{
          debugger;
        this.actionURL = this.apiURL + 'UpdateZone';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.actionURL,model,options)
        .map((response:Response) => <number>response.json())
        .catch(this.handleError);

       }
       

 GetById(Id:number): Observable<zoneDto>{
        debugger;
        this.actionURL = this.apiURL + 'GetZoneByID/';
          let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.actionURL+Id,options)
        .map((response:Response) => <any>response.json())
        .catch(this.handleError);
       }

 Delete(Id:number,Isdeleted:boolean): Observable<any>{

        this.actionURL = this.apiURL+'DeleteZone/';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.actionURL+Id+'?IsDeleted='+Isdeleted,options)
        .map((response:Response) => <any>response.json())
        .catch(this.handleError);
       }

    

    GetAllZones(): Observable<zone[]>{
   this.actionURL= this.apiURL+'GetAllZone?IsDeleted=false';
    return this._http.get(this.actionURL)
    .map((respone:Response)=><zone[]>respone.json()as zone[])
    .catch(this.handleError);

}





      private handleError(error: Response) {
      debugger;
      //console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}