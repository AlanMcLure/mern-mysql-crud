import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const {tasks, loadTasks } = useTasks();

  useEffect(() => {
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