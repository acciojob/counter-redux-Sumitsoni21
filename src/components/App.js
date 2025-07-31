import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch} from "react-redux"

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      {/* Do not remove the main div */}

      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "counter/increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter/decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
