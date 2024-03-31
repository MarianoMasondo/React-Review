import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";
//Importammos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {  
  
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
    );
    
    // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componmente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false)
    return () => {
      console.log('TaskList component is going to unmount')
    }
  }, [tasks])

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };
  return (
    <div>
      <div className="col-12">
      <div className="card">
        {/* Card Header (title) */}
        <h5>Your Tasks:</h5>
      </div>
        {/* Card Body(content) */}
        <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height:"400px"}}>
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Priority</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Iterar sobre una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
          </tbody>
        </table>

        </div>
      </div>
      {/*TODO: Aplicar un map/for para renderizar una lista*/}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default TaskListComponent;
