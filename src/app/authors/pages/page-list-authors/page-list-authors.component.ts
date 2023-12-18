import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../model/author';
import { NgFor} from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { subscribe } from 'diagnostics_channel';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list-authors',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './page-list-authors.component.html',
  styleUrl: './page-list-authors.component.scss'
})
export class PageListAuthorsComponent implements OnInit,OnDestroy {

  authors: Author[] | undefined;
  sub!:Subscription;
  errorMessage: string = 'error'

  constructor(private authorService: AuthorService) {
  }


  ngOnInit(): void {
    this.sub = this.authorService.getAuthors().subscribe({
      next: authors => this.authors = authors,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
