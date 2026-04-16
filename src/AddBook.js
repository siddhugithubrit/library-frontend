import { useState } from "react";

function AddBook() {
  console.log("AddBook component loaded"); 
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    console.log("Button clicked");

    fetch("https://library-management-system-production-4ccd.up.railway.app/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book added successfully");
      })
      .catch((err) => console.error(err));
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