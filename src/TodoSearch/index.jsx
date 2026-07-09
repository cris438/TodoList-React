// TodoSearch.jsx

import './TodoSearch.css';

function TodoSearch({searchValue, setsearchValue}) {
  return (
    <input className="todo-search" placeholder="Cortar cebolla" value={searchValue} onChange={(event) => {
      setsearchValue(event.target.value)
      
    }} />
  )
}

export { TodoSearch }