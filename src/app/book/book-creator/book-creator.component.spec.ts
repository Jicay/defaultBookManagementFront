import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreatorComponent } from './book-creator.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BookService} from "../book.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('BookCreatorComponent', () => {
  let component: BookCreatorComponent;
  let fixture: ComponentFixture<BookCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCreatorComponent],
      imports: [
        CommonModule,
        MatTableModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [BookService]

    });
    fixture = TestBed.createComponent(BookCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
