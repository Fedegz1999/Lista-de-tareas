import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4()

function TodoWrapper () {

const [todos, setTodos] = useState([])

const addTodo = (e) => {
    setTodos([...todos, {id: uuidv4(), task: e, completed: false, isEditing: false }])
}


const taskComplete = (id) => {
    setTodos(todos.map(item => item.id === id ? 
        {...item, completed: !item.completed} : item ))
}

const taskDelete = (id) => {
setTodos(todos.filter(item => item.id !== id) )
}

const taskEdit = (id) => {
setTodos(todos.map(item => item.id === id ? 
 {...item, isEditing: !item.isEditing} : item))
}

const editTodo = (task, id) => {
setTodos(todos.map(item => item.id === id ? 
    {...item, task, isEditing: !item.isEditing} : item))
}

    return (
        <div className="TodoWrapper">
            <h1>Lista de Tareas</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((item,index) => (
            item.isEditing ? (
                <EditTodoForm editTodo={editTodo} task={item}/> 
            ) : (
            <Todo 
            task={item} 
            key={index} 
            taskComplete={taskComplete} 
            taskDelete={taskDelete} 
            taskEdit={taskEdit}/>
        )))}
        
        </div>
    )
}

export default TodoWrapper;