import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../constants/images";

const BackBtn = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1); // Go back to the previous page
  }

  return (
    <button onClick={handleClick} className="back-btn">
      <img
        className="back-img filter-blue"
        src={images.backIcon}
        alt="go back"
      />
    </button>
  );
};

export default BackBtn;
