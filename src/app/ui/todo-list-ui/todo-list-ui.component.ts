import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../store/model/Task";
import {JsonPipe} from "@angular/common";
import {TuiForModule} from "@taiga-ui/cdk";

@Component({
  selector: 'app-todo-list-ui',
  standalone: true,
  imports: [
    JsonPipe,
    TuiForModule
  ],
  templateUrl: './todo-list-ui.component.html',
  styleUrl: './todo-list-ui.component.scss'
})
export class TodoListUiComponent {
  @Input() todoList: Task[] | null = [];
  @Output() delete = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();

  deleteItem(name: string) {
    this.delete.emit(name);
  }

  onToggle(event: Event, name: string) {
    event.preventDefault();
    this.toggle.emit(name);
  }
}
