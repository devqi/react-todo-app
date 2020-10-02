import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterTodosHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((td) => td.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((td) => td.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterTodosHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>DevQ's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      ></Form>
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
      ></TodoList>
    </div>
  );
}

export default App;
