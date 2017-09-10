import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../Models/dto/user';
import {Global} from '../shared/global'
@Injectable()
export class UserService{
    constructor(private _http:Http){ }

       apiURL = Global.UserNamagementWebAPIBaseUrl+'api/User/';
        actionURL = '';

        // add user and returns inserted user Id
       Add(model:User): Observable<any>{
         debugger;
        this.actionURL = this.apiURL + 'AddUser';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.actionURL,model,options)
        .map((response:Response) => <number>response.json())
        .catch(this.handleError);
       }

       
       GetById(Id:number): Observable<User>{
          debugger;
        this.actionURL = this.apiURL+'GetUserDetails?id=';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.actionURL+Id,options)
        .map((response:Response) => <User>response.json())
        .catch(this.handleError);
       }
       Update(model:User): Observable<any>{
        this.actionURL = this.apiURL + 'UpdateUser';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
         return this._http.post(this.actionURL,model,options)
        .map((response:Response) => <string>response.json())
        .catch(this.handleError);
       }


      Delete(Id:number): Observable<any>{
        this.actionURL = this.apiURL + 'DeleteUser?id=';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.actionURL+Id,options)
        .map((response:Response) => <any>response.json())
        .catch(this.handleError);

      }

       


   private handleError(error: Response) {
      debugger;
      //console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}