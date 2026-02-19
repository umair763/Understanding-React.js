import { React, useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };

    case "DECREMENT":
      return { ...state, count: Math.max(0, state.count - state.step) };

    case "setCount":
      return { ...state, count: Math.max(0, action.payload) };

    case "setStep":
      return { ...state, step: action.payload };

    case "reset":
      return { count: 0, step: 1 };

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

export const DateCounter = () => {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initialState = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("jun 21 2028");
  date.setDate(date.getDate() + count);

  const [error, setError] = useState("");

  const dec = function () {
    dispatch({ type: "DECREMENT" });
  };

  const inc = function () {
    dispatch({ type: "INCREMENT" });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setError("");
  };

  return (
    <div className="h-full w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
      {/* Step Slider */}
      <div className="w-56 flex items-center mb-6">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
          className="w-full accent-blue-600"
        />
        <span className="ml-2 text-white text-sm w-6 text-right">{step}</span>
      </div>

      {/* Counter Controls */}
      <div
        className="flex items-center bg-white rounded border border-gray-400 overflow-hidden mb-4"
        style={{ width: 220 }}
      >
        <button
          className="w-10 h-10 text-lg text-gray-700 hover:bg-gray-100"
          onClick={dec}
          aria-label="Decrement"
        >
          -
        </button>
        <input
          type="string"
          value={count}
          onChange={defineCount}
          className="flex-1 text-center text-lg outline-none bg-transparent border-0 w-20"
        />
        <button
          className="w-10 h-10 text-lg text-gray-700 hover:bg-gray-100"
          onClick={inc}
          aria-label="Increment"
        >
          +
        </button>
      </div>
      <div className="text-white p-4 font-semibold">{date.toDateString()}</div>

      {/* Error Message */}
      {error && (
        <div className="text-center text-white mb-4 font-medium">{error}</div>
      )}

      {/* Reset Button */}
      <button
        className="bg-white border border-gray-400 rounded px-6 py-2 text-gray-900 hover:bg-gray-100"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
