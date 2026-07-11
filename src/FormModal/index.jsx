import React from 'react';
import './formModal.css'
import { TodoContext } from '../TodoContext';

const FormModal = () => {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h1>Nueva Tarea</h1>
                    <textarea
                        value={newTodoValue}
                        onChange={onChange}
                        className='form-input'
                        placeholder="Escribe una nueva tarea"
                    />
                    <div className="modal-actions">
                        <button type='submit' className="modal-save">
                            Guardar
                        </button>
                        <button type="button" className="modal-cancel" onClick={onCancel}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export { FormModal };
