import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEditing = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200
`}
        alt="books"
      />
      <div> {content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditing}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
