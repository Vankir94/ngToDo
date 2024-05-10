import {Action} from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item'
}

export class TodoCrateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload: {name: string}) {}
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload: {name: string}) {}
}

export type TodoActions = TodoCrateAction | TodoDeleteAction;
