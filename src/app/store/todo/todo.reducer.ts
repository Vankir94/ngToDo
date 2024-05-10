import {Task} from "../model/Task";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  todoList: Task[];
}

const initialState: TodoState = {
  todoList: []
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        todoList: [...state.todoList, {title: action.payload.name, isDone: false}]
      };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(el => el.title !== action.payload.name)
      };
    default:
      return state;
  }
}
