import { Todo } from "../models/todo";

const todoStorageKey = "todos";

export function getTodos(): Todo[] {
  const storedTodos = localStorage.getItem(todoStorageKey);
  return storedTodos ? JSON.parse(storedTodos) : [];
}
export function saveTodos(todos: Todo[]): void {
  localStorage.setItem(todoStorageKey, JSON.stringify(todos));
  console.log(todos);
}

export function generateId(): number {
  return Math.floor(Math.random() * 1000000);
}
