import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTodosHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextChangeHandler}
      />
      <button type="submit" className="todo-button" onClick={addTodosHandler}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
