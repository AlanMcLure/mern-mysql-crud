import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";

function TaskForm() {

  const {createTask} = useTasks();
  const params = useParams();
  console.log(params);

  return (
    <div>

      <h1>
        {params.id ? "Editar tarea" : "Nueva tarea"}
      </h1>

      <Formik initialValues={
        {
          title: "",
          description: ""
        }
      } onSubmit={
        async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetform();
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