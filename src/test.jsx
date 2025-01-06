import React from "react";
import Button from "./Button";
import Input from "./Input";
import useTodos from "./useTodos";

function App() {
  const {
    todos,
    newTodo,
    editTodoId,
    editTodoText,
    setNewTodo,
    setEditTodoId,
    setEditTodoText,
    addTodo,
    deleteTodo,
    startEditTodo,
    updateTodo,
  } = useTodos("todos", []);

  return (
    <div className="bg-slate-500 grid py-4 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Todo App</h1>
      <div className="mt-4 flex justify-center">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="mr-2"
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mt-2">
            {editTodoId === todo.id ? (
              <Input
                value={editTodoText}
                onChange={(e) => setEditTodoText(e.target.value)}
                className="mr-2"
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              {editTodoId === todo.id ? (
                <Button onClick={() => updateTodo(todo.id)} className="mr-2">
                  Update
                </Button>
              ) : (
                <Button onClick={() => startEditTodo(todo)} className="mr-2">
                  Edit
                </Button>
              )}
              <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
