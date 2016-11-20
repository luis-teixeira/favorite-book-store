import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageLandingComponent } from './landing-page/page-landing.component';
import { SharedModule } from "./shared/shared.module";
import { BooksModule } from "./books/books.module";

// import {BooksModule} from "./books/books.module";

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BooksModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageLandingComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
