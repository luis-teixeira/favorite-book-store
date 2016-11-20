import { NgModule} from '@angular/core';
import { BooksRoutingModule } from "./books-routing.modules";
import { BooksComponent } from "./books.component";
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from "../shared/shared.module";
import { BookService } from "./services/book.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { FilterBooksCategoryPipe } from './filter-books-category.pipe';
import { FilterBooksGenrePipe } from './filter-books-genre.pipe';
import { FilterBooksCountPipe } from './filter-books-count.pipe';
import { FilterBooksSearchPipe } from './filter-books-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule,
    SharedModule,
  ],
  declarations: [
    BooksComponent,
    BooksListComponent,
    FilterBooksCategoryPipe,
    FilterBooksGenrePipe,
    FilterBooksCountPipe,
    FilterBooksSearchPipe
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
