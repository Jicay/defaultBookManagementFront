import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BookService} from "../book.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-book-creator',
  templateUrl: './book-creator.component.html',
  styleUrls: ['./book-creator.component.scss'],
  providers: [BookService]
})
export class BookCreatorComponent {
  titleControl = new FormControl('', [
    Validators.required
  ])
  authorControl = new FormControl('', [
    Validators.required
  ])
  bookForm: FormGroup = new FormGroup({
      titleControl: this.titleControl,
      authorControl: this.authorControl
    }
  );

  constructor(private snackBar: MatSnackBar, private bookService: BookService) {
  }

  get book(): Book {
    return {
      name: this.bookForm?.get('titleControl')?.value ?? '',
      author: this.bookForm?.get('authorControl')?.value ?? ''
    }
  }

  addBook() {
    const book = this.book
    this.bookService.createBooks(book).subscribe({
      next: resp => {
        this.snackBar.open(`Book ${book.name} ${book.author} added`, undefined, {
          duration: 5000
        })
        // this.titleControl.setValue('')
        // this.authorControl.setValue('')
      },
      error: () =>  {
        this.snackBar.open(`An error occurred while adding book`, undefined, {
          duration: 5000
        })
      }})

  }

  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required') ? 'You must enter a value' : 'There is an error';
  }
}
