import React, { useState, useEffect } from "react";
import Taskscss from "./Tasks.module.scss";
import { deleteTask } from "../../state/actions/tasks";
import { updateTask } from "../../state/actions/tasks";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Tasks = ({ task }) => {
  const dispatch = useDispatch();
  const [isStriked, setIsStriked] = useState(false);
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDesc, setUpdatedDesc] = useState(task.desc);
  const [nowDateTime, setNowDateTime] = useState("");

  useEffect(() => {
    const currentDateTime = new Date();
    setNowDateTime(currentDateTime.toString());
  }, []);

  const handleButtonClick = () => {
    setIsStriked(!isStriked);
    
  };

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
    task.desc=updatedDesc;
    task.title=updatedTitle;
    // dispatch(updateTask(updatedTitle,updatedDesc));
    setUpdatingTitle(false);
  };

  const getTextStyles = () => {
    return isStriked
      ? { textDecoration: "line-through", textDecorationThickness: "4px" }
      : {};
  };

  const text = () => {
    return isStriked ? "Undo" : "Done";
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
        delete
      </button>
      {updatingTitle ? (
        <button
          type="button"
          className={Taskscss.updateButton}
          onClick={handleUpdate}
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          className={Taskscss.updateButton}
          onClick={handleUpdateClick}
        >
          Update
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
