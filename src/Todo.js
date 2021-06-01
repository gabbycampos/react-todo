import React from 'react';

const Todo = ({ id, name, handleRemove }) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Todo" id={id}>
            <li>{name}</li>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;