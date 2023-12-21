import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book';
import { AppComponent } from '../../app.component';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private bookUrl = 'http://localhost:8080/books';
  private bookUrl = 'assets/books.json';
  public collection$: BehaviorSubject<Book[]>;

  constructor(private http:HttpClient) {
  this.collection$=new BehaviorSubject<Book[]>([]);
   this.refreshCollection();
  }

  public refreshCollection(){
    this.http.get<Book[]>(this.bookUrl).subscribe((data)=> {
      this.collection$.next(data);
    })
  }

    public getBookById(id : number): Observable<Book>{
      return this.http.get<Book>(`${this.bookUrl}/${"id"}`)
     
    }
    
/*    getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl)
    }
*/
}
