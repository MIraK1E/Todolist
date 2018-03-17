import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => (
    <div className="widget">
        <div className="widget-header">
            <h3 className="widget-header__title">Task</h3>
            <button onClick={props.handleDeleteAllTodo} className="button button-widget__header">Remove All</button>
        </div>
        {props.Todolist.length === 0 && <div className="widget__message"> You have on task </div>}
        {
            props.Todolist.map(({ task, status }) => (
                <TodoItem 
                    key={task}  
                    TodoItem={task} 
                    status={status}
                    handleDeleteTodo={props.handleDeleteTodo}
                    handleStatusChange={props.handleStatusChange}
                />
            ))
    }
    </div>
)

export default TodoList
