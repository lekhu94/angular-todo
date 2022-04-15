import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss']
})
export class DoneListComponentComponent implements OnInit {

  @Input() doneList:Todo[] = [];
  @Output() update = new EventEmitter<any>();

  ngOnInit(): void {
    
  }

  markPending(item: Todo) {
    this.doneList = this.doneList.filter(data => data.id != item.id);
    item.isDone = false;
    let data = { item, list: this.doneList };
    this.update.emit(data);
  }

}
