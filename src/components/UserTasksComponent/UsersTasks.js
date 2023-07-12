import React, { useEffect } from "react";
import UserTaskscss from "./UsersTasks.module.scss";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { resetTaskState } from "../../state/actions/tasks";

const UserTasks = () => {
  const tasks = useSelector((state) => state.addTodo, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    // Clean up and reset task state when component unmounts
    return () => {
      dispatch(resetTaskState());
    };
  }, []);

  const getTextStyles = (isDone) => {
    return isDone
      ? { textDecoration: "line-through", textDecorationThickness: "4px" }
      : {};
  };

  return (
    <div className={UserTaskscss?.userTasks}>
      <h3>TASKS</h3>

      {tasks?.todo?.map((task) => (
        <div key={task.id} className={UserTaskscss?.title}>
          <span>{task.id}) </span>
          <span style={getTextStyles(task.isDone)}>{task.title}</span>
        </div>
      ))}
    </div>
  );
};

export default UserTasks;
