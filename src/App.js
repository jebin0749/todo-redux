import './App.scss';
import Profile from './components/UserProfileComponent/UserProfile.js';
import Company from './components/CompanyComponent/Company.js';
import Tasks from './components/TasksComponent/Tasks.js';
import Tasksform from './components/TaskFormComponent/Tasksform';
import ProfilePic from './images/user-solid.svg';
import Enter from './components/EnterComponent/Enter';
import HelloCard from './components/HelloCardComponent/HelloCard';
import Title from './components/TitleComponent/title';
import UserTasks from './components/UserTasksComponent/UsersTasks'
import React,{useState} from 'react';

var sno=0;
function App() {

  const deleteTasks=(todos)=>{
    console.log("Delte called",todos);

    setTodo(todo.filter((e) => e !== todos));
  }

  const [todo,setTodo]=useState([]);

  const addTodo=(title,desc)=>{
    console.log(title,desc);
    sno++;
    const newTodo={
      title:title,
      desc:desc,
      sno:sno,
    }
    console.log(newTodo);
    setTodo([...todo,newTodo]);
  }
  return (
   
    <div style={{display:'flex',}}>
    <div className='left-side-div'>
    <Company
        name="FOCUSFLOW"
      />
      <Profile 
        name="jebin"
        username="jebin_vasanth"
        pic={ProfilePic}
      />
      <UserTasks/>
      </div>
      <div className='right-side-div'>
        <div className='title-hello-card'>
          <div className='todo-form'>
            <Title todo={todo}/>
            <Enter addTodo={addTodo}/>
          </div>
          <HelloCard/>
        </div>
        <Tasksform todo={todo} deleteTasks={deleteTasks}/>
      </div>

     
    </div>
  
  );
}

export default App;
