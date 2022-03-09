import { useState } from "react";
import "./UserForm.css";
function UserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  function onUserNameChangeHAnler(event) {
    setUserName(event.target.value);
  }
  function onUserAgeChangeHAnler(event) {
    setUserAge(event.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    if (userAge == "" || userName.trim() == "") {
      props.onEmptyInput();
      return;
    }
    if (userAge <= 0) {
      props.onNegativeInput();
      return;
    }
    props.onAddUser({ age: userAge, name: userName, id: Math.random() });
    setUserName("");
    setUserAge("");
  }
  return (
    <form className="user-form" onSubmit={onSubmitHandler}>
      <p>user name</p>
      <input
        type="text"
        value={userName}
        onChange={onUserNameChangeHAnler}
      ></input>
      <p>age(years)</p>
      <input
        type="number"
        value={userAge}
        onChange={onUserAgeChangeHAnler}
      ></input>
      <button type="submit"> add user</button>
    </form>
  );
}
export default UserForm;
