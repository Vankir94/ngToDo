import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-create-form-ui',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo-create-form-ui.component.html',
  styleUrl: './todo-create-form-ui.component.scss'
})
export class TodoCreateFormUiComponent {
  @Output() create: EventEmitter<string> = new EventEmitter<string>();

  public name = '';

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }
}
