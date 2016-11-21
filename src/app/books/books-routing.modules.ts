import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from "./books.component";
import { BooksListComponent } from "./books-list/books-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const booksRoutes: Routes = [
  { path: '', component: BooksComponent,
    children: [
      { path : '', component: BooksListComponent}
    ]
  },
  { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(booksRoutes)],
  exports: [ RouterModule ]
})

export class BooksRoutingModule {}
