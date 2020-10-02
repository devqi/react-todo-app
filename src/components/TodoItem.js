import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, todos, setTodos }) => {
  const updateTodoItemHandler = () => {
    setTodos(
      todos.map((td) => {
        if (td.id === todo.id) {
          return {
            ...td,
            completed: !td.completed,
          };
        }
        return td;
      })
    );
  };

  const removeTodoItemHandler = () => {
    setTodos(todos.filter((td) => td.id !== todo.id));
  };

  return (
    <div className="todo">
      <li
        key={todo.id}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </li>
      <button className="complete-btn" onClick={updateTodoItemHandler}>
        <FontAwesomeIcon icon={Icons.faCheck} />
      </button>
      <button className="trash-btn" onClick={removeTodoItemHandler}>
        <FontAwesomeIcon icon={Icons.faTrash} />
      </button>
    </div>
  );
};

export default TodoItem;
