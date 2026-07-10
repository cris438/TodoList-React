import React from "react";
import { useLocalStorage } from './useLocalStorage'
const TodoContext = React.createContext()
function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    //  nuestro estado - actualizador de la variable - como va empezar nuestro estado
    const [searchValue, setsearchValue] = React.useState('')
    const serchedTodo = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))


    const completeTodo = (text) => {
        const newTodo = [...todos]
        let todoIndex = newTodo.findIndex(todo => todo.text == text)
        newTodo[todoIndex].completed = true
        saveTodos(newTodo)
    }
    const deleteTodo = (text) => {
        const newTodo = [...todos]
        let todoIndex = newTodo.findIndex(todo => todo.text == text)
        newTodo[todoIndex].completed = true
        newTodo.splice(todoIndex, 1)
        saveTodos(newTodo)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setsearchValue,
            serchedTodo,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider }