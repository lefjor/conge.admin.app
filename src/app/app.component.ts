import { Component } from '@angular/core';
import {CongeStatus} from './conge-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    CongeStatus : typeof CongeStatus = CongeStatus;
}
