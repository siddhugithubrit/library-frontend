import { useState } from "react";

function ReturnBook() {
  const [issueId, setIssueId] = useState("");

  const returnBook = () => {
    fetch(`https://library-management-system-production-4ccd.up.railway.app/return/${bookId}/${memberId}`, {
  method: "POST",
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