import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from "./books.component";
import { BooksListComponent } from "./books-list/books-list.component";

const booksRoutes: Routes = [
  { path: '', component: BooksComponent,
    children: [
      { path : 'books', component: BooksListComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(booksRoutes)],
  exports: [ RouterModule ]
})

export class BooksRoutingModule {}
