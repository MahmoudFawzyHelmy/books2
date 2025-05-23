import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);
  const editBookById = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBook);
  };
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h3>Reading List</h3>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
