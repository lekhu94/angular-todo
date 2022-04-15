import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.scss']
})
export class ToDoComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  @Output() addTodo = new EventEmitter<Todo>();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      repeating: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(val => {
      if (this.form.valid) {
        this.form.value.id = Math.floor((Math.random() * 100) + 1);
        this.addTodo.emit(val);
        this.form.reset();
      }
    })
  }

}
