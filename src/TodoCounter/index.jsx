// TodoCounter.jsx
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let mensaje = `Haz completado ${completed} de ${total} TODOs`
  if (total == completed) {
    mensaje = `Felicidades haz completado ${completed} tareas de ${total} tareas`
  }
  return (
    <h1 className="todo-counter">
        {mensaje}
    </h1>
  )
}

export { TodoCounter }