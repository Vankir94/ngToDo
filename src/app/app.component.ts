import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoCreateFormUiComponent} from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {TodoState} from './store/todo/todo.reducer';
import {select, Store} from '@ngrx/store';
import {TodoCrateAction, TodoDeleteAction, TodoToggleAction} from './store/todo/todo.actions';
import {TodoListUiComponent} from './ui/todo-list-ui/todo-list-ui.component';
import {Task} from "./store/model/Task";
import {todoListSelector} from "./store/todo/todo.selectors";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import { TodoStorageService } from './service/todo-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TodoListUiComponent, TodoCreateFormUiComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent implements OnInit{
  todoList$: Observable<Task[]> = this.store$.pipe(select(todoListSelector));

  constructor(
    private store$: Store<TodoState>,
    private todoStorageService: TodoStorageService
  ) {}

  ngOnInit() {
    this.todoStorageService.init();
  }

  onCreate(value: string) {
    this.store$.dispatch(new TodoCrateAction({name: value}));
  }

  onDelete(name: string) {
    this.store$.dispatch(new TodoDeleteAction({name}));
  }

  onToggle(name: string) {
    this.store$.dispatch(new TodoToggleAction({name}));
  }
}
