import React, { useState, useRef } from "react";
import ToDoList from "./ToDoList";

function App() {

  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef()
  const [idCounter, setCounter] = useState(1)
  const [hidden, setHidden] = useState(false)

  function handleOnAddListener() {
    const name = taskNameRef.current.value
    if (name === '') return
    setTasks(prevTasks => {
      return [...tasks, { id: idCounter, name: name, completed: false }]
    })
    incrementIdCounter()
    taskNameRef.current.value = null
    taskNameRef.current.focus()
  }

  function toggleTask(id) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.completed = !task.completed
    setTasks(newTasks)
  }

  function toggleHidden() {
    setHidden(prevHidden => !prevHidden)
  }

  function incrementIdCounter() {
    setCounter(prevValue => prevValue + 1)
  }

  return (
    
    <div class="container">
      <h1>Welcome to my To Do list!</h1>
      <div class="content">
        <div class="hide">
          <input type="checkbox" onChange={toggleHidden}/>
          hide completed
        </div>
        <div class="tasks">
          <ToDoList tasks={tasks} toggleTask={toggleTask} hidden={hidden} />
        </div>
        <div class="add">
          <input ref={taskNameRef} type="text" />
          <button onClick={handleOnAddListener}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
