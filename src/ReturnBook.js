import { useState } from "react";

function ReturnBook() {
  const [issueId, setIssueId] = useState("");

  const handleReturn = () => {
    console.log("Return clicked", issueId);

    fetch(`https://library-management-system-production-4ccd.up.railway.app/issues/return/${issueId}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Return Book</h2>

      <input
        placeholder="Issue ID"
        value={issueId}
        onChange={(e) => setIssueId(e.target.value)}
      />
      <br />

      <button onClick={handleReturn}>Return Book</button>
    </div>
  );
}

export default ReturnBook;
