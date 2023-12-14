import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Book } from '../../books/model/book';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl = 'assets/authors.json';
  private collection$:BehaviorSubject<Author[]>


  constructor(private http: HttpClient) {
    this.collection$=new BehaviorSubject<Author[]>([]);
    this.refreshCollection();
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

public refreshCollection(){
  this.http.get<Author[]>(this.authorUrl).subscribe((data)=> {
    this.collection$.next(data);
  });
}

}


