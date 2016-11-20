import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-book-filter-bar',
  templateUrl: './book-filter-bar.component.html',
  styleUrls: ['./book-filter-bar.component.css'],
  inputs: ['listCategories', 'listGenre'],
  outputs: ['onChangedCategories','onChangedGenre','onChangedQuery','onChangedLibrary'],
})
export class BookFilterBarComponent implements OnInit {

  onChangedCategories: EventEmitter<string>;
  onChangedGenre: EventEmitter<string>;
  onChangedQuery: EventEmitter<string>;
  onChangedLibrary: EventEmitter<boolean>;

  private listCategories: Array<string>;
  private selectedCategories: string;
  private listGenre: Array<string>;
  private selectedGenre: string;

  private allBooks:boolean = true;

  constructor() {
    this.onChangedCategories = new EventEmitter();
    this.onChangedGenre = new EventEmitter();
    this.onChangedQuery = new EventEmitter();
    this.onChangedLibrary = new EventEmitter();
  }

  onChangeCategories(selectedCategories) {
    this.onChangedCategories.emit(selectedCategories);
  }

  onChangeGenre(selectedGenre) {
    this.onChangedGenre.emit(selectedGenre);
  }

  onChangeQuery(queryBooks) {
    this.onChangedQuery.emit(queryBooks);
  }

  onChangeLibrary(allBooks) {
    this.onChangedLibrary.emit(allBooks);
  }

  ngOnInit() {
    this.selectedCategories = this.listCategories[0];
    this.selectedGenre = 'all';
    // this.onChangeCategories(this.listCategories[0]);
    // this.onChangeGenre(this.selectedGenre);

  }

}
