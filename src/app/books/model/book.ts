import { Author } from "../../authors/model/author";
import { BookI } from "./book-i";
import { BookType } from "./book-type";

export class Book implements BookI{
    bookId!: number;
    title!: String;
    author!: Author;
    nbPages!: number;
    price!: number;
    bookType!: BookType;
    available!: boolean;

    getAuthorName():String {
        return this.author.authorLastName;
    }

}
