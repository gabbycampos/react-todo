import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTodo({ name, id: uuid() });
        setName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameForm">Todo</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="nameForm"
                    value={name}
                    id="nameForm"
                />
            <button>Add Todo</button>
            </form>
        </div>
    );
}

export default NewTodoForm;