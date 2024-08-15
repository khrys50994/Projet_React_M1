import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    // Fonction qui permettra de stocker les tâches
    const [todos, setTodos] = useState([]);

    // Fonction pour ajouter une nouvelle tâche
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    // Fonction pour supprimer une tâche
    const deleteTodo = (id) => {
        setTodos(todos.filter((_, index) => index !== id));
    };

    // Fonction pour marquer une tâche comme complète ou incomplète
    const toggleComplete = (id) => {
        setTodos(todos.map((todo, index) => 
            index === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="App">
            <h1>Gestionnaire de Tâches</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        </div>
    );
}

export default App;
