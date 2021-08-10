import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todos/actions";
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handlerSubmit = ({ target }) => {
    dispatch(addTodo({ title: title, id: new Date().getTime() }));
    setTitle("");
  };

  return (
    <div className="App">
      <div>Add item</div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Add an item"
      />
      <button onClick={handlerSubmit}>Submit</button>

      {todos.length > 0 && todos.map((todo) => <div>{todo.title}</div>)}
    </div>
  );
}

export default App;
