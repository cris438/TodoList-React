// TodoItem.jsx
import './TodoItem.css';
import {CompletedIcon} from './CompletedIcon'
import {DeleteIcon} from './DeleteIcon'


function TodoItem(props) {
  return (
    <li className={`todo-item ${props.completed ? 'completed' : ''}`}>
      <CompletedIcon onComplete={props.onComplete}/>
      <p>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete}/>
    </li>
  )
}

export {TodoItem}