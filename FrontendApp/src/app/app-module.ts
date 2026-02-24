import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { FormsModule } from '@angular/forms';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book'; 

@NgModule({
  declarations: [
    App,
    Red,
    Yellow,
    Blue,
    Green,
    Orange,
    Catalog,
    AddBook,
    UpdateBook
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
