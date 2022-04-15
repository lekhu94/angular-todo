import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.scss'],
})
export class ToDoListComponentComponent implements OnInit {

  @Input() todoList: Todo[] = [];
  @Output() update = new EventEmitter<any>();

  ngOnInit(): void { }

  markDone(item: Todo) {
    this.todoList = this.todoList.filter(data => data.id != item.id);
    item.isDone = true;
    let data = { item, list: this.todoList };
    this.update.emit(data);
  }

}
