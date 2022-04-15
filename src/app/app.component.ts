import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList: Todo[] = [];
  doneList: Todo[] = [];

  addTodo(data: Todo) {
    this.todoList = [...this.todoList, data];
  }

  updateItem(data: any, type: string) {
    if (type == 'done') {
      this.todoList = [...this.todoList, data.item];
      this.doneList = data.list;
    } else {
      this.doneList = [...this.doneList, data.item];
      this.todoList = data.list;
    }
  }
}
