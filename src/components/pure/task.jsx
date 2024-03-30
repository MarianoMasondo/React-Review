import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";


//Importamos la hoja de estilo de task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Created Task')
    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
      <span className="align-middle">{task.description}</span>
      </td>
      <td>
      {/* TODO: Sustituir por un badge */}
      <span className="align-middle">{task.level}</span>
      </td>
      <td>
        {task.completed ? (
          <i className="bi-toggle-on" style={{ color: "green" }}></i>
        ) : (
          <i className="bi-toggle-off" style={{ color: "grey" }}></i>
        )}
        <span className="align-middle">
          {task.completed ? "Completed" : "Pending"}
        </span>
      </td>
    </tr>

    // <div>
    //   <h2 className="task-name">Nombre: {task.name}</h2>
    //   <h3>Descripción: {task.description}</h3>
    //   <h4>Level: {task.level}</h4>
    //   <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
