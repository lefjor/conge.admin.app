import { Component , OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {CongeStatus} from './conge-status.enum';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    CongeStatus : typeof CongeStatus = CongeStatus;

    searchForm : FormGroup;

    search : FormControl = new FormControl();

    constructor(fb : FormBuilder) {
      this.searchForm = fb.group ({
        search : this.search
      })
    }

    ngOnInit() {
      this.search.valueChanges
      // only recompute when the user stops typing for 400ms
      .debounceTime(400)
      // only recompute if the new value is different than the last
      .distinctUntilChanged().subscribe((text) => console.log(text));
    }

}
