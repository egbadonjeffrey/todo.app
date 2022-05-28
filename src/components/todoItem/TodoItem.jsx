import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../Redux/actions";
import { todos } from "../../Redux/states";
import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");
  let dispatch = useDispatch();
  return (
    <div>
      <div className=" todoItem">
        <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              placeholder={todo.name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          ) : (
            <h3>{todo.name}</h3>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
              if (editable) {
                setName("");
              }
              setEditable(!editable);
            }}
            className="btn btn-primary m-2"
          >
            {editable ? "Update" : "Edit"}
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
