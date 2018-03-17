import React from 'react'
import RaactDOM from 'react-dom'
import Header from './Header'
import TodoForm from './Todoform'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

export default class TodoDashboard extends React.Component {
    state = {
        TodoList: []
    }
    componentWillMount = () => {
        try {
            const json = localStorage.getItem('TodoList')
            const TodoList = JSON.parse(json)

            if (TodoList) {
                this.setState(() => ({TodoList}))
            }
        }
        catch (e) {

        }
    }
    handleAddTodo = (newItem) => {
        if (!newItem) {
           return 'Please enter valid value!'
        }
        else if (this.state.TodoList.findIndex((TodoList) => TodoList.task === newItem) > -1) {
            return 'This task already exists'
        }
        else 
        {
            const newTodoItem = {
                task: newItem,
                status: false
            }
            this.setState((prevState) => (
                { TodoList: prevState.TodoList.concat(newTodoItem) }), () => {
                    const json = JSON.stringify(this.state.TodoList)
                    localStorage.setItem('TodoList', json)
                })
        }
    }
    handleDeleteAllTodo = () => {
        this.setState(() => ({ TodoList: [] }),() => {
            const json = JSON.stringify(this.state.TodoList)
            localStorage.setItem('TodoList', json)
        })
    }
    handleDeleteTodo = ({ task }) => {
        this.setState((preveState) => ({
            TodoList: preveState.TodoList.filter((todo) => todo.task !== task)
        }),() => {
            const json = JSON.stringify(this.state.TodoList)
            localStorage.setItem('TodoList', json)
        })

    }
    handleStatusChange = ({ task }) => {
        const stateArray = this.state.TodoList
        const position = stateArray.findIndex((TodoList) => TodoList.task === task)
        stateArray[position].status = !stateArray[position].status
        this.setState(() => ({ 
            TodoList: stateArray 
        }),() => {
            const json = JSON.stringify(this.state.TodoList)
            localStorage.setItem('TodoList', json)
        })
    }
    render() {
        return (
            <div>
                <Header title="TODOLIST" subtitle="Let's manage your task here!"/>
                <div className="container">
                    <TodoForm handleAddTodo={this.handleAddTodo} />
                    <TodoList
                        Todolist={this.state.TodoList}
                        handleDeleteAllTodo={this.handleDeleteAllTodo}
                        handleDeleteTodo={this.handleDeleteTodo}
                        handleStatusChange={this.handleStatusChange}
                    />
                </div>
            </div>
        )
    }
}