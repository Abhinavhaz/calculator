import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handlebutton = (value) => {
    setInput(input + value);
  };
  const Calculate = () => {
    if (input == "") {
      setResult("Error");
    } else
      try {
        setResult(eval(input));
      } catch (error) {
        setResult(error.message);
      }
  };

  const Clear = () => {
    setInput("");
    setResult("");
  };
  return (
    <div>
      <h2>React Calculator </h2>
      <input value={input} />

      <h4>value:{result} </h4>

      <div>
        <button className="button" onClick={() => handlebutton(7)}>
          7
        </button>
        <button className="button" onClick={() => handlebutton(8)}>
          8
        </button>
        <button className="button" onClick={() => handlebutton(9)}>
          9
        </button>
        <button className="button" onClick={() => handlebutton("+")}>
          +
        </button>
        <br />
        <button className="button" onClick={() => handlebutton(4)}>
          4
        </button>
        <button className="button" onClick={() => handlebutton(5)}>
          5
        </button>
        <button className="button" onClick={() => handlebutton(6)}>
          6
        </button>
        <button className="button" onClick={() => handlebutton("-")}>
          -
        </button>
        <br />

        <button className="button" onClick={() => handlebutton(1)}>
          1
        </button>
        <button className="button" onClick={() => handlebutton(2)}>
          2
        </button>
        <button className="button" onClick={() => handlebutton(3)}>
          3
        </button>
        <button className="button" onClick={() => handlebutton("*")}>
          *
        </button>
        <br />

        <button className="button" onClick={Clear}>
          C
        </button>
        <button className="button" onClick={() => handlebutton(0)}>
          0
        </button>
        <button className="button" onClick={Calculate}>
          =
        </button>
        <button className="button" onClick={() => handlebutton("/")}>
          /
        </button>
      </div>
    </div>
  );
}
export default Calculator;
