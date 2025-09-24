import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(text);
    setText('');
  }

  return (
    <form className="input-row" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
