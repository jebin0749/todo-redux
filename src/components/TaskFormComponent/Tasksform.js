import React, { useEffect } from "react";
import Tasks from "../TasksComponent/Tasks";
import Tasksformcss from "./Tasksform.module.scss";
import { useSelector, shallowEqual } from "react-redux";

const Tasksform = () => {
  const tasks = useSelector((state) => state.addTodo.todo, shallowEqual);
  const remaining = tasks.length;

  const getTitle = (remaining) => {
    if (remaining === 0) {
      return <span>{remaining}</span>;
    } else {
      return <span>{remaining}</span>;
    }
  };

  return (
    <div className={Tasksformcss.container}>
      <h2 className={Tasksformcss.todoheading}>
        Todo's:- <span>{getTitle(remaining)}</span>
      </h2>
      <div className={Tasksformcss.maps}>
        {tasks.map((task) => (
          <Tasks task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasksform;
