import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {List} from 'immutable';
//import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

import {UserConge} from './conge';
import {CongeStatus} from './conge-status.enum';

@Injectable()
export class CongeService {
  private api_url = './assets/congeMock.json';

  private _userConges : BehaviorSubject<UserConge[]> = new BehaviorSubject([]);

  get userConges() {
    return this._userConges.asObservable();
  }

  constructor(private http : Http) {
    console.log('test version', _.VERSION);
    this.init();
  }

  private init () {
    this.loadInitialData();
  }

  validateAll(congeUsers : UserConge[]) {
    _.forEach(congeUsers, (UserConge) => {
      this.setStatus(UserConge, CongeStatus.VALIDATED);
    })
  }

  deleteAll(congeUsers : UserConge[]) {
    _.forEach(congeUsers, (UserConge) => {
      this.setStatus(UserConge, CongeStatus.DELETED);
    });
  }

  selectAll(congeUsers : UserConge[]) {
    _.forEach(congeUsers, (UserConge) => {
      this.setSelected(UserConge, true);
    });
  }

  unselectAll(congeUsers : UserConge[]) {
    _.forEach(congeUsers, (UserConge) => {
      this.setSelected(UserConge, false);
    });
  }

  validate(userConge : UserConge) {
    console.log("conge.service : validate()");
    console.log("userConge : ", userConge);
    this.setStatus(userConge, CongeStatus.VALIDATED);
  }

  delete(userConge : UserConge) {
    console.log("conge.service : delete()");
    console.log("userConge : ", userConge);
    this.setStatus(userConge, CongeStatus.DELETED);
  }

  private setStatus(userConge : UserConge, congeStatus : CongeStatus) {
    let congesTmp : UserConge[] = this._userConges.getValue();
    _.forEach(congesTmp, (UserConge) => {
      if(UserConge.idUserConge === userConge.idUserConge) {
        UserConge.conge.status = congeStatus;
      }
    });
    this._userConges.next(congesTmp);
  }

  private setSelected(userConge : UserConge, selected : boolean) {
    let congesTmp : UserConge[] = this._userConges.getValue();
    _.forEach(congesTmp, (UserConge) => {
      if(UserConge.idUserConge === userConge.idUserConge) {
        UserConge.isSelected = selected;
      }
    });
    this._userConges.next(congesTmp);
  }

  getConges() : Observable<Response> {
    return this.http.get(this.api_url);
  }

  private loadInitialData()  {
    console.log("conge.service : loadInitialData");
    this.getConges().subscribe(res => {
                    let conges = (<UserConge[]>res.json());
                    this._userConges.next(conges);
                },
                err => console.log("Error retrieving userConges")
            );
  }
}
