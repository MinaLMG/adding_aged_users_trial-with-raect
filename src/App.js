import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import EmptyModal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([
    { name: "ahmed", age: 5, id: 1 },
    { name: "ali", age: 15, id: 2 },
  ]);
  const [emptyInput, setEmptyInput] = useState(false);
  const [negativeInput, setNegativeInput] = useState(false);
  function addUser(user) {
    setUsers((prevUsers) => [...prevUsers, user]);
  }
  function showEmptyModal() {
    setEmptyInput(true);
  }

  function hideEmptyModal() {
    setEmptyInput(false);
  }
  function showNegativeModal() {
    setNegativeInput(true);
  }

  function hideNegativeModal() {
    setNegativeInput(false);
  }
  return (
    <div className="App">
      {emptyInput && (
        <EmptyModal onHide={hideEmptyModal} type="empty"></EmptyModal>
      )}
      {negativeInput && (
        <EmptyModal onHide={hideNegativeModal} type="negative"></EmptyModal>
      )}
      <UserForm
        onAddUser={addUser}
        onEmptyInput={showEmptyModal}
        onNegativeInput={showNegativeModal}
      ></UserForm>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
