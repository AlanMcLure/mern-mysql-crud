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
          <Form
          onSubmit={handleSubmit}
          className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
        >
          <h1 className="text-xl font-bold uppercase text-center">
            {params.id ? "Edit Task" : "New Task"}
          </h1>
          <label className="block">title</label>
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            className="px-2 py-1 rounded-sm w-full"
            onChange={handleChange}
            value={values.title}
          />

          <label className="block">description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a description"
            onChange={handleChange}
            className="px-2 py-1 rounded-sm w-full"
            value={values.description}
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm;