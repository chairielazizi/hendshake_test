import { Todo } from "../models/todo";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {
  return (
    <table className="w-full table-auto">
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Activity:</td>
          <td className="px-4 py-2 border border-gray-300">{todo.activity}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Price:</td>
          <td className="px-4 py-2 border border-gray-300">RM {todo.price}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Type:</td>
          <td className="px-4 py-2 border border-gray-300">{todo.type}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">
            Booking Required:
          </td>
          <td className="px-4 py-2 border border-gray-300">
            {todo.bookingRequired ? "Yes" : "No"}
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Accessibility:</td>
          <td className="px-4 py-2 border border-gray-300">
            {todo.accessibility}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            className="px-4 py-2 border border-gray-300 text-right"
          >
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoItem;
