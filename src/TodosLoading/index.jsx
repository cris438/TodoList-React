import React from "react";
import './TodosLoading.css'
const TodosLoading = () => {
    return (
        <li className="todo-item skeleton">
            <span className="skeleton-icon"></span>
            <p className="skeleton-text"></p>
            <span className="skeleton-icon"></span>
        </li>

        // <div className="LoadingTodo-container">
        //     <span className="LoadingTodo-completeIcon">
        //     </span>
        //     <p className="LoadingTodo-text"></p>
        //     <span className="LoadingTodo-deleteIcon"></span>
        // </div>
    );
}

export { TodosLoading };