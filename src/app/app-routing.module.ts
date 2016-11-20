import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from "./landing-page/page-landing.component";
import {BooksComponent} from "./books/books.component";

const appRoutes: Routes = [
  { path: '', component: PageLandingComponent },
  // { path: 'books',  loadChildren: './app/books/books.module#BooksModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

