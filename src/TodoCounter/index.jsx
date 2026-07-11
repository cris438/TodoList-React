// TodoCounter.jsx
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos, } = React.useContext(TodoContext)

  let mensaje = `Haz completado ${completedTodos} de ${totalTodos} TODOs`
  if (totalTodos == completedTodos) {
    mensaje = `Felicidades haz completado ${completedTodos} tareas de ${totalTodos} tareas`
  }
  return (
    <h1 className="todo-counter">
      {mensaje}
    </h1>
  )
}

export { TodoCounter }