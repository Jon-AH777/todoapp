import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodos = (key, initialValue) => {
  const [todos, setTodos] = useLocalStorage(key, initialValue);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
      const updatedTodos = [...todos, newTodoItem];
      setTodos(updatedTodos);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditTodo = (todo) => {
    setEditTodoId(todo.id);
    setEditTodoText(todo.text);
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editTodoText } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoText("");
  };
  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return {
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
    toggleTodoCompletion,
  };
};

export default useTodos;
