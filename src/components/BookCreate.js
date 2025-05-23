import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}
