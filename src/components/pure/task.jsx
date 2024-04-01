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
        {task.completed ? 
        ( <i className="bi-toggle-on" style={{ color: "green" }}></i>
        ) : (
          <i className="bi-toggle-off" style={{ color: "grey" }}></i>
        )}
        <i className="bi-trash" style={{ color: "tomato"}}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
