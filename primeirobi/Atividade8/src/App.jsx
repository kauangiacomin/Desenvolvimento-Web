import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const value = text.trim();
    if (!value) return;
    const newTask = { id: Date.now(), text: value };
    setTasks(prev => [...prev, newTask]);
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <main className="container">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTask} />
      <TodoList items={tasks} onRemove={removeTask} />
    </main>
  );
}
