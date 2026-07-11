// CreateTodoButton.jsx
import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {setOpenModal} = React.useContext(TodoContext)
  return (
    <button className="create-todo-btn" onClick={(event) => {
      setOpenModal(true)
    }}>+</button>
  )
}

export { CreateTodoButton }