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

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <div className="mt-5">
      <TodoForm onAddTodo={handleAddTodo} />
      <div className="h-5"></div>
      {/* TodoList */}
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
