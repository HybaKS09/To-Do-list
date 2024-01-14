import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (name) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name, done: false },
    ]);
  };

  const checkTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeItem = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renameTask = (taskId, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };


  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;
  const getMessage = () => {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏🏼";
    }
    if (percentage === 100) {
      return "Nice job for today! ✅";
    }
    if (percentage >= 1 && percentage < 100){
      return "keep it going 💪🏼";
    }
    return "Welcome to your AGENDA ! You can ad your tasks for today 📒";
  };

  return (
    <div className="main">
      <h1>
        {numberComplete}/{numberTotal} complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        //no comprendo
        <Task
          key={task.id}
          {...task}
          checkTask={checkTask}
          onTrash={() => removeItem(task.id)}
          onRename={newName => renameTask(task.id, newName) }
        />
      ))}
    </div>
  );
}

export default App;
