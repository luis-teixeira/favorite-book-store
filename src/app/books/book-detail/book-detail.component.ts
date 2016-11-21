import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css','../books-list/books-list.component.css']
})
export class BookDetailComponent implements OnInit {
  private similarCount: number = 3;

  private book: Object;
  private similarBooks: Array<Object>;

  constructor( private bookService: BookService,
               private route: ActivatedRoute,
               private router: Router
  ) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  /**
   * Get Similar Book
   * @param book
   */
  getSimilarBooks(book) {
    this.bookService.getBookFilterBy(book.genre['category'], book.genre['name'], this.similarCount).subscribe( res => {
      this.similarBooks = res;
    })
  }

  /**
   * Navigate to Book Detail
   * @param book
   */
  onSelect(book: Book) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/book', book.id]);
  }

  /**
   * Just for this demo, to generate a random number to fill the book images
   */
  random() {
    return Math.random();
  }

  ngOnInit() {
    this.route.params.subscribe( obj => {
      this.bookService.getBook(obj['id']).subscribe(res => {
        this.book = res;
        this.getSimilarBooks(this.book);
      })

    })
  }

}
