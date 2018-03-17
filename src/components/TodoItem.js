import React from 'react'

const TodoItem = (props) => (
        <div className={!props.status ? 'widget-body' : 'widget-body-done' } >
            <div className="widget-body__data">
                <input type="checkbox"
                    onChange={
                        (e) => { props.handleStatusChange({ task: props.TodoItem }) }
                    }
                    defaultChecked={props.status}
                />
                 <p className="widget-body__text">{props.TodoItem}</p>
            </div>
            <button className="button" onClick={(e) => { props.handleDeleteTodo({ task: props.TodoItem })}}>Remove</button>
        </div>
)
export default TodoItem