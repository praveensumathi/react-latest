import React from "react";

function AComponent(props) {
  return (
    <div>
      <label htmlFor="aComponent">A-ComponentInput</label>
      <input
        type="text"
        name="A"
        id="aComponent"
        onChange={(e) => props.onChangeFromA(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="cComponent">C-ComponentInput</label>
      <input
        type="text"
        name="C"
        id="cComponent"
        onChange={(e) => props.onChangeFromA2(e.target.value)}
      />
      <h4>AComponent:</h4>
      <h6>Value From B Component:</h6>
      <p style={{ backgroundColor: "red", color: "white" }}>
        {props.AComponentValue}
      </p>
    </div>
  );
}

export default AComponent;
