import React from 'react'

export default function Task({ task, toggleTask }) {
    function handleTaskClicked() {
        toggleTask(task.id)
    }
  
    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={handleTaskClicked} />
            <label>{task.name}</label>
        </div>
    )
}