import { Book } from "../../books/model/book";
import { AuthorI } from "./author-i";

export class Author implements AuthorI {
    authorId!: number;
    authorFirstName!: String;
    authorLastName!: String;
    books!: Book[];
}
