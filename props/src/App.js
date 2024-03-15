// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseSalary, decreaseSalary } from "./store";
import { giveMoney } from "./childSlice";

function Child({ name }) {
  const dispatch = useDispatch();
  const papaMoney = useSelector((state) => state.papaMoney);
  const giveMoneyToChild = (child) => {
    dispatch(giveMoney({ child, amount: 5 }));
    dispatch(decreaseSalary(5));
  };

  return (
    <div className="Child">
      <h1>여기는 Child {name} 앱 입니다.</h1>
      <button onClick={() => giveMoneyToChild(name)}>용돈 주세요</button>
      <p>
        용돈을 받은 금액:{" "}
        {name === "첫째"
          ? papaMoney.firstChildMoney
          : papaMoney.secondChildMoney}
        만큼 받았습니다.
      </p>
      <p>
        아빠의 월급여{" "}
        {papaMoney - (papaMoney.firstChildMoney + papaMoney.secondChildMoney)}
        만원 되었습니다.
      </p>
      <hr />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const papaMoney = useSelector((state) => state.papaMoney);

  const getSalary = () => {
    dispatch(increaseSalary(700));
  };

  return (
    <div className="App">
      <h1>여기는 아빠 앱 입니다.</h1>
      <button onClick={getSalary}>아빠 월급날</button>
      <p>월급 계좌의 잔액은 {papaMoney}만원 입니다.</p>
      <hr></hr>
      <Child name="첫째" />
      <Child name="둘째" />
    </div>
  );
}

export default App;
