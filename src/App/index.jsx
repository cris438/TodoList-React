// import React, { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { useLocalStorage } from './useLocalStorage'

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de intro a react.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Cortar Cebollas', completed: true },
//   { text: 'NOSE', completed: true },
//   { text: 'Prueba', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1')



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
      <TodoList>
        {/* cuando trabajamos con arreglos debemos darle una llave unica (key) */}
        {serchedTodo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList >

      <CreateTodoButton />
    </>
  )
}
export default App;
