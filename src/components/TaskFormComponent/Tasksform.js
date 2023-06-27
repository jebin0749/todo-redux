import React from 'react'
import Tasks from '../TasksComponent/Tasks';
import Tasksformcss from './Tasksform.module.scss';

const Tasksform =(props)=>{
    const remaining=props.todo.length;
    const getTitle=(remaining)=>{
    if(remaining===0)
    {
        return <span>{remaining}</span>
    }
    else{
        return <span>{remaining}</span>
    } 
    };

    return(
        <div  className={Tasksformcss.container}>
            <h2 className={Tasksformcss.todoheading}>Todo's:- <span>{getTitle(remaining)}</span></h2>
            <div className={Tasksformcss.maps}>
            {props.todo.map((todo)=>{
                return <Tasks todo={todo} deleteTasks={props.deleteTasks}/>
            })}
            </div>
              
        </div>
    )
}

export default Tasksform;