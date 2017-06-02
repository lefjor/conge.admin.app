import { Component, OnInit, Input } from '@angular/core';
import { UserConge} from '../conge';
import {CongeService} from '../conge.service';

import {CongeStatus} from '../conge-status.enum';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
  @Input() userConge : UserConge;

  CongeStatus : typeof CongeStatus = CongeStatus;

  constructor(private congeService : CongeService) { }

  ngOnInit() {
    this.userConge.isSelected = false;
  }

  validate() {
    this.congeService.validate(this.userConge);
  }

  delete() {
    this.congeService.delete(this.userConge);
  }

}
