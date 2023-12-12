import { Author } from "../../authors/model/author";
import { BookType } from "./book-type";

export interface BookI {

    bookId:number;
    title:String;
    author:Author;
    nbPages:number;
    price:number;
    bookType:BookType;
    available:boolean;

}
