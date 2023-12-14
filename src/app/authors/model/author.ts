import { AuthorI } from "./author-i";

export class Author implements AuthorI {
    authorId!: number;
    first_name!: String;
    last_name!: String;
}
