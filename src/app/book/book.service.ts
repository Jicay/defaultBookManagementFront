import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Book} from "./model/Book";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Config} from "../config";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books: Observable<Book[]> = new Observable<Book[]>();

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log(`${Config.apiRoot}/books`)
    this.books = this.http.get<Book[]>(`${Config.apiRoot}/books`)
      .pipe(
        catchError(this.handleError)
      )

    return this.books;
  }

  createBooks(book: Book): Observable<Object> {
    return this.http.post(
      `${Config.apiRoot}/books`,
      book
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
