import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Author } from '../../model/author';
import { AuthorService } from '../../services/author.service';
import { Book } from '../../../books/model/book';


@Component({
  selector: 'app-page-detail-author',
  standalone: true,
  imports: [NgIf,NgFor,MatButtonModule,MatIconModule,RouterLink,RouterModule,AsyncPipe],
  templateUrl: './page-detail-author.component.html',
  styleUrl: './page-detail-author.component.scss'
})
export class PageDetailAuthorComponent implements OnInit, OnDestroy {

  sub!:Subscription;
  public id: number;
  public author$: Observable<Author|null>;
  public authorDetail:Author|null=null;
  //public authorExist:boolean=true;

  

  constructor(
    private router:Router,
    private authorService: AuthorService,
    private activateRoute: ActivatedRoute) {
    this.id = Number(activateRoute.snapshot.params['id']);
    this.author$ = this.authorService.getAuthorById(this.id);
  }

goPreviousPage():void{
  if(this.id>1)
  this.router.navigate(['authors',this.id-1])
}

goNextPage(){
  this.router.navigate(['authors',this.id+1])
}

private refreshTable():void{
  this.sub=this.authorService.getAuthorById(this.id).subscribe({
    next: (data) => {this.author$ = this.authorService.getAuthorById(this.id);
    },
  });
}

ngOnInit(): void { 
this.refreshTable();
  this.router.events.subscribe({
    next:(value) => {
      if(value instanceof NavigationEnd){
        this.id=Number(this.activateRoute.snapshot.params["id"]);
        this.refreshTable();
      }
    }
  })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
