import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Book } from '../model/book';




@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'http://localhost:8080/books';
  //private bookUrl = 'assets/books.json';
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
      return this.http.get<Book>(`${this.bookUrl}/${id}`)
     
    }
    
    public BookById(id: number): Observable<Book|null> {
      return this.collection$.pipe(map(datas => {
        for (let data of datas) {
          if (Number(data.bookId) === id) {
            return data
          }
        }
        return null;
      }));
    }


/*    getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl)
    }
*/
}
