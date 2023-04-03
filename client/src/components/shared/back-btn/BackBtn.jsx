import React from "react";
import { images } from "../../../constants/images";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1); // Go back to the previous page
  }

  return (
    <button onClick={handleClick}>
      <img className="back-img" src={images.backIcon} alt="go back" />
    </button>
  );
};

export default BackBtn;

function MyComponent() {
  return <button onClick={handleClick}>Go Back</button>;
}
