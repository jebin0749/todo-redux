import React, { useState, useEffect } from "react";
import Taskscss from "./Tasks.module.scss";
import {
  deleteTask,
  resetTaskState,
  updateTask,
} from "../../state/actions/tasks";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Tasks = ({ task }) => {
  const dispatch = useDispatch();
  const [isStriked, setIsStriked] = useState(task.isDone);
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDesc, setUpdatedDesc] = useState(task.desc);
  const [nowDateTime, setNowDateTime] = useState("");
  const tasks = useSelector((state) => state.addTodo, shallowEqual);
  console.log("task from props", task);

  useEffect(() => {
    const currentDateTime = new Date();
    setNowDateTime(currentDateTime.toString());
  }, []);

  const handleButtonClick = () => {
    dispatch(updateTask(updatedTitle, updatedDesc, !isStriked, task.id));
  };

  useEffect(() => {
    console.log(tasks.updated, "");
    if (tasks.updated) {
      setIsStriked(task.isDone);
    }
    return () => {
      dispatch(resetTaskState());
    };
  }, [tasks]);

  const handleUpdateClick = () => {
    setUpdatingTitle(true);
  };

  const handleTitleInputChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleDescInputChange = (e) => {
    setUpdatedDesc(e.target.value);
  };

  const handleUpdate = () => {
    dispatch(updateTask(updatedTitle, updatedDesc, false, task.id));
    setUpdatingTitle(false);
  };

  const getTextStyles = () => {
    return isStriked
      ? { textDecoration: "line-through", textDecorationThickness: "4px" }
      : {};
  };

  const text = () => {
    return isStriked ? "UNDO" : "DONE";
  };

  return (
    <div className={Taskscss.tasks}>
      <h4>{nowDateTime}</h4>
      {updatingTitle ? (
        <h4>
          <span>Title: </span>
          <input
            type="text"
            value={updatedTitle}
            onChange={handleTitleInputChange}
          />
        </h4>
      ) : (
        <h4 style={getTextStyles()}>
          <span>Title: </span>
          {task.title}
        </h4>
      )}

      {updatingTitle ? (
        <h4>
          <span>Desc: </span>
          <input
            type="text"
            value={updatedDesc}
            onChange={handleDescInputChange}
          />
        </h4>
      ) : (
        <h4 style={getTextStyles()}>
          <span>Desc: </span>
          {task.desc}
        </h4>
      )}
      <br />

      <button type="button" onClick={() => dispatch(deleteTask(task.id))}>
        DELETE
      </button>
      {updatingTitle ? (
        <button
          type="button"
          className={Taskscss.updateButton}
          onClick={handleUpdate}
        >
          SUBMIT
        </button>
      ) : (
        <button
          type="button"
          className={Taskscss.updateButton}
          onClick={handleUpdateClick}
        >
          UPDATE
        </button>
      )}
      <button
        type="button"
        onClick={handleButtonClick}
        className={Taskscss.doneButton}
      >
        {text()}
      </button>
    </div>
  );
};

export default Tasks;
