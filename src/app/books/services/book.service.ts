import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/cache';

import {Book} from "../book";

@Injectable()
export class BookService {

  books: Observable<Book[]>;

  /* private dataStore: {
    books: Book[]
  };*/

  constructor( private http:Http

  ){}

  getBooks():Observable<Book[]> {
    return this.http.get('./assets/books.json')
      .retry(2)
      .map((res: Response) => res.json())
      .catch( err => err.json() )
      .cache();
  }
}
/* return this.http.get(this.heroesUrl)
 .map(this.extractData)
 .catch(this.handleError);
* */
