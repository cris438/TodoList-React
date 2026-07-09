import React from "react";
import { TodoIcon } from './TodoIcon'
function CompletedIcon(props) {
    return <TodoIcon
        type="completed"
        color="Green"
        onClick={props.onComplete}
    />
}
export { CompletedIcon }