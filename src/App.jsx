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
    const tasks_ = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(tasks_);
  }, []);

  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, done: false }])
  }

  //no comprendo 
  const checkTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done }
      }
      return task
    })
    setTasks(updatedTasks)
  };


  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  return (
    <div className="main">
      <h1>
        {numberComplete}/{numberTotal} complete
      </h1>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        //no comprendo
        <Task
          key={task.id}
          {...task}
          checkTask={checkTask}
        />
      ))}
    </div>
  );
}

export default App;
