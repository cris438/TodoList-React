import CompletedIcon from './check.svg?react'
import DeleteIcon from './delete.svg?react'
const iconsTypes = {
    "completed": <CompletedIcon/>,
    "delete":<DeleteIcon/>
}
function TodoIcon({ type, onClick }) {
    return (
        <span
            className={`Icon Icon-svg ${type}`} 
            onClick={onClick}>
            {iconsTypes[type]}
        </span>
    )
}
export { TodoIcon }

//se puede pasar una prop con parentesisi para que sea un funciona anonima, y en iconTypes lo podemos recibir como una funcion flecha, para cambiar el color seria con un fill