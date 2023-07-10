import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../state/actions/submit";
import { addTodo } from "../../state/actions/addtodo";
import "./Enter.scss";

const Enter = () => {
  const dispatch = useDispatch();
  const { submitted } = useSelector((state) => state);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
    } else {
      dispatch(addTodo(title, desc));
      setTimeout(() => {
        setTitle("");
        setDesc("");
      }, 3000);
    }
  };

  return (
    <div className="container">
      {submitted && <h3 className="h3">Successfully Added!</h3>}

      <h2>Enter Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {!title && <h5 className="warning">Please enter a title</h5>}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          {!desc && <h5 className="warning">Please enter a description</h5>}
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Enter;
