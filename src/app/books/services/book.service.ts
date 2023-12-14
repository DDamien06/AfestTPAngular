import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'assets/books.json';

  constructor(private http:HttpClient) {

  }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl)
  }

}
