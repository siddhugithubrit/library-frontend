import { useState } from "react";

function ReturnBook() {
  const [issueId, setIssueId] = useState("");

  const returnBook = () => {
    fetch(`/issues/return/${issueId}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div>
      <h2>Return Book</h2>

      <input
        placeholder="Issue ID"
        onChange={(e) => setIssueId(e.target.value)}
      />
      <br />

      <button onClick={returnBook}>Return Book</button>
    </div>
  );
}

export default ReturnBook;