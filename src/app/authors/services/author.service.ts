import { HttpClient, HttpParams , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Book } from '../../books/model/book';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  //private authorUrl = 'assets/authors.json';
  private authorUrl = 'http://localhost:8080/authors';



  constructor(private http: HttpClient) {
  }



 public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl)
  }

 public getAuthorById(id: number): Observable<Author|null> {
    return this.getAuthors().pipe(map(datas => {
      for (let data of datas) {
        if (Number(data.authorId) === id) {
          return data
        }
      }
      return null;
    }));
  }

public addAuthor(item : Author): Observable<Author>{
  return this.http.post<Author>(this.authorUrl, item)
}

public deleteAuthor(id:number): Observable<Author>{
  return this.http.delete<Author>(`${this.authorUrl}/{id}`)
}

}


