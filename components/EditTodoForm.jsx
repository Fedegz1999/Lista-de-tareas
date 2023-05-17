import React, {useState} from "react";
import { Button } from "react-bootstrap";

function EditTodoForm ({task, editTodo}) {
    const [value, setValue] = useState(task.task)


    function handleSubmit (e) {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("")
}

    return (

        <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text"
         className="todo-input"
          placeholder="Editar tarea"
          onChange={(e) => setValue(e.target.value)}
          value={value}/>
        <Button variant="warning" size="md" type="submit" >Confirmar cambios</Button>
        </form>

    )
}

export default EditTodoForm;