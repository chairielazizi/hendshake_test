"use client";
import { useState } from "react";
import TodoList from "./(components)/TodoList";
import { Todo } from "./models/todo";
import TodoForm from "./(components)/TodoForm";
import { saveTodos } from "./(utils)/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };
  return (
    <div className="mt-5">
      <TodoForm onAddTodo={handleAddTodo} />
      TodoList
      {/* <TodoList /> */}
    </div>
  );
}
