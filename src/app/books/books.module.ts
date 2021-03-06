import { NgModule} from '@angular/core';
import { BooksRoutingModule } from "./books-routing.modules";
import { BooksComponent } from "./books.component";
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from "../shared/shared.module";
import { BookService } from "./services/book.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { FilterBooksCategoryPipe } from './pipes/filter-books-category.pipe';
import { FilterBooksGenrePipe } from './pipes/filter-books-genre.pipe';
import { FilterBooksCountPipe } from './pipes/filter-books-count.pipe';
import { FilterBooksSearchPipe } from './pipes/filter-books-search.pipe';
import { BookFilterBarComponent } from './book-filter-bar/book-filter-bar.component';
import { FilterListGenreByPipe } from './pipes/filter-list-genre-by.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FilterDateMomentPipe } from './pipes/filter-date-moment.pipe';
import { BookCardComponent } from './book-card/book-card.component';

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
    BookCardComponent,
    BookFilterBarComponent,
    FilterBooksCategoryPipe,
    FilterBooksGenrePipe,
    FilterBooksCountPipe,
    FilterBooksSearchPipe,
    FilterListGenreByPipe,
    BookDetailComponent,
    FilterDateMomentPipe
  ],
  providers: [
    BookService,
    FilterListGenreByPipe
  ]
})
export class BooksModule { }
