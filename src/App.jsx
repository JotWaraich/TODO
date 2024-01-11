import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProivder } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProivder
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TodoProivder>
  );
}

export default App;
