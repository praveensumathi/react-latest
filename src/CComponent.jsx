import React from "react";

function CComponent(props) {
  return (
    <div>
      <div>
        <input
          type="text"
          name="C"
          id="cComponent"
          onChange={(e) => props.onChangeFromC(e.target.value)}
        />
        <h4>CComponent:</h4>
        <h6>Value From A Component:</h6>
        <p style={{ backgroundColor: "yellow", color: "black" }}>
          {props.CComponentValue}
        </p>
      </div>
    </div>
  );
}

export default CComponent;
