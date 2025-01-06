import React from "react";
import not_tick from "./assets/not_tick.png";
import delete_icon from "./assets/delete.png";
import tick from "./assets/tick.png";
import Button from "./Button";
import Input from "./Input";

const TodoList = ({
  todos,
  deleteTodo,
  startEditTodo,
  updateTodo,
  toggleTodoCompletion,
  editTodoId,
  editTodoText,
  setEditTodoText,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 my-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="flex flex-1 items-center cursor-pointer gap-4">
            {editTodoId === todo.id ? (
              <Input
                value={editTodoText}
                onChange={(e) => setEditTodoText(e.target.value)}
                className="flex-1"
              />
            ) : (
              <div className="flex items-center gap-4">
                <img
                  src={todo.completed ? tick : not_tick}
                  className="w-7 cursor-pointer"
                  onClick={() => toggleTodoCompletion(todo.id)}
                  alt=""
                />
                <p
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </p>
                <img
                  className="w-5 cursor-pointer"
                  src={delete_icon}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                  alt="delete"
                />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 ml-4">
            {editTodoId === todo.id ? (
              <Button
                onClick={() => updateTodo(todo.id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Update
              </Button>
            ) : (
              <Button
                onClick={() => startEditTodo(todo)}
                className="bg-blue-600 text-white px-2 py-1 rounded"
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
