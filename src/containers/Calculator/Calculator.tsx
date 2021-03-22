import React, { useState } from "react";

import {
  EntryButton,
  OperationButton,
  ActionButton,
  ResultViewer,
} from "./components";

type MathOperation = (left: number, right: number) => number;

const OPERATIONS = [
  {
    text: "/",
    operation: (left: number, right: number): number => left / right,
  },
  {
    text: "x",
    operation: (left: number, right: number): number => left * right,
  },
  {
    text: "-",
    operation: (left: number, right: number): number => left - right,
  },
  {
    text: "+",
    operation: (left: number, right: number): number => left + right,
  },
];

export default function Calculator() {
  const [left, setLeft] = useState<number | null>();
  const [operation, setOperation] = useState<MathOperation | null>();
  const [result, setResult] = useState(0);

  function processOperation() {
    // setResult()
  }

  return (
    <div>
      <ResultViewer result={result} />
      <ActionButton
        text="AC"
        onClick={() => {
          setLeft(null);
          setOperation(null);
          setResult(0);
        }}
      />
      <ActionButton text="+/-" onClick={() => {}} />
      <ActionButton text="%" onClick={() => {}} />
      <div className="Left">
        {Array.from(Array(10)).map((_, index) => (
          <EntryButton value={index} />
        ))}
      </div>
      <div className="right">
        {OPERATIONS.map(({ text, operation }) => (
          <OperationButton
            onClick={() => {
              setOperation(operation);
            }}
            text={text}
          />
        ))}
        <OperationButton
          onClick={() => {
            processOperation();
          }}
          text="="
        />
      </div>
    </div>
  );
}
