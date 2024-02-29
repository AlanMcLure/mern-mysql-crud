/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "Sí" : "No"}</span>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  )
}

export default TaskCard;