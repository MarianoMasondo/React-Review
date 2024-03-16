import React from "react";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };
  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/*TODO: Aplicar un map/for para renderizar una lista*/}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
