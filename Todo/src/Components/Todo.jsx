import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get(`https://obscure-taiga-80364.herokuapp.com/data`)
      .then((res) => setTodos(res.data))
      .catch((err) => alert(err));
  };
  const AddTodos = (todo) => {
    axios
      .post(`https://obscure-taiga-80364.herokuapp.com/data`, todo)
      .then((res) => getTodos())
      .catch((err) => alert(err));
  };

  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false,
    };
    AddTodos(item);

    console.log(todo);
  };

  return (
    <>
      <AddTodo handleAdd={handleAdd} />
      {todo.map((el) => {
        <TodoList title={el.title} status={el.status} key={el.id} id={el.id} />;
      })}
    </>
  );
}
