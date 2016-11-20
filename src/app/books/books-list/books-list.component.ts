import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  private books:any;
  private filteredCount = {count: -1};
  constructor( private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {this.books = books;} );
  }

}
