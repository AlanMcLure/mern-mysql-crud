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

  return (
    <div>
      <h1>Tasks</h1>

      <ul>
        {tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </div>
  )
}

export default TasksPage;