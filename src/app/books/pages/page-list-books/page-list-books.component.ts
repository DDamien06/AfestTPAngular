import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-list-books',
  standalone: true,
  imports: [NgFor,NgIf,MatIconModule,RouterLink],
  templateUrl: './page-list-books.component.html',
  styleUrl: './page-list-books.component.scss'
})
export class PageListBooksComponent {
  books : Book[]=[];
  sub:any;
  errorMessage : string = 'error'

  
  constructor(private bookService:BookService){}
  

  ngOnDestroy():void{
    this.sub.unsubscribe()
  }
  
  }