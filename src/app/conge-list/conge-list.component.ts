import { Component, OnInit, Input } from '@angular/core';
import {CongeService} from '../conge.service';
import {UserConge} from '../conge';
import {CongeStatus} from '../conge-status.enum';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-conge-list',
  templateUrl: './conge-list.component.html',
  styleUrls: ['./conge-list.component.scss']
})
export class CongeListComponent implements OnInit {
  @Input() congeStatusToShow : CongeStatus;

  userConges : UserConge[] = [];
  CongeStatus : typeof CongeStatus = CongeStatus;

  isSelectedAll : boolean = false;

  constructor(private congeService : CongeService) { }

  ngOnInit() {
    console.log("congeStatusToShow", this.congeStatusToShow);
    this.getConges(this.congeStatusToShow);
  }

  getConges(congeStatusToShow : CongeStatus) {
    this.congeService.getConges(congeStatusToShow)
    .filter((userConge:UserConge) => userConge.conge.status === congeStatusToShow)
    .subscribe(conge => this.userConges.push(conge));
  }

  validateAll() {
    for(let userConge of this.userConges) {
      this.congeService.validate(userConge);
    }
  }

  deleteAll() {
    for(let userConge of this.userConges) {
      this.congeService.delete(userConge);
    }
  }

  selectAll() {
    this.isSelectedAll = true;
    for(let userConge of this.userConges) {
      userConge.isSelected = true;
    }
  }
  unselectAll() {
    this.isSelectedAll = false;
    for(let userConge of this.userConges) {
      userConge.isSelected = false;
    }
  }
  getBadgeNumber() {
    return this.userConges != undefined ? this.userConges.length : 0;
  }
}
