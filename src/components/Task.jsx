import Checkbox from "./Checkbox";

const Task = ({ id, name, done, checkTask }) => {
  return (
    <div className={"task" + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => checkTask(id)} />
      <span>{name}</span>
    </div>
  );
}

export default Task;