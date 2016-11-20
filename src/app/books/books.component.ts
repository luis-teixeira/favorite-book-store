import { Component, OnInit } from '@angular/core';
import {BookService} from "./services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = 'welcome to yours favorite book Publisher';

  constructor(private bookService: BookService) { }

  ngOnInit() {
//    this.bookService.getBooks().subscribe(books => console.log(books))/**/*/
  }

}
