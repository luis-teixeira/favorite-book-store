import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { LoadingComponent } from "./shared/loading/loading.component";
import { PageLandingComponent } from './landing-page/page-landing.component';
import { UiHeaderComponent } from './shared/ui-header/ui-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PageLandingComponent,
    UiHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
