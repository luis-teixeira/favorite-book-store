import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/cache';

import {Book} from "../book";

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 * @return {Array} a shuffles array
 */
function shuffle(a):Array<any> {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

@Injectable()
export class BookService {

  private books: Observable<Book[]>;

  constructor( private http:Http

  ){}

  /**
   * Fetch all Books
   * @returns {Observable<R>} - return all books from 'API'
   */
  getBooks():Observable<Book[]> {
    return this.http.get('./assets/books.json')
      .retry(2)
      .map((res: Response) => res.json())
      .catch( err => err.json() )
      .cache();
  }

  /**
   * Fetch Book by Id
   * @param id - represent Book ID
   * @returns {Observable<R>}
   */
  getBook(id):Observable<Book[]> {
    return this.http.get('./assets/books.json')
      .retry(2)
      .map((res: Response) => {
        return res.json().filter(book => book.id === id)[0];
      })
      .catch( err => err.json() )
      .cache();
  }

  /**
   *
   * @param {string} categorie
   * @param {string} genre
   * @param {number} limit - represent a number of similar books
   * @return {Observable<R>}
   */
  getBookFilterBy(categorie:string, genre:string,  limit:number ):Observable<Book[]> {
    return this.http.get('./assets/books.json')
      .retry(2)
      .map((res: Response) => {
        const shuffledArray = shuffle(res.json());
        return shuffledArray.filter(book => book.genre.name === genre || book.genre.category === categorie ).slice(0,limit);
      })
      .catch( err => err.json() )
      .cache();
  }
}

