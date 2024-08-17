import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <div>{counter}</div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
