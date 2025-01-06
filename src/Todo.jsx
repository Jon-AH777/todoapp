import React from "react";
import todo_icon from "./assets/todo_icon.png";
import Button from "./Button";
import Input from "./Input";
import TodoList from "./TodoList";
import useTodos from "./useTodos";

const Todo = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    deleteTodo,
    startEditTodo,
    updateTodo,
    toggleTodoCompletion,
    editTodoId,
    editTodoText,
    setEditTodoText,
  } = useTodos("todos", []);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} className="w-8" alt="" />
        <h1 className="text-3xl font-semibold">To-Do App</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <Input
          value={newTodo}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600"
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
      {/* TODO LIST */}
      <div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
          updateTodo={updateTodo}
          toggleTodoCompletion={toggleTodoCompletion}
          editTodoId={editTodoId}
          editTodoText={editTodoText}
          setEditTodoText={setEditTodoText}
        />
      </div>
    </div>
  );
};

export default Todo;
