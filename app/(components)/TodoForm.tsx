"use client";
import { useState } from "react";
import { Todo } from "../models/todo";
import { generateId } from "../(utils)/todo";

interface TodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todo: Todo = {
      id: generateId(),
      activity,
      price,
      type,
      bookingRequired,
      accessibility,
    };
    onAddTodo(todo);
    setActivity("");
    setPrice(0);
    setType("");
    setBookingRequired(false);
    setAccessibility(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md mt-5"
    >
      <h2 className="text-xl font-bold mb-4 text-black text-center">
        Add Todo
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="activity"
        >
          Activity:
        </label>
        <input
          type="text"
          id="activity"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min={0}
          step={0.01}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="type"
        >
          Type:
        </label>
        <select
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black"
        >
          <option value="">Select a type</option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="bookingRequired"
        >
          Booking required:
        </label>
        <input
          type="checkbox"
          id="bookingRequired"
          checked={bookingRequired}
          onChange={(event) => setBookingRequired(event.target.checked)}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="accessibility"
        >
          Accessibility:
        </label>
        <input
          type="range"
          id="accessibility"
          min="0"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={(event) => setAccessibility(Number(event.target.value))}
          className="w-full"
        />
        <span className="ml-2">{accessibility}</span>
      </div>
      <button
        type="submit"
        className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
