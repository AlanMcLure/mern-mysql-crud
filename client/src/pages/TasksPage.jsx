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
      <h1 className="text-5xl text-white font-bold text-center mb-2">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  )
}

export default TasksPage;