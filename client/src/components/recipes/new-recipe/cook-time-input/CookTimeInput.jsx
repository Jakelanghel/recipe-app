import React, { useState } from "react";
import { StyledCookTimeInput } from "./CookTimeInput.Styled";

const CookTimeInput = (props) => {
  const [cookTimeHr, setCookTimeHr] = useState("");
  const [cookTimeMin, setCookTimeMin] = useState("");

  const { hrsRef, minsRef } = props;

  const HandleHrChange = (e) => {
    // replace any non-digit character with an empty string
    const newValue = e.target.value.replace(/\D/, "");
    setCookTimeHr(newValue);
  };

  const HandleMinChange = (e) => {
    const newValue = e.target.value.replace(/\D/, "");
    setCookTimeMin(newValue);
  };

  return (
    <StyledCookTimeInput>
      <label htmlFor="cookTime">Cook time</label>

      <div className="container-flex parent">
        <div className="container-flex hrs">
          <p>hrs:</p>
          <div className="container-input">
            <input
              type="text"
              inputMode="numeric"
              value={cookTimeHr}
              onChange={HandleHrChange}
              ref={hrsRef}
            />
          </div>
        </div>

        <div className="container-flex mins">
          <p>mins:</p>

          <div className="container-input">
            <input
              type="text"
              inputMode="numeric"
              value={cookTimeMin}
              onChange={HandleMinChange}
              ref={minsRef}
            />
          </div>
        </div>
      </div>
    </StyledCookTimeInput>
  );
};

export default CookTimeInput;
