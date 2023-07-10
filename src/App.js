import "./App.scss";
import { addTodo } from "../src/state/actions/addtodo";
import NavBar from "./components/NavbarComponent/Navbar";
import Profile from "./components/UserProfileComponent/UserProfile.js";
import Company from "./components/CompanyComponent/Company.js";
import Tasks from "./components/TasksComponent/Tasks.js";
import Tasksform from "./components/TaskFormComponent/Tasksform";
import ProfilePic from "./images/user-solid.svg";
import Enter from "./components/EnterComponent/Enter";
import HelloCard from "./components/HelloCardComponent/HelloCard";
import Title from "./components/TitleComponent/title";
import UserTasks from "./components/UserTasksComponent/UsersTasks";
import { deleteTask } from "./state/actions/tasks";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

function App() {
  // const dispatch = useDispatch();
  // const deleteTasks = (taskId) => {
  //   dispatch(deleteTask(taskId));
  // };

  const [todo, setTodo] = useState([]);


  // const addTodo = (title, desc) => {
    // dispatch(addTodo(title,desc));
    // console.log(title, desc);
    // sno++;
    // const newTodo = {
    //   title: title,
    //   desc: desc,
    //   sno: sno,
    // };
    // console.log(newTodo);
    // setTodo([...todo, newTodo]);
  // };
  return (
    <div className="page">
      <div className="header">
        <Company name="FOCUSFLOW" />

        <NavBar />

        <Profile name="jebin" username="jebin_vasanth" pic={ProfilePic} />
      </div>

      <div className="content">
        <UserTasks todo={todo} />
        {/* <Title todo={todo}/> */}
        <Enter addTodo={addTodo} />
        <HelloCard />
      </div>
      <Tasksform />
    </div>
  );
}

export default App;
