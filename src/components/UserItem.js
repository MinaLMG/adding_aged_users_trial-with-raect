import "./UserItem.css";
function UserItem(props) {
  return (
    <li className="list-element">
      {props.name} ({props.age} years old)
    </li>
  );
}
export default UserItem;
