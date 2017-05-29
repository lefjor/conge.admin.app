import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {UserConge} from './conge';
import {CongeStatus} from './conge-status.enum';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CongeService {
  private api_url = '../assets/congeMock.json';

  constructor(private http : Http, private db: AngularFireDatabase) { }

  validate(userConge : UserConge) {
    userConge.conge.status = CongeStatus.VALIDATED;
  }

  delete(userConge : UserConge) {
    userConge.conge.status = CongeStatus.DELETED;
  }

  getCongesFromFirebase () : FirebaseListObservable<any>{
    return this.db.list("/");
  }

  getConges(congeStatusToShow : CongeStatus) : Observable<UserConge>  {
    console.log("conge.service : getConges");
    console.log("congeStatusToShow : ", congeStatusToShow);
    return this.http.get(this.api_url)
    .flatMap((response) => response.json())
    .filter((userConge:UserConge) => userConge.conge.status === congeStatusToShow)
    //.map(this.extractData)
    .do((e) => console.log("test", e))
    .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body = res.json();
    console.log(body);
    return body || [];
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
