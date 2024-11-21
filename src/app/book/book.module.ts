import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksCollectionComponent} from './books-collection/books-collection.component';
import {MatTableModule} from "@angular/material/table";
import { BookCreatorComponent } from './book-creator/book-creator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    BooksCollectionComponent,
    BookCreatorComponent
  ],
  exports: [
    BooksCollectionComponent,
    BookCreatorComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class BookModule { }
