import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LocalStorageService } from './LocalStorageService';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DataTablesModule,HttpModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
