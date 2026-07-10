import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'
const AppUI = () => {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    serchedTodo,
                    completeTodo,
                    deleteTodo,
                }) => (
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
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </>
    );
}

export { AppUI };