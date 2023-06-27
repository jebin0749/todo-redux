import React,{useState} from 'react';
import Taskscss from './Tasks.module.scss';

const Tasks=({todo,deleteTasks,dateTime})=>{

    const [isStriked,setIsStriked]=useState(false);
    const handleButtonClick=()=>{
        setIsStriked(!isStriked);
    }

    const getTextStyles=()=>{
        return isStriked ? { textDecoration:'line-through',textDecorationThickness: '4px'}:{};
    }
    
    const text=()=>{
        return isStriked? "Undo":"Done";
    }

    return(
    <div className={Taskscss.tasks}>
        {dateTime && <h4>{dateTime.toLocaleString()}</h4>}
        <h4 style={getTextStyles()}><span>Title: </span>{todo.title}</h4><br/>
        <p style={getTextStyles()}><span>Desc: </span>{todo.desc}</p><br/>

        <button type='button' onClick={()=>{deleteTasks(todo)}}>delete</button>
        <button type='button' className={Taskscss.updateButton}>Update</button>
        <button type='button' onClick={handleButtonClick} className={Taskscss.doneButton}>{text()}</button>

    </div>
    )
}

export default Tasks;