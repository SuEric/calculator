import React, { useState } from "react";

import {
  EntryButton,
  OperationButton,
  ActionButton,
  ResultViewer,
} from "./components";

import styles from "./Calculator.module.css";

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
    <div className={styles.Calculator}>
      <ResultViewer result={result} />
      <div className={styles.Buttons}>
        <div className={styles.Left}>
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
          {Array.from(Array(10)).map((_, index) => (
            <EntryButton text={index.toString()} />
          ))}
        </div>
        <div className={styles.Right}>
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
    </div>
  );
}
