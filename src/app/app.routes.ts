import { Routes } from '@angular/router';
import { PageListBooksComponent } from './books/pages/page-list-books/page-list-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageDetailBookComponent } from './books/pages/page-detail-book/page-detail-book.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'page-list-books', component: PageListBooksComponent},
    {path:'page-detail-book', component: PageDetailBookComponent},
    {path:'login', component: LoginComponent, title: 'login page'},

    

    {path:'**', component: PageNotFoundComponent}
];
