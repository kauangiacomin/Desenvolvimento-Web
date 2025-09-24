import TodoItem from './TodoItem.jsx';

export default function TodoList({ items, onRemove }) {
  if (items.length === 0) {
    return <ul className="list"><li className="empty">Sem tarefas — adicione a primeira!</li></ul>;
  }

  return (
    <ul className="list">
      {items.map(task => (
        <TodoItem
          key={task.id}
          id={task.id}
          text={task.text}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
