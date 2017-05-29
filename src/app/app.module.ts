import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CongeComponent } from './conge/conge.component';
import { CongeListComponent } from './conge-list/conge-list.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';

import {CongeService} from './conge.service';

@NgModule({
  declarations: [
    AppComponent,
    CongeComponent,
    CongeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CongeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
