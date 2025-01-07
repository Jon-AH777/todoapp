import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodos = (key, initialValue) => {
  const [todos, setTodos] = useLocalStorage(key, initialValue);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const addTodo = (text) => {
    if (text.trim() !== "") {
      // if condition checks if newTodo input is empty or not
      const newTodoItem = { id: Date.now(), text, completed: false }; //creates a new todo object with id, text, completed status
      const updatedTodos = [...todos, newTodoItem]; //updates the todos state with new array and creates a new array with existing todos
      setTodos(updatedTodos);
      /* setNewTodo(""); */ // clears the newTodo inputfield
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addTodo("new todos");
    }, 5000);

    return () => clearInterval(interval);
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // deletes todo items matching to its id
  };

  const startEditTodo = (todo) => {
    // prepares the todo item to be edited
    setEditTodoId(todo.id); // sets the ediTooId state id to be edited
    setEditTodoText(todo.text); //same for text
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editTodoText } : todo
    ); // creates a new object by mapping through each todo item in the existing todos array, if it matches, it creates new todo object with updated text from editTodoText
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoText(""); // resets editTooId and editTodoText to its intial value
  };
  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ); // similar like updateTodo except it toggles the status of todo item
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]); // stores updated todo list in localstorage and runs whenever key & todos state changes

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
