import { Component } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-page-detail-book',
  standalone: true,
  imports: [],
  templateUrl: './page-detail-book.component.html',
  styleUrl: './page-detail-book.component.scss'
})
export class PageDetailBookComponent {
  
  book: Book = new Book;

}
