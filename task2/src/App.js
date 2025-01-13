import React from "react";
import { Provider } from "react-redux"; // Importing the Provider
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import store from "./store"; // Import the store

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      {" "}
      <div style={{ textAlign: "center" }}>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </Provider>
  );
}

export default App;
