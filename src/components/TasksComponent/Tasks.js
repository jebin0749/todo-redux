import React, { useState, useEffect } from 'react';
import Taskscss from './Tasks.module.scss';

const Tasks = ({ todo, deleteTasks }) => {
  const [isStriked, setIsStriked] = useState(false);
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDesc, setUpdatedDesc] = useState(todo.desc);
  const [nowDateTime, setNowDateTime] = useState('');


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
    todo.desc = updatedDesc;
    todo.title = updatedTitle;
    setUpdatingTitle(false);
  };

  const getTextStyles = () => {
    return isStriked ? { textDecoration: 'line-through', textDecorationThickness: '4px' } : {};
  };

  const text = () => {
    return isStriked ? 'Undo' : 'Done';
  };

  return (
    <div className={Taskscss.tasks}>
      <h4>{nowDateTime}</h4>
      {updatingTitle ? (
        <h3>
          <span>Title: </span>
          <input type="text" value={updatedTitle} onChange={handleTitleInputChange} />
        </h3>
      ) : (
        <h4 style={getTextStyles()}>
          <span>Title: </span>
          {todo.title}
        </h4>
      )}
      
      {updatingTitle ? (
        <h3>
          <span>Desc: </span>
          <input type="text" value={updatedDesc} onChange={handleDescInputChange} />
        </h3>
      ) : (
        <h4 style={getTextStyles()}>
          <span>Desc: </span>
          {todo.desc}
        </h4>
      )}
      <br />

      <button type="button" onClick={() => deleteTasks(todo)}>
        delete
      </button>
      {updatingTitle ? (
        <button type="button" className={Taskscss.updateButton} onClick={handleUpdate}>
          Submit
        </button>
      ) : (
        <button type="button" className={Taskscss.updateButton} onClick={handleUpdateClick}>
          Update
        </button>
      )}
      <button type="button" onClick={handleButtonClick} className={Taskscss.doneButton}>
        {text()}
      </button>
    </div>
  );
};

export default Tasks;
