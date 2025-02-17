import { Todo } from "../models/todo";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {
  return (
    <div>
      <span>{todo.activity}</span>
      <span> - ${todo.price}</span>
      <span> - {todo.type}</span>
      <span>
        - {todo.bookingRequired ? "Booking required" : "No booking required"}
      </span>
      <span> - Accessibility: {todo.accessibility}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
