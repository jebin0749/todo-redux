import "./App.scss";
import { addTodo } from "../src/state/actions/addtodo";
import NavBar from "./components/NavbarComponent/Navbar";
import Profile from "./components/UserProfileComponent/UserProfile.js";
import Company from "./components/CompanyComponent/Company.js";
import Tasksform from "./components/TaskFormComponent/Tasksform";
import ProfilePic from "./images/user-solid.svg";
import Enter from "./components/EnterComponent/Enter";
import HelloCard from "./components/HelloCardComponent/HelloCard";
import UserTasks from "./components/UserTasksComponent/UsersTasks";
import React from "react";

function App() {
  return (
    <div className="page">
      <div className="header">
        <Company name="FOCUSFLOW" />
        <NavBar />
        <Profile name="jebin" username="jebin_vasanth" pic={ProfilePic} />
      </div>

      <div className="content">
        <UserTasks />
        <Enter addTodo={addTodo} />
        <HelloCard />
      </div>
      <Tasksform />
    </div>
  );
}

export default App;
