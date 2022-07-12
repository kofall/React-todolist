import React from 'react'
import Task from './Task'

export default function ToDoList({ tasks, toggleTask, hidden }) {
  return (
    tasks.length !== 0 ? tasks.map((task) => {
      if (hidden) {
        if(!task.completed)
          return <Task key={task.id} task={task} toggleTask={toggleTask} />
      } else 
        return <Task key={task.id} task={task} toggleTask={toggleTask} />
    }) : 'Nothing to do...'
  )
}
