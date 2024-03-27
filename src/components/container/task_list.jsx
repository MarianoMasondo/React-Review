import React, { useEffect, useState } from "react";
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
    
    // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);

  // Control del ciclo de vida del componmente

  useEffect(() => {
    console.log('Task State has been modified');
    return () => {
      console.log('TaskList component is going to unmount')
    }
  }, [tasks])

  const changeCompleted = (id) => {
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
