import "./App.css";
import { useState, useRef } from "react";

function BadInput() {
  const [name, setName] = useState("Guest");
  const [inputValue, setInputValue] = useState("");

  const hInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const hChangeName = () => {
    setName(inputValue);
  };

  return (
    <div className="BadInput">
      <input type="text" value={inputValue} onChange={hInputChange}></input>
      <button onClick={hChangeName}>이름전송</button>

      <h1>안녕하세요. {name}님!</h1>
    </div>
  );
}

function GoodInput() {
  const [name, setName] = useState("Guest");
  const inputRef = useRef("");

  const refChange = () => {
    setName(inputRef.current.value);
  };

  return (
    <div className="GoodInput">
      <input type="text" ref={inputRef} onChange={refChange}></input>

      <h1>안녕하세요. {name}님!</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BadInput />
      <hr></hr>
      <GoodInput />
    </div>
  );
}

export default App;
