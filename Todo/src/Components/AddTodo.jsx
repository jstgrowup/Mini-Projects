import { useState } from "react";

export default function AddTodo({handleAdd}) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit=()=>{
       handleAdd(text)
  }
  return (
    <>
      <div>
        <input onChange={handleChange}  type="text" placeholder="Add todo" />
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </>
  );
}
