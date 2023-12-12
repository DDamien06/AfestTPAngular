import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Author } from '../../../authors/model/author';
import { BookType } from '../../model/book-type';

@Component({
  selector: 'app-page-add-book',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './page-add-book.component.html',
  styleUrl: './page-add-book.component.scss'
})
export class PageAddBookComponent {

  authors: Author[]=[]
  
  bookType:BookType[]=[BookType.FANTASIE,BookType.POESIE,BookType.POLICIER]

  onSubmit():void{

  }
}
