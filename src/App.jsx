import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  },[]);

  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, done: false }])
  }

  //no comprendo 
  const updateTaskDone = (taskId, newDone) => {
    setTasks((prev) => {
      const taskIndex = prev.findIndex((task) => task.id === taskId);

      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };

  //const numberC

  return (
    <div className="main">
      <h1>{}/10 complete</h1>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        //no comprendo
        <Task
          key={task.id}
          {...task}
          onToggle={(done) => updateTaskDone(task.id, done)}
        />
      ))}
    </div>
  );
}

export default App;
