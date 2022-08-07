import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, updateSort] = useState("ASC");
  useEffect(() => {
    getTodos();
  }, [sortBy]);
  const getTodos = (props = "ASC") => {
    // console.log(props);
    axios
      .get(
        `https://obscure-taiga-80364.herokuapp.com/data?_sort=title&_order=${props}`
      )
      .then((res) => setTodos(res.data))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };
  const AddTodos = (todo) => {
    setLoading(true);
    axios
      .post(`https://obscure-taiga-80364.herokuapp.com/data`, todo)
      .then((res) => getTodos())
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };

  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false,
    };
    AddTodos(item);

    // console.log(todo);
  };
  const handleToggle = (id, status) => {
    axios
      .patch(`https://obscure-taiga-80364.herokuapp.com/data/${id}`, {
        status: !status,
      })
      .then((res) => getTodos())
      .catch((err) => alert(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://obscure-taiga-80364.herokuapp.com/data/${id}`)
      .then((res) => getTodos())
      .catch((err) => console.log(err));
  };
  const handleSort = () => {
    updateSort(sortBy === "ASC" ? "DESC" : "ASC");
    getTodos(sortBy);
  };
  // console.log(todo);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <div>
        <button onClick={handleSort}>
          {sortBy === "ASC" ? "SHOW DESCENDING" : "SHOW ASCENDING"}
        </button>
      </div>
      <h1>Pending</h1>
      {todo
        .filter((el) => !el.status)
        .map((el) => (
          <TodoList
            title={el.title}
            status={el.status}
            key={el.id}
            id={el.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      <h1>Completed</h1>

      {todo
        .filter((el) => el.status)
        .map((el) => (
          <TodoList
            title={el.title}
            status={el.status}
            key={el.id}
            id={el.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}
