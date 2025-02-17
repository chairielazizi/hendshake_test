import { Todo } from "../models/todo";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {
  return (
    <div className="mx-auto w-1/2 text-black font-bold mb-5">
      <table className="w-full table-auto bg-yellow-500 rounded-lg overflow-hidden border border-black">
        <tbody className="space-y-2">
          <tr>
            <td className="px-4 py-2 border border-gray-300">Activity:</td>
            <td className="px-4 py-2 border border-gray-300">
              {todo.activity}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Price:</td>
            <td className="px-4 py-2 border border-gray-300">
              RM {todo.price}
            </td>
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
          <tr className="mb-3">
            <td
              colSpan={2}
              className="px-4 py-2 border border-gray-300 text-right bg-slate-800"
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
    </div>
  );
};

export default TodoItem;
