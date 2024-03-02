/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTasksRequest } from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
}

export const TaskContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const tasks = await getTasksRequest();
    setTasks(tasks.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter(task => task.id !== id));
      alert("Task deleted successfully");
      console.log("Deleting task with id: ", id, response);
    } catch (error) {
      console.error(error);
    }
  }

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};


