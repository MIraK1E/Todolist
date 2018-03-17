import React from 'react'

export default class TodoForm extends React.Component {
    state = {
        error: undefined
    }
    handleAddTodo = (e) => {
        e.preventDefault()
        const text = e.target.elements.todo.value.trim()
        const error = this.props.handleAddTodo(text)

        this.setState(() => ({ error }))

        if(!error)
        {
            e.target.elements.todo.value = ''
        }
    }
    render() {
        return (
            <div>
                <p className="add-todo-error">{this.state.error}</p>
                <form onSubmit={this.handleAddTodo} className="add-todo">
                    <input className="add-todo__input" type="text" name="todo"/>
                    <button className="button button-input">Save Task</button>
                </form>
            </div>
        )
    }
}

