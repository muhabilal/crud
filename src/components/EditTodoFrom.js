import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("");
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                value={value}
                className='todo-input' placeholder='Update Task'
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditTodoForm