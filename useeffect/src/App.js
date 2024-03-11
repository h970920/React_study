import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [point, setPoint] = useState(0);
  const [grade, setGrade] = useState("신입사원");
  const [salary, setSalary] = useState(5000);
  const [color, setColor] = useState("red");

  const btnWork = () => {
    setPoint(point + 200);

    console.log("일 잘하고 있음?  진급함 ㅋㅋ?");
    console.log("point", point);

    if (point > 1000) {
      setGrade("대리");
      setSalary(7000);
      setColor("blue");
    }

    if (point > 2000) {
      setGrade("과장");
      setSalary(10000);
      setColor("green");
    }

    if (point > 3000) {
      setGrade("부장");
      setSalary(15000);
      setColor("yellow");
    }
  };
  useEffect(() => {
    console.log("축하드립니다~!");
    if (grade === "과장") {
      console.log("과장으로 진급하셨습니다.");
      setColor("green");
    }
    if (grade === "부장") {
      console.log("부장으로 진급하셨습니다.");
      setColor("yellow");
    }
  }, [grade]);

  return (
    <div className="App" style={{ backgroundColor: `${color}` }}>
      <button onClick={btnWork}>일 열심히 함 </button>
      <h1>
        당신의 직급은 {grade} 입니다 <br></br>
        연봉은 {salary} 입니다.
      </h1>
    </div>
  );
}

export default App;
