import React from "react";

function BComponent(props) {
  const { BComponentValue, onChangeFromB } = props;

  return (
    <div>
      <input
        type="text"
        name="B"
        id="bComponent"
        onChange={(e) => onChangeFromB(e.target.value)}
      />
      <h4>BComponent:</h4>
      <h6>Value From A Component:</h6>
      <p style={{ backgroundColor: "black", color: "white" }}>
        {BComponentValue}
      </p>
    </div>
  );
}

export default BComponent;
