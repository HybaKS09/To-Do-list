import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (name) => {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    })
  }

  return (
    <div>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task}/>
      ))}
    </div>
  );
}

export default App;
