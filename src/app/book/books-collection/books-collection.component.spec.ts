import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCollectionComponent } from './books-collection.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('BooksCollectionComponent', () => {
  let component: BooksCollectionComponent;
  let fixture: ComponentFixture<BooksCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksCollectionComponent],
      imports: [
        CommonModule,
        MatTableModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(BooksCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
