import React from "react";
import { TodoIcon } from './TodoIcon'
function DeleteIcon(props) {
    return <TodoIcon
        type="delete"
        color="red"
        onClick = {props.onDelete}
    />
}
export { DeleteIcon }