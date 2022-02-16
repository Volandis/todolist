import React, { useState } from "react";
import "./index.css";

const App = () => {

  const [newTask, setNewTask] = useState("");
  const [newTasks, setNewTasks] = useState([]);

  const handleChange = e => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    setNewTasks([
      ...newTasks,
      {
        id: newTasks.length + 1,
        text: newTask,
        completed: false
      }
    ]);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (newTask === "") return;
    addNewTask();
    setNewTask("");
  };

  const removeNewTask = newTaskId => {
    const updatedNewTasks = newTasks.filter(newTask => newTask.id !== newTaskId);
    setNewTasks(updatedNewTasks);
  };

  const toggleNewTask = newTaskId => {
    const updatedNewTasks = newTasks.map(newTask => {
      return newTask.id === newTaskId
        ? { ...newTask, completed: !newTask.completed }
        : newTask;
    });

    setNewTasks(updatedNewTasks);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>To Do List</h1>

        <br />

        <input
          placeholder="New task details"
          id="newTask"
          className="newTask-input"
          onChange={handleChange}
          value={newTask}
        >
        </input>

        <br />

        <button type="submit" className="addTaskButton">Add Task</button>

      </form>

      <br />

      <div>
        <ul className="ulList">
          {newTasks.map(newTask => (
          <div className="list">  
            <li key={newTask.id} className="liList">

              <div
                className={newTask.completed ? "newTask-completed" : undefined}
                onClick={() => toggleNewTask(newTask.id)}
                >
                {newTask.text}
              </div>

            </li>

            <button className="delete-btn" onClick={() => removeNewTask(newTask.id)}>
              delete
            </button>

          </div>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default App;