import React from "react";

const Todo = ({ text, deleteTodo, completeTodo, completed}) => {
    
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}> {text}</li>
      <button onClick={completeTodo} className="complete-btn"> <i className="fas fa-check"></i> </button>
      <button onClick={deleteTodo} className="trash-btn"> <i className="fas fa-trash"></i> </button>
    </div>
  );
};

export default Todo;
