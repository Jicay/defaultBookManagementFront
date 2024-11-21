import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.scss'],
  providers: [ BookService ]
})
export class BooksCollectionComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['name', 'author'];

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: resp => {
        this.books = resp
      },
      error: () => this.books = []
    })
  }
}
