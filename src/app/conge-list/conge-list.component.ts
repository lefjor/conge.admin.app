import { Component, OnInit, Input } from '@angular/core';
import {CongeService} from '../conge.service';
import {UserConge} from '../conge';
import {CongeStatus} from '../conge-status.enum';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import * as _ from "lodash";

import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-conge-list',
  templateUrl: './conge-list.component.html',
  styleUrls: ['./conge-list.component.scss']
})
export class CongeListComponent implements OnInit {
  @Input() congeStatusToShow : CongeStatus;

  CongeStatus : typeof CongeStatus = CongeStatus;

  isSelectedAll : boolean = false;

  constructor(private congeService : CongeService) { }

  userConges : UserConge[];

  ngOnInit() {
    console.log("congeStatusToShow", this.congeStatusToShow);
    this.getConges(this.congeStatusToShow);
  }

  private getConges(congeStatusToShow : CongeStatus) {
    console.log("conge-list.component : getConges");
    this.congeService.userConges
    .map(userConges => userConges.filter((userConge:UserConge) => userConge.conge.status === congeStatusToShow))
    .subscribe((userConges) => {
      this.userConges = userConges
    });
  }

  validateAll() {
    console.log("conge-list.component : validateAll");
    this.congeService.validateAll(this.userConges);
    this.isSelectedAll = false;
  }

  deleteAll() {
    console.log("conge-list.component : deleteAll");
    this.congeService.deleteAll(this.userConges);
    this.isSelectedAll = false;
  }

  selectAll() {
    console.log("conge-list.component : selectAll");
    this.isSelectedAll = true;
    this.congeService.selectAll(this.userConges);
  }

  unselectAll() {
    console.log("conge-list.component : unselectAll");
    this.isSelectedAll = false;
    this.congeService.unselectAll(this.userConges);
  }
}
