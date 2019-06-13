import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {global} from './global';

@Injectable()
export class UserService {
  public url:String;

  constructor(
    private _http:Http
  ) { 
    this.url = global.url;
  }

  save(user){
    let json = JSON.stringify(user);
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'save',json, {headers:headers}).map(res=>res.json());
  }

  verifyEmail(email){
    return this._http.get(this.url+'verifyEmail/'+email).map(res=>res.json());
  }

  updateAmountFirstTime(email,user){
    let json = JSON.stringify(user);
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.put(this.url+'updateAmountFirstTime/'+email,json,{headers:headers}).map(res=>res.json());
  }
}
