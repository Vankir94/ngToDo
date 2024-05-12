import {Action} from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item',
  toggle = '[TODO] toggle todo item',
  load = '[TODO] load todo state',
}

export class TodoCrateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload: {name: string}) {}
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload: {name: string}) {}
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;

  constructor(public payload: {name: string}) {}
}

export class TodoLoadStateAction implements Action {
  readonly type = todoActionsType.load;

  constructor(public payload: {state: TodoState}) {}
}

export type TodoActions = TodoCrateAction | TodoDeleteAction | TodoToggleAction | TodoLoadStateAction;
