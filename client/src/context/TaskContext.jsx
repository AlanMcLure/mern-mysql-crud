/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";

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

  return (
    <TaskContext.Provider value={{ tasks, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};


