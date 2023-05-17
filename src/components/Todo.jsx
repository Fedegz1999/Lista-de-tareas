import React from "react";
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai';
import { Button } from "react-bootstrap";

export const Todo = ({task, taskComplete, taskDelete, taskEdit}) => {
    return (
        <div className="Todo">
<p onClick={() => taskComplete(task.id)} className={`task ${task.completed ? 'completed' : ""}`}>{task.task}</p>
<div>
<Button variant="outlined" onClick={() => taskDelete(task.id)} ><AiFillDelete size={22}/> </Button>
<Button variant="outlined" onClick={() => taskEdit(task.id)}><FaEdit size={22}/></Button>
</div>
        </div>
    )
}

