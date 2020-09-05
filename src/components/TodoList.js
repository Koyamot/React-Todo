import React from "react";
import Todo from "./Todo"

const TodoList = (props) => {
    console.log("Todo list:", props)

    return(
        <div className="todo-list">
            {props.list.map((task) => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
        </div>
    )
}

export default TodoList;