import React from "react";
import "./todoList.css";
import TodoItem from "../todoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todos = useSelector((state) => state);
  return (
    <div className="my-4">
      <h3>List Of Todos</h3>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
