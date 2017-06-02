import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CongeComponent } from './conge/conge.component';
import { CongeListComponent } from './conge-list/conge-list.component';

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
    ReactiveFormsModule
  ],
  providers: [CongeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
