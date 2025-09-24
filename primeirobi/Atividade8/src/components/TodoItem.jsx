export default function TodoItem({ id, text, onRemove }) {
  return (
    <li className="task">
      <span className="task-text">{text}</span>
      <button
        type="button"
        className="remove"
        onClick={() => onRemove(id)}
        aria-label={`Remover ${text}`}
        title="Remover"
      >
        Remover
      </button>
    </li>
  );
}
