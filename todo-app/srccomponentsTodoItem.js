import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => toggleComplete(index)}>
                {todo.completed ? 'Marquer comme incomplet' : 'Marquer comme complet'}
            </button>
            <button onClick={() => deleteTodo(index)}>Supprimer</button>
        </li>
    );
}

export default TodoItem;
