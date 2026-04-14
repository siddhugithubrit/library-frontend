import "./App.css";
import BookList from "./BookList";
import AddBook from "./AddBook";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";

function App() {
  return (
    <div>
      <h1>Library Management System</h1>

      <AddBook />
      <IssueBook />
      <ReturnBook />
      <BookList />
    </div>
  );
}

export default App;