import React, { useState } from 'react';
import UserTaskscss from './UsersTasks.module.scss';

const UserTasks = (props) => {
    const [sno,setSno]=useState(0);
    const [isStriked, setIsStriked] = useState(false);

    const handleButtonClick = () => {
      setIsStriked(!isStriked);
    };

    const getTextStyles = () => {
      return isStriked ? { textDecoration: 'line-through', textDecorationThickness: '4px' } : {};
    };

    const text = () => {
      return isStriked ? 'Undo' : 'Done';
    };

  return (
    <div className={UserTaskscss.userTasks}>
        <h3>TASKS</h3>
      {props.todo.map((todo) => (
        <div key={todo.sno} className={UserTaskscss.title}><span>{todo.sno}) </span><span style={getTextStyles()}>{todo.title}</span><a onClick={handleButtonClick} className={UserTaskscss.done} href="#">{text()}</a></div>
      ))}
    </div>
  );
};

export default UserTasks;
