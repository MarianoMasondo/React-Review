import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";
//Importammos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {  
  
  const defaultTask1 = new Task("Example1", "Description1", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2", "Description2", true, LEVELS.URGENT);
  const defaultTask3 = new Task("Example3", "Description3", true, LEVELS.BLOCKING);
    
    // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componmente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false)
    return () => {
      console.log('TaskList component is going to unmount')
    }
  }, [tasks])

  function completeTask(task){
    console.log('Complete this task:', task)
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    //We update the estate of the component with the new list of task and it will ipdate the iteration of the task in order to show the tsk updated.
    setTasks(tempTasks);
  }

  function deleteTask(task){
    console.log('Delete this task:', task)
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

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
            {tasks.map((task, index) => {
              return (
                <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>
              )
            })}
            
          </tbody>
        </table>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
