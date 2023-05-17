import React, {useState} from "react";
import { Button } from "react-bootstrap";


export const TodoForm = ({addTodo}) =>  {

const [value, setValue] = useState("")

function handleSubmit (e) {
    e.preventDefault();
    addTodo(value)
    setValue("")
}

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text"
         className="todo-input"
          placeholder="¿Cuál es la tarea de hoy?"
          onChange={(e) => setValue(e.target.value)}
          value={value}/>
        <Button variant="warning" size="md" type="submit" >Agregar</Button>
        </form>
    )
}

