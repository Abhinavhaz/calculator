import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButton = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      if (input.trim() === "") {
        setResult("Error");
        return;
      }
      const calculatedResult = eval(input);
      if (isNaN(calculatedResult)) {
        setResult("Error");
      } else {
        setResult(calculatedResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div>
      <h2>React Calculator </h2>
      <input value={input} disabled />

      <h4> {result} </h4>

      <div>
        <button className="button" onClick={() => handleButton(7)}>
          7
        </button>
        <button className="button" onClick={() => handleButton(8)}>
          8
        </button>
        <button className="button" onClick={() => handleButton(9)}>
          9
        </button>
        <button className="button" onClick={() => handleButton("+")}>
          +
        </button>
        <br />
        <button className="button" onClick={() => handleButton(4)}>
          4
        </button>
        <button className="button" onClick={() => handleButton(5)}>
          5
        </button>
        <button className="button" onClick={() => handleButton(6)}>
          6
        </button>
        <button className="button" onClick={() => handleButton("-")}>
          -
        </button>
        <br />

        <button className="button" onClick={() => handleButton(1)}>
          1
        </button>
        <button className="button" onClick={() => handleButton(2)}>
          2
        </button>
        <button className="button" onClick={() => handleButton(3)}>
          3
        </button>
        <button className="button" onClick={() => handleButton("*")}>
          *
        </button>
        <br />

        <button className="button" onClick={clear}>
          C
        </button>
        <button className="button" onClick={() => handleButton(0)}>
          0
        </button>
        <button className="button" onClick={calculate}>
          =
        </button>
        <button className="button" onClick={() => handleButton("/")}>
          /
        </button>
      </div>
    </div>
  );
}
export default Calculator;
