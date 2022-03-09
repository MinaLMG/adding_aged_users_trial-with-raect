import UserItem from "./UserItem";
import "./UsersList.css";
function UsersList(props) {
  return (
    <ul className="users-list">
      {props.users.map((user) => (
        <UserItem name={user.name} age={user.age} key={user.id}></UserItem>
      ))}
    </ul>
  );
}
export default UsersList;
