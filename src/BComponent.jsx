import React from "react";

function BComponent(props) {
  return (
    <div>
      <input
        type="text"
        name="B"
        id="bComponent"
        onChange={(e) => props.onChangeFromB(e.target.value)}
      />
      <h4>BComponent:</h4>
      <h6>Value From A Component:</h6>
      <p style={{ backgroundColor: "black", color: "white" }}>
        {props.BComponentValue}
      </p>
    </div>
  );
}

export default BComponent;
