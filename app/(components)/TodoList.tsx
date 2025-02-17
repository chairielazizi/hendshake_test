import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      <h2 className="text-4xl text-center">Total Todo List: {todos.length}</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
