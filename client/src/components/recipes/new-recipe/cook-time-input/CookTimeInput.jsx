import React, { useState } from "react";
import { StyledCookTimeInput } from "./CookTimeInput.Styled";

const CookTimeInput = () => {
  const [cookTimeHr, setCookTimeHr] = useState(0);
  const [cookTimeMin, setCookTimeMin] = useState(0);

  const HandleMinChange = (e) => {
    setCookTimeMin(e.target.value);
  };
  const HandleHrChange = (e) => {
    setCookTimeHr(e.target.value);
  };

  return (
    <StyledCookTimeInput>
      <h3>cook time</h3>

      <div className="container-flex parent">
        <div className="container-flex hrs">
          <p>hrs:</p>
          <div className="container-input">
            <input type="text" value={cookTimeHr} onChange={HandleMinChange} />
          </div>
        </div>

        <div className="container-flex mins">
          <p>mins:</p>

          <div className="container-input">
            <input type="text" value={cookTimeMin} onChange={HandleHrChange} />
          </div>
        </div>
      </div>
    </StyledCookTimeInput>
  );
};

export default CookTimeInput;
