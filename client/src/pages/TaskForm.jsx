import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {

  const {createTask, getTask, updateTask} = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        console.log("Editando tarea con id", params.id);
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description
        });
      }
    }
    loadTask();  
  }, [])

  return (
    <div>

      <h1>
        {params.id ? "Editar tarea" : "Nueva tarea"}
      </h1>

      <Formik initialValues={task} enableReinitialize={true} onSubmit={
        async (values, actions) => {
          console.log(values);
          
          if (params.id) {
            console.log("Editando tarea con id", params.id);
            updateTask(params.id, values);
            navigate("/");
          } else {
            console.log("Creando nueva tarea");
            createTask(values);
          }
          setTask({
            title: "",
            description: ""
          });
          actions.resetForm();
        }
      
      }>
        {({handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" placeholder="Título" onChange={handleChange} value={values.title}/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="3" placeholder="Escribe algo..." onChange={handleChange} value={values.description}/>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Guardando..." : "Guardar tarea"}
          </button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm;