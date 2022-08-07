export default function TodoList({
  handleDelete,
  title,
  status,
  id,
  handleToggle,
}) {
  return (
    <>
      <div>
        <b>{title}</b>{" "}
        <button onClick={() => handleToggle(id, status)}>
          {status ? "DONE" : "NOT DONE"}
        </button>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </div>
    </>
  );
}
