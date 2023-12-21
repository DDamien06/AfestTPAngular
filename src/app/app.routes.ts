import { Routes } from '@angular/router';
import { PageListBooksComponent } from './books/pages/page-list-books/page-list-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageDetailBookComponent } from './books/pages/page-detail-book/page-detail-book.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PageListAuthorsComponent } from './authors/pages/page-list-authors/page-list-authors.component';
import { PageDetailAuthorComponent } from './authors/pages/page-detail-author/page-detail-author.component';
import { PageAddAuthorComponent } from './authors/pages/page-add-author/page-add-author.component';

export const routes: Routes = [
    {path:'authors', component: PageListAuthorsComponent},
    {path:'authors/:id', component: PageDetailAuthorComponent},
    {path:'author/add', component: PageAddAuthorComponent},

    {path:'books', component: PageListBooksComponent},
    {path:'books/:id', component: PageDetailBookComponent},

    {path:'login', component: LoginComponent, title: 'login page'},
    
    {path:'', component:HomeComponent},
    {path:'**', component: PageNotFoundComponent}
];
