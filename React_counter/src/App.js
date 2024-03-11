import React from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const btnClick = () => {
    setNumber(number + 1);
    console.log("리액트 버튼 클릭", number);
  };

  return (
    <div className="App">
      <button onClick={btnClick}>리액트 카운터 버튼</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
