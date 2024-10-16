import React, { useState } from 'react'
import ToDoItem from './todoitem';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Sulod sa UGE',
            completed: true
        },
        {
            id: 2,
            text: 'Mo adtog Canteen',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    

    function addTask(text) {
        /* if the input field is white space or empty the function won't perform*/
        if (!text.trim()) {
            return;
        }
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([newTask,...tasks]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleComplete(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return{...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

  return (
    <div className='todo-container'>
        <div className='todo-list'>
        <input
        className='input-field' 
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button onClick={() => addTask(text)}>Add</button>
        {tasks.map(task => (
            <ToDoItem key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleComplete}
            />
        ))}
        </div>
    </div>
  )
}

export default ToDoList