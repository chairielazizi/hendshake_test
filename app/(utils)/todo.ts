import { Todo } from "../models/todo";

export function generateId(): number {
  return Math.floor(Math.random() * 1000000);
}
