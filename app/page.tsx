"use client";
import { useEffect, useState } from "react";
import TodoList from "./(components)/TodoList";
import { Todo } from "./models/todo";
import TodoForm from "./(components)/TodoForm";
import { getTodos, saveTodos } from "./(utils)/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  useEffect(() => {
    const storedTodos = getTodos();
    setTodos(storedTodos);
  }, []);

  return (
    <div className="mt-5">
      <TodoForm onAddTodo={handleAddTodo} />
      TodoList
      <TodoList todos={todos} />
    </div>
  );
}
