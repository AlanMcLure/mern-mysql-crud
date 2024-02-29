import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await getTasksRequest();
      setTasks(tasks.data);
    }

    loadTasks();
  }, []);

  function renderMain() {
    
    if (tasks.length === 0) return <p>No tasks found</p>;
    
    return tasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));
  }

  return (
    <div>
      <h1>Tasks</h1>

        {renderMain()}
    </div>
  )
}

export default TasksPage;