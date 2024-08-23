import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const [val, setVal] = useState(100);
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "4rem",
        }}
      >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ fontSize: "4rem" }}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "4rem",
        }}
      >
        <input
          style={{
            padding: 10,
            fontSize: "x-large",
            borderRadius: "20px",
            border: "1px none",
            marginRight: 20,
          }}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          style={{
            padding: 10,
            fontSize: "x-large",
            borderRadius: "20px",
            border: "1px none",
            marginRight: 20,
          }}
          onClick={() => dispatch(incrementByAmount(val))}
        >
          👈INCREMENT BY{" "}
        </button>
      </div>
    </div>
  );
}
