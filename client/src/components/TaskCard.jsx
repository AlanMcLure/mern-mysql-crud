/* eslint-disable react/prop-types */
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  
  const {deleteTask} = useTasks();
  
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "Sí" : "No"}</span>
      <button>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}

export default TaskCard;