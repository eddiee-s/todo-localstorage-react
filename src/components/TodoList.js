import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    
    const deleteHandler = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    const completeHandler = (id) => {
      setTodos(todos.map((item) => {
        if (item.id === id ) {
            return {
                ...item, completed: !item.completed
            }
        }
        return item;
      }));
    }
    
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            deleteTodo={deleteHandler.bind("", todo.id)}
            completeTodo={completeHandler.bind("", todo.id)}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
