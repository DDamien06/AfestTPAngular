import { Component, Input, OnDestroy, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Author } from '../model/author';

@Component({
  selector: 'app-form-author',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.scss'
})
export class FormAuthorComponent implements OnInit {
 
  @Input() public init: Author | undefined;
  
  @Output() public submitted: EventEmitter<Author>;

  public form: FormGroup  = new FormGroup({
    name: new FormControl("", Validators.required),
    password: new FormControl(""),
  })
 
  constructor(){
    this.submitted = new EventEmitter<Author>;
  }

  ngOnInit(): void {
  }

  public onSubmit():void{
    console.log('isvalid', this.form.valid)
    console.log('hello', this.form.value)
  }


}
