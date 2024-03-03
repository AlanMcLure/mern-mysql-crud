/* eslint-disable react/prop-types */
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  
  const {deleteTask} = useTasks();
  const navigate = useNavigate();
  
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "Sí" : "No"}</span>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}

export default TaskCard;