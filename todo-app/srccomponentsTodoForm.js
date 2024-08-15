import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return; // Validation simple
        addTodo({ title, description, completed: false });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Titre de la tâche" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Description de la tâche" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit">Ajouter Tâche</button>
        </form>
    );
}

export default TodoForm;
