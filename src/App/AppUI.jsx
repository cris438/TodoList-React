import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { FormModal } from '../FormModal'

const AppUI = () => {
    const {
        loading,
        error,
        serchedTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && serchedTodo.length == 0) && <EmptyTodos />}

                {/* cuando trabajamos con arreglos debemos darle una llave unica (key) */}
                {serchedTodo.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList >
            <CreateTodoButton/>

            {openModal && (
                <Modal>
                    <FormModal/>
                </Modal>
            )}


        </>
    );
}

export { AppUI };