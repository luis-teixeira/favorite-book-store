import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  inputs: ['book']
})
export class BookCardComponent implements OnInit {

  private book: Book;

  constructor( private router: Router

  ) { }

  /**
   * Navigate to Book Detail
   * @param book
   */
  onSelect(book: Book) {
    this.router.navigate(['/book', book.id]);
  }
  /**
   * Just for this demo, to generate a random number to fill the book images
   */
  random() {
    return Math.random();
  }

  ngOnInit() {}

}
