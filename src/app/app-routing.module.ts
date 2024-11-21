import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookCreatorComponent} from "./book/book-creator/book-creator.component";
import {BooksCollectionComponent} from "./book/books-collection/books-collection.component";

const routes: Routes = [
  {
    path: '',
    component: BooksCollectionComponent,
    title: 'Books list'
  },
  {
    path: 'create',
    component: BookCreatorComponent,
    title: 'Create books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
