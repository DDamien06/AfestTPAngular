import { Component } from '@angular/core';
import { FormAuthorComponent } from "../../form-author/form-author.component";

@Component({
    selector: 'app-page-add-author',
    standalone: true,
    templateUrl: './page-add-author.component.html',
    styleUrl: './page-add-author.component.scss',
    imports: [FormAuthorComponent]
})
export class PageAddAuthorComponent {

}
