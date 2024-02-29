import { useEffect } from "react";
import { getTasksRequest } from "../api/tasks.api";

function TasksPage() {
  
  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await getTasksRequest();
      console.log(tasks);
    }

    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

    </div>
  )
}

export default TasksPage;