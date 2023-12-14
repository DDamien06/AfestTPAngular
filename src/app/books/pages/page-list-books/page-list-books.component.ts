import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BookType } from '../../model/book-type';
import { CurrencyPipe } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-page-list-books',
  standalone: true,
  imports: [CurrencyPipe,NgFor,NgIf,MatIconModule,RouterLink,MatSlideToggleModule],
  templateUrl: './page-list-books.component.html',
  styleUrl: './page-list-books.component.scss'
})
export class PageListBooksComponent implements OnInit,OnDestroy{
 
  books : Book[]=[]
  sub!:Subscription;
  errorMessage : string = 'error'



  
  constructor(private bookService:BookService){}
  
  ngOnInit():void{
    this.sub=this.bookService.getBooks().subscribe({
      next: books => this.books= books,
      error: err => this.errorMessage = err
    });
  }


  ngOnDestroy():void{
    this.sub.unsubscribe()
}

  

  }