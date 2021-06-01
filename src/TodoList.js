import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((todos) => [...todos, todo]);
    };
    const remove = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const todoComponents = todos.map((todo) => (
        <Todo 
            key={todo.id}
            id={todo.id}
            name={todo.name}
            handleRemove={remove}
        />
    ));
    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
            {todoComponents}
            </ul>
        </div>
    );
}

export default TodoList;