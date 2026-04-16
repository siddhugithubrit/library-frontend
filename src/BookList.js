import { useState, useEffect } from "react";

function BookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch("https://library-management-system-production-4ccd.up.railway.app/books")
    .then((res) => res.json())
    .then((data) => setBooks(data))
    .catch((err) => console.error(err));
}, []);

  const filteredBooks = books.filter((b) =>
  b.title?.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
  <h2>Books List</h2>

  <input
    placeholder="Search by title..."
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.bookId}>
            {book.title} - {book.author} (Qty: {book.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;