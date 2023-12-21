import { Book } from "../../books/model/book";

export interface AuthorI {

    authorId:number;
    authorFirstName:String;
    authorLastName:String;
    books:Book[];
    

}
