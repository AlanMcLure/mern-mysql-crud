/* eslint-disable react/prop-types */
import { deleteTaskRequest } from "../api/tasks.api";

function TaskCard({ task }) {
  
  const handleDelete = async (id) => {
    try {
      console.log("Deleting task with id: ", id);
      await deleteTaskRequest(id);
      alert("Task deleted successfully");
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "Sí" : "No"}</span>
      <button>Editar</button>
      <button onClick={() => handleDelete(task.id)}>Eliminar</button>
    </div>
  )
}

export default TaskCard;