import { useState } from "react";
import "./Modal.css";
let onlyOuter = false;
function Modal(props) {
  // const [clickedCount, setClickedCount] = useState(0);
  function countClicked() {
    // setClickedCount(1);
    onlyOuter = true;
  }
  function checKOuter() {
    //     if (clickedCount == 0) {
    //       props.onHideEmpty();
    //     } else {
    //       setClickedCount(0);
    //     }

    if (onlyOuter == false) {
      props.onHide();
    } else {
      onlyOuter = false;
    }
  }
  return (
    <div className="modal" onClick={checKOuter}>
      <div className="modal-container" onClick={countClicked}>
        <div className="modal-header" onClick={countClicked}>
          invalid input
        </div>
        <div className="modal-body" onClick={countClicked}>
          {props.type == "empty" &&
            "please enter a vaid name and age (non-empty values)"}
          {props.type == "negative" && "please enter a vaid age (>0)"}
          <button className="modal-button" onClick={props.onHide}>
            okay
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
