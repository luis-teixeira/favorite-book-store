import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {FilterListGenreByPipe} from "../pipes/filter-list-genre-by.pipe";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  private books:any;
  private filteredCount: Object = {count: -1};


  private listCategories: Array<string>;
  private listGenre: Array<string>;

  private selectedCategories: any = 'Non-Fiction';
  private selectedGenre: any = 'all';

  private queryBooks: string = '';
  private searchInAllBook: Boolean = true;

  constructor( private bookService: BookService,
               private filterListGenderBy:FilterListGenreByPipe
  ) { }

  /**
   * onChangedCategories - Represents a Emmiter sent from the BookFilterBarComponent
   * @param {string} categories - represents categorie selected
   */
  onChangedCategories(categories:string){
    this.selectedCategories = categories;
  }

  /**
   * onChangedGenres - Represents a Emmiter sent from the BookFilterBarComponent
   * @param {string} genre - represents genre selected
   */
  onChangedGenres(genre:string){
    this.selectedGenre = genre;
  }

  /**
   * onChangedQuery - Represents a Emmiter sent from the BookFilterBarComponent
   * @param {string} query - represents query selected
   */
  onChangedQueryBook(query){
    this.queryBooks = query;
  }

  /**
   * onChangedLibrarySearch - Represents a Emmiter sent from the BookFilterBarComponent
   * @param {booleane} bool - represents if search all Books on Filtered Books selected
   */
  onChangedLibrarySearch(bool){
    this.searchInAllBook = bool;
  }
  /**
  * Just for this demo, to generate a random number to fill the book images
  */
  random() {
    return Math.random();
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books;
        this.listCategories = this.filterListGenderBy.transform(this.books, 'category');
        this.listGenre = this.filterListGenderBy.transform(this.books, 'name');
      });
  }

}
