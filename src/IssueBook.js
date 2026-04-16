import { useState } from "react";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");

  const issueBook = () => {
    fetch(`https://library-management-system-production-4ccd.up.railway.app/issues/${bookId}/${memberId}`, {
  method: "POST",
})
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div>
      <h2>Issue Book</h2>

      <input
        placeholder="Book ID"
        onChange={(e) => setBookId(e.target.value)}
      />
      <br />

      <input
        placeholder="Member ID"
        onChange={(e) => setMemberId(e.target.value)}
      />
      <br />

      <button onClick={issueBook}>Issue Book</button>
    </div>
  );
}

export default IssueBook;