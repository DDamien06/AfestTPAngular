import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { Observable } from 'rxjs';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-page-detail-book',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule,RouterLink,AsyncPipe],
  templateUrl: './page-detail-book.component.html',
  styleUrl: './page-detail-book.component.scss'
})
export class PageDetailBookComponent implements OnInit {
  
  book: Book = new Book;
  public id:number;
  public book$:Observable<Book|null>

  constructor(
    private router:Router,
    private bookService:BookService,
    private activateRoute:ActivatedRoute){
      this.id=Number(activateRoute.snapshot.params['id']);
      this.book$=this.bookService.getBookById(this.id);
    }
  ngOnInit(): void {}
  


}
