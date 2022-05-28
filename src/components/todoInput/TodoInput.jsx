import React, { useState } from "react";
import { addTodo } from "../../Redux/actions";
import "./todoInput.css";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  let [name, setName] = useState("");
  let dispatch = useDispatch();
  return (
    <div>
      <h4>Add A Todo</h4>
      <div className="todo_input">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-primary m-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
