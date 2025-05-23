import React, { useState } from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(book.id, title);
  };
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}
