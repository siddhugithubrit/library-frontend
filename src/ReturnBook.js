import { useState } from "react";

function ReturnBook() {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");

  const handleReturn = () => {
    fetch(`https://library-management-system-production-4ccd.up.railway.app/return/${bookId}/${memberId}`, {
      method: "POST",
    })
      .then(() => alert("Book returned successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Return Book</h2>

      <input
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <br />

      <input
        placeholder="Member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      />
      <br />

      <button onClick={handleReturn}>Return Book</button>
    </div>
  );
}

export default ReturnBook;