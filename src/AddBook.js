import { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book added successfully");
      });
  };

  return (
    <div>
      <h2>Add Book</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <br />

      <input name="author" placeholder="Author" onChange={handleChange} />
      <br />

      <input name="category" placeholder="Category" onChange={handleChange} />
      <br />

      <input name="quantity" placeholder="Quantity" onChange={handleChange} />
      <br />

      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default AddBook;