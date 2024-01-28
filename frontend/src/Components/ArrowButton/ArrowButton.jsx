import React from "react";
import './ArrowButton.css'
import arrowIcon from '../../assets/Arrow.png'
function ArrowButton({btnText , show = true}) {
  return (
    <div>
      <button className="latest">
          {btnText}
        {
          btnText !== "Check Now" ? show && <img src={arrowIcon} alt=""  /> : null
        }
      </button>
    </div>
  );
}

export default ArrowButton;
