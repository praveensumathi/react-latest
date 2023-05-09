import React, { useEffect, useState } from "react";
import "./App.css";
import AComponent from "./AComponent";
import BComponent from "./BComponent";
import CComponent from "./CComponent";

function App() {
  const [AComponentValue, setAComponentValue] = useState("");
  const [BComponentValue, setBComponentValue] = useState("");
  const [CComponentValue, setCComponentValue] = useState("");

  return (
    <>
      <AComponent
        AComponentValue={AComponentValue}
        onChangeFromA={(inputValue) => setBComponentValue(inputValue)}
        onChangeFromA2={(inputValue) => setCComponentValue(inputValue)}
      ></AComponent>
      <hr />
      <BComponent
        BComponentValue={BComponentValue}
        onChangeFromB={(inputValue) => setAComponentValue(inputValue)}
      ></BComponent>
      <hr />
      <CComponent
        CComponentValue={CComponentValue}
        onChangeFromC={(inputValue) => setAComponentValue(inputValue)}
      ></CComponent>
    </>
  );
}

export default App;
